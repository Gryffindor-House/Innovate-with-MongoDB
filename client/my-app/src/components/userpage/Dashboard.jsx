import React from 'react';
import { Button, Box, Grid, GridItem, VStack, grid, Flex } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Navbar from './navbar';
import Infobox from './infobox';
import GoogleMap from './map';

export const Dashboard = () => {
  return (
    <>
       <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <Navbar />
        <GridItem h="15" colStart={2} colEnd={3} pt={'50px'} ml={-3}>
          <GoogleMap />
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
}