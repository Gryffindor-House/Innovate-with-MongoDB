import React from 'react';
import { Button, Box, Grid, GridItem, VStack } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Map from './map';
import Navbar from './navbar';

export const Dashboard = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <Navbar />
        <GridItem h="10" colStart={2} colEnd={3} p={'55px'}>
          <Map />
        </GridItem>
        <GridItem colStart={3} colEnd={5} colSpan={2} h="10">
          <Wreckinfo />
        </GridItem>
      </Grid>
    </>
  );
};
