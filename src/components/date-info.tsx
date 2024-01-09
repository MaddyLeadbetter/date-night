import { pipe } from '@effect/data/Function';
import * as Str from '@effect/data/String';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PaidIcon from '@mui/icons-material/Paid';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import type { SxProps, Theme } from '@mui/material';
import { Box, Link, Rating, Typography } from '@mui/material';
import { ReactNode } from 'react';

import { DateNightSuccess as DateNight } from '../app/codecs';

const formatActivity = (a: string) =>
  pipe(a, Str.replace('with a friend', ''), Str.replace('with someone', ''));

const RatingInfo = ({
  label,
  rating,
  filledIcon,
  emptyIcon,
  sx
}: {
  label: string;
  rating: number;
  filledIcon?: ReactNode;
  emptyIcon?: ReactNode;
  sx?: SxProps<Theme>;
}) => (
  <Box sx={sx}>
    <Typography sx={{ fontWeight: 'bold' }}>{label}:</Typography>
    <Typography sx={{ display: 'flex', gap: 1 }}>
      <Rating
        sx={{ color: t => t.palette.primary.light }}
        name={label}
        value={rating * 10}
        precision={0.5}
        max={10}
        readOnly
        icon={filledIcon}
        emptyIcon={emptyIcon}
      />
    </Typography>
  </Box>
);

export const DateInfo = ({
  date: { activity, link, price, accessibility }
}: {
  date: DateNight;
}) => (
  <>
    <Typography sx={{ mb: 1 }} variant="h6">
      {formatActivity(activity)}
    </Typography>
    <RatingInfo
      label="Price"
      rating={price}
      filledIcon={<PaidIcon />}
      emptyIcon={<PaidOutlinedIcon />}
    />
    <RatingInfo
      sx={{ mt: 2 }}
      label="Accessibility"
      rating={accessibility}
      filledIcon={<AccessibilityNewIcon />}
      emptyIcon={<AccessibilityNewIcon />}
    />
    {link && (
      <Typography sx={{ mt: 2 }}>
        Get started here: <Link sx={{ color: t => t.palette.primary.dark }}>{link}</Link>
      </Typography>
    )}
  </>
);
