import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Navbar from './navbar';
import Infobox from './infobox';
import GoogleMap from './map';

export const Dashboard = () => {
  return (
    <>
      <Grid>
        <GridItem colStart={1} colEnd={2}>
          <GoogleMap />
          <Wreckinfo />
        </GridItem>
      </Grid>
      <Navbar />
      <Infobox />
    </>
  );
};
