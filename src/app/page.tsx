'use client'; // Unfortunately the creation of the client needs to be use client??

import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

import mainTheme from '@/theme';

import { Instructions } from '../components/instructions';
import { DateGenerator } from './date-generator';

const Home = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={mainTheme}>
      <Instructions />
      <QueryClientProvider client={queryClient}>
        <DateGenerator />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Home;
