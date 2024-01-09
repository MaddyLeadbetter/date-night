'use client'; // Note: need this whenever I use Material UI because it does not support Server Components

import { Box, keyframes } from '@mui/material';

const heartPiece1 = keyframes`
  0% {
    left: -32px;
    top: -32px;
  }
  25% {
    left: -32px;
    top: 32px;
  }
  50% {
    left: 32px;
    top: 32px;
  }
  75% {
    left: 32px;
    top: -32px;
  }
  100% {
    left: -32px;
    top: -32px;
  }
`;

const heartPiece2 = keyframes`
  0% {
    left: 32px;
    top: -32px;
  }
  25% {
    left: -32px;
    top: -32px;
  }
  50% {
    left: -32px;
    top: 32px;
  }
  75% {
    left: 32px;
    top: 32px;
  }
  100% {
    left: 32px;
    top: -32px;
  }
`;

export const AnimatedHeart = () => (
  <Box sx={{ position: 'relative', mt: 5, mb: 15 }}>
    <Box
      sx={{
        width: 80,
        height: 80,
        background: t => t.palette.primary.dark,
        transform: 'rotate(45deg)',
        position: 'absolute'
      }}
    />
    <Box
      sx={{
        width: 80,
        height: 80,
        background: t => t.palette.primary.dark,
        borderRadius: '50%',
        position: 'absolute',
        animation: `${heartPiece1} 10s cubic-bezier(1, 0.1, 0.3, 1) infinite`
      }}
    />
    <Box
      sx={{
        width: 80,
        height: 80,
        background: t => t.palette.primary.dark,
        borderRadius: '50%',
        position: 'absolute',
        animation: `${heartPiece2} 10s cubic-bezier(1, 0.1, 0.3, 1) infinite`
      }}
    />
  </Box>
);
