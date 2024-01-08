import { pipe } from '@effect/data/Function';
import * as Str from '@effect/data/String';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PaidIcon from '@mui/icons-material/Paid';
import type { BoxProps } from '@mui/material';
import { Box, Link, Rating, Typography } from '@mui/material';
import { ReactNode } from 'react';

import { DateNight } from '../app/codecs';

const formatActivity = (a: string) =>
  pipe(a, Str.replace('with a friend', ''), Str.replace('with someone', ''));

const RatingInfo = ({
  label,
  rating,
  children
}: {
  label: string;
  rating: number;
  children: ReactNode;
}) => (
  <Box>
    <Typography sx={{ fontWeight: 'bold' }}>{label}:</Typography>
    <Typography sx={{ display: 'flex', gap: 1 }}>
      {children}
      <Rating name="price" value={rating * 5} precision={0.5} readOnly />
    </Typography>
  </Box>
);

export const InfoContainer = ({ sx, children }: { sx?: BoxProps['sx']; children: ReactNode }) => (
  <Box
    sx={{
      border: t => `1px solid ${t.palette.neutral.light}`,
      borderRadius: 4,
      mx: 2,
      mb: 4,
      px: 4,
      py: 3,
      minWidth: { xs: 0, md: 500 },
      ...sx
    }}>
    {children}
  </Box>
);

export const DateInfo = ({
  date: { activity, link, price, accessibility }
}: {
  date: DateNight;
}) => (
  <InfoContainer>
    <Typography sx={{ mb: 1 }} variant="h6">
      {formatActivity(activity)}
    </Typography>
    <RatingInfo label="Price" rating={price}>
      <PaidIcon sx={{ width: 24, height: 24, color: t => t.palette.primary.dark }} />
    </RatingInfo>
    <RatingInfo label="Accessibility" rating={accessibility}>
      <AccessibilityNewIcon sx={{ width: 24, height: 24, color: t => t.palette.primary.dark }} />
    </RatingInfo>
    {link && <Link>{link}</Link>}
  </InfoContainer>
);
