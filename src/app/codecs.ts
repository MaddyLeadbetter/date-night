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

export const DateNightSuccess = t.type({
  activity: t.string,
  type: Type,
  price: t.number,
  accessibility: t.number,
  link: t.union([t.string, t.null])
});
export type DateNightSuccess = t.TypeOf<typeof DateNightSuccess>;

export const DateNightFailure = t.type({ error: t.string });
export type DateNightFailure = t.TypeOf<typeof DateNightFailure>;

export const DateResult = t.union([DateNightSuccess, DateNightFailure]);
export type DateResult = t.TypeOf<typeof DateResult>;
