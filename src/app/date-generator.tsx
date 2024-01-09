'use client';

import { pipe } from '@effect/data/Function';
import type { BoxProps } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import * as DE from '@nll/datum/DatumEither';
import { ReactNode, useState } from 'react';
import { useQuery } from 'react-query';

import { Loader } from '@/components/loader';

import { DateInfo } from '../components/date-info';
import { Filters } from '../components/filters';
import { convertResponseToDE, DateParams, fetchDate } from './api';

const InfoContainer = ({ sx, children }: { sx?: BoxProps['sx']; children: ReactNode }) => (
  <Box
    sx={{
      background: t => t.palette.common.white,
      border: t => `1px solid ${t.palette.common.white}`,
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

export const DateGenerator = () => {
  const [dateParams, setDateParams] = useState<DateParams>({
    type: null,
    price: null,
    accessibility: null
  });
  const { refetch, ...response } = useQuery({
    queryKey: ['dateidea'],
    queryFn: () => fetchDate(dateParams),
    enabled: false
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
        <Button variant="contained" onClick={() => refetch()}>
          Generate a Date
        </Button>
        <Filters dateParams={dateParams} setDateParams={setDateParams} />
      </Box>

      <InfoContainer>
        {pipe(
          convertResponseToDE(response),
          DE.refreshFold(
            () => (
              <Typography variant="h6">
                Click &quot;Generate a Date&quot; to get started!
              </Typography>
            ),
            () => <Loader />,
            ({ _tag, error }) => {
              console.error(`An error occurred with the type ${_tag}: ${error} ${response.error}`);
              return <Typography>{error}</Typography>;
            },
            date => <DateInfo date={date} />
          )
        )}
      </InfoContainer>
    </Box>
  );
};
