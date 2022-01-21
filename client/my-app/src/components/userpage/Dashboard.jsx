import React from 'react';
import { Button, Box, Grid, GridItem, VStack } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Navbar from './navbar';
import Infobox from './infobox';
import GoogleMap from './map';

export const Dashboard = () => {
  return (
    <>
      <Grid gap={1}>
        <Navbar />
        <GoogleMap />
      </Grid>
    </>
  );
};
