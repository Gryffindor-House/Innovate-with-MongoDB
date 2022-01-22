import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Navbar from './navbar';
import GoogleMap from './map';
import FAQs from './FAQ';
import Footer from './footer';

export const Dashboard = () => {
  return (
    <>
    <Navbar />
     <Grid>
      <GridItem colStart={1} colEnd={2} p={"40px"}>
          <GoogleMap />
      </GridItem>
          <GridItem colStart={1} colEnd={2} mt={"-80px"}>
            <Wreckinfo />
          </GridItem>
          <GridItem rowstart={5}>
          <Footer mt={"1000px"}/>
          </GridItem>
      </Grid>

    </>
  );
};
