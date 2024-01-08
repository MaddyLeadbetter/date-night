import * as t from 'io-ts';

export const Type = t.keyof({
  education: null,
  recreational: null,
  social: null,
  diy: null,
  charity: null,
  cooking: null,
  relaxation: null,
  music: null,
  busywork: null
});
export type Type = t.TypeOf<typeof Type>;

export const DateNight = t.type({
  activity: t.string,
  type: Type,
  price: t.number,
  accessibility: t.number,
  link: t.union([t.string, t.null])
});
export type DateNight = t.TypeOf<typeof DateNight>;

export const DateResult = t.type({ data: DateNight });
export type DateResult = t.TypeOf<typeof DateResult>;
