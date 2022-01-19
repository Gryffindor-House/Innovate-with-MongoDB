import React from 'react';
import { Button, Box, Grid, GridItem } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Map from './map';
import Navbar from './navbar';

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <GridItem h="10" colStart={2} colEnd={3}>
          <Map />
        </GridItem>
        <GridItem colStart={3} colEnd={5} colSpan={2} h="10">
          <Wreckinfo />
        </GridItem>
      </Grid>
    </>
  );
};
