'use client'; // Note: need this whenever I use Material UI because it does not support Server Components

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

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
    <Image src="/heart.gif" alt="Date Night Logo" width={180} height={165} priority />
    <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '4rem', md: '6rem' } }}>
      Date Night
    </Typography>
    <Typography variant="body1">
      Running out of ideas for dates? Just want to imagine what it&apos;s like going on a date? Use
      this tool to find something new!
    </Typography>
  </Box>
);
