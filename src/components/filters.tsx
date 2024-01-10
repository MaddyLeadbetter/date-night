'use client';

import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch
} from '@mui/material';
import { SetStateAction, useCallback, useState } from 'react';

import { DateParams } from '../app/api';
import { Type } from '../app/codecs';

export const Filters = ({
  dateParams,
  setDateParams
}: {
  dateParams: DateParams;
  setDateParams: (v: SetStateAction<DateParams>) => void;
}) => {
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button startIcon={<FilterAltIcon />} onClick={openDrawer}>
        Filter Dates
      </Button>
      <Drawer anchor="right" variant="persistent" open={open} PaperProps={{ sx: { px: 3, py: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <IconButton sx={{ width: 40, ml: 'auto' }} onClick={open ? closeDrawer : openDrawer}>
            <CloseIcon />
          </IconButton>

          <FormControl size="small" sx={{ minWidth: 230 }}>
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

          <Box>
            <FormControlLabel
              control={
                <Switch
                  sx={{ ml: -0.5 }}
                  checked={!!dateParams.price}
                  onChange={e =>
                    setDateParams(v => ({
                      ...v,
                      price: e.target.checked ? [0, 100] : null
                    }))
                  }
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Filter by Price"
            />
            {!!dateParams.price && (
              <Slider
                sx={{ ml: 1 }}
                aria-label="price"
                step={10}
                min={0}
                max={100}
                marks
                valueLabelDisplay="auto"
                value={dateParams.price}
                onChange={(_e, newValue) =>
                  setDateParams(v => ({ ...v, price: newValue as [number, number] }))
                }
              />
            )}
          </Box>

          <Box>
            <FormControlLabel
              control={
                <Switch
                  sx={{ ml: -0.5 }}
                  checked={!!dateParams.accessibility}
                  onChange={e =>
                    setDateParams(v => ({
                      ...v,
                      accessibility: e.target.checked ? [0, 100] : null
                    }))
                  }
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Filter by Accessibility"
            />
            {!!dateParams.accessibility && (
              <Slider
                sx={{ ml: 1 }}
                aria-label="accessibility"
                step={10}
                min={0}
                max={100}
                marks
                valueLabelDisplay="auto"
                value={dateParams.accessibility}
                onChange={(_e, newValue) =>
                  setDateParams(v => ({ ...v, accessibility: newValue as [number, number] }))
                }
              />
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
