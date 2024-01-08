'use client';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SetStateAction } from 'react';

import { Type } from '../app/codecs';
import { DateParams } from '../app/date-generator';

export const Filters = ({
  setDateParams
}: {
  setDateParams: (v: SetStateAction<DateParams>) => void;
}) => (
  <FormControl size="small" sx={{ minWidth: 100 }}>
    <InputLabel id="date-type-label">Type</InputLabel>
    <Select<Type | ''>
      sx={{ maxWidth: 500 }}
      labelId="date-type-label"
      id="date-type-select"
      label="Type"
      required
      defaultValue=""
      onChange={({ target: { value } }) =>
        setDateParams(previous => ({ ...previous, type: value as Type }))
      }>
      <MenuItem value="education">Education</MenuItem>
      <MenuItem value="recreational">Recreational</MenuItem>
      <MenuItem value="social">Social</MenuItem>
      <MenuItem value="diy">DIY</MenuItem>
      <MenuItem value="charity">Charity</MenuItem>
      <MenuItem value="cooking">Cooking</MenuItem>
      <MenuItem value="relaxation">Relaxation</MenuItem>
      <MenuItem value="music">Music</MenuItem>
      <MenuItem value="busywork">Busywork</MenuItem>
    </Select>
  </FormControl>
);
