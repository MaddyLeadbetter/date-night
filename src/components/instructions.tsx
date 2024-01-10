'use client'; // Note: need this whenever I use Material UI because it does not support Server Components

import { Box, Typography } from '@mui/material';

import { AnimatedHeart } from './heart';

export const Instructions = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      mt: 5,
      px: 2,
      alignItems: 'center'
    }}>
    <AnimatedHeart />
    <Typography
      variant="h1"
      sx={{
        mb: 1,
        fontSize: { xs: '2rem', sm: '4rem', md: '6rem' },
        fontFamily: '__Rampart_One_bcc7a0, __Rampart_One_Fallback_bcc7a0'
      }}>
      Date Nite
    </Typography>
    <Typography variant="body1">
      Running out of ideas for dates? Just want to imagine what it&apos;s like going on a date? Use
      this tool to find something to spice things up!
    </Typography>
  </Box>
);
