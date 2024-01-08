import { Box, keyframes } from '@mui/material';

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = () => (
  <Box
    sx={{
      width: 50,
      height: 50,
      border: '16px solid #d9d1d3',
      borderTop: '16px solid #fd4579',
      borderRadius: '50%',
      animation: `${spinning} 2s linear infinite`
    }}
  />
);
