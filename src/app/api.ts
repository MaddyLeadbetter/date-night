import { pipe } from '@effect/data/Function';
import * as O from '@effect/data/Option';
import * as A from '@effect/data/ReadonlyArray';
import * as R from '@effect/data/ReadonlyRecord';
import * as S from '@effect/data/Struct';
import * as DE from '@nll/datum/DatumEither';
import axios from 'axios';
import { UseQueryResult } from 'react-query';

import { DateNightFailure, DateNightSuccess, Type } from './codecs';

export type DateParams = {
  type: Type | null;
  price: [number, number] | null;
  accessibility: [number, number] | null;
};

export const fetchDate = async (params: DateParams) =>
  pipe(
    params,
    S.evolve({
      type: t => (t ? `type=${t}` : ''),
      price: p => (p ? `minprice=${p[0] / 100}&maxPrice=${p[1] / 100}` : ''),
      accessibility: a => (a ? `minaccessibility=${a[0] / 100}&maxaccessibility=${a[1] / 100}` : '')
    }),
    R.filter(val => !!val),
    R.collect((_key, val) => val),
    A.join('&'),
    async queryParams =>
      await axios.get(`http://www.boredapi.com/api/activity?${queryParams}`, {
        method: 'GET'
      })
  );

type Error = { _tag: string; error: string };

// This is a bit of a convoluted way to show DatumEither but wanted to show an example
export const convertResponseToDE = <T>({
  data,
  isError,
  isFetching,
  isLoading
}: Omit<UseQueryResult<{ data: T }, unknown>, 'refetch'>): DE.DatumEither<
  Error,
  DateNightSuccess
> =>
  pipe(
    isError ? O.some(DE.failure({ _tag: 'api', error: 'Failed to load api' })) : O.none(),
    O.orElse(() => (isFetching || isLoading ? O.some(DE.pending) : O.none())),
    O.orElse(() =>
      pipe(
        data?.data,
        O.fromNullable,
        O.map(d =>
          DateNightSuccess.is(d)
            ? DE.success(d)
            : DateNightFailure.is(d)
              ? DE.failure({ _tag: 'noDate', error: d.error })
              : DE.failure({ _tag: 'decode', error: 'Api returned malformed response' })
        )
      )
    ),
    O.getOrElse(() => DE.initial)
  );
