'use client';

import { constNull, pipe } from '@effect/data/Function';
import * as O from '@effect/data/Option';
import { Box, Button, Typography } from '@mui/material';
import * as DE from '@nll/datum/DatumEither';
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { Loader } from '@/components/loader';

import { DateInfo, InfoContainer } from '../components/date-info';
import { Filters } from '../components/filters';
import { DateNight, Type } from './codecs';

export type DateParams = {
  type?: Type;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  accesibility?: number;
  minAccessibility?: number;
  maxAccessibility?: number;
};

type DateResultDE = DE.DatumEither<{ _tag: string; error: unknown }, DateNight>;

const fetchDate = async (params: DateParams) =>
  await axios.get('http://www.boredapi.com/api/activity?participants=2', { method: 'GET' });

export const DateGenerator = () => {
  const [dateParams, setDateParams] = useState<DateParams>({});
  const { data, isError, error, refetch, isFetching, isLoading } = useQuery({
    queryKey: ['dateidea'],
    queryFn: () => fetchDate(dateParams),
    enabled: false
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
      <Button sx={{ mt: 3 }} variant="contained" onClick={() => refetch()}>
        Generate a Date
      </Button>
      <Filters setDateParams={setDateParams} />

      {/* This is a bit of a convoluted way to show DatumEither but wanted to show an example */}
      {pipe(
        isError ? O.some(DE.failure({ _tag: 'api', error }) as DateResultDE) : O.none(),
        O.orElse(() => (isFetching || isLoading ? O.some(DE.pending as DateResultDE) : O.none())),
        O.orElse(() =>
          pipe(
            data?.data,
            O.fromNullable,
            O.map(d =>
              DateNight.is(d)
                ? (DE.success(d) as DateResultDE)
                : DE.failure({ _tag: 'decode', error: 'Data is incorrect format' })
            )
          )
        ),
        O.getOrElse(() => DE.initial as DateResultDE),
        DE.refreshFold(
          constNull,
          () => (
            <InfoContainer>
              <Loader />
            </InfoContainer>
          ),
          e => {
            console.error('An error occurred with the type', e._tag, ':', e.error);
            return <Typography>Uh oh something went wrong!</Typography>;
          },
          date => <DateInfo date={date} />
        )
      )}
    </Box>
  );
};
