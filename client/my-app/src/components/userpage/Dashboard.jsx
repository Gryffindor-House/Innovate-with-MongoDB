import React from 'react';
import { Button, Box, Grid, GridItem, VStack } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Map from './map';
import Navbar from './navbar';
import Infobox from './infobox';
  

export const Dashboard = () => {
  return (
    <>
      <Grid gap={1}>
        <Navbar />
        
      </Grid>
    </>
  );
};
