import React from 'react';
import { Button, Box, Grid, GridItem, VStack } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Map1 from './map';
import Navbar from './navbar';
import Infobox from './infobox';
  

export const Dashboard = () => {
  return (
    <>
    <GridItem h="15" colStart={2} colEnd={3} pt={'50px'}>
      <Navbar />
        
      </GridItem>
    </>
  );
};
