import React from 'react';
import { Button, Box, Grid, GridItem, VStack } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Map from './map';
import Navbar from './navbar';
import Infobox from './infobox';

export const Dashboard = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <Navbar />
        <GridItem h="15" colStart={2} colEnd={3} p={'25px'}>
          <Map />
        </GridItem>
        <GridItem colStart={3} colEnd={5} colSpan={2} h="10">
          <Wreckinfo />
        </GridItem>
        <GridItem rowStart={2} colStart={2} colEnd={3} colSpan={2} h="10">
        <Infobox />
        </GridItem>
      </Grid>
    </>
  );
};
