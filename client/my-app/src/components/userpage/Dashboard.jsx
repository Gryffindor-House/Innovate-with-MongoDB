import React from 'react';
import { Button, Box, Grid, GridItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../../context/UserAuthContext';
import Wreckinfo from './wreckinfo';
import Map from './map';

export const Dashboard = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <h1>Dashboard</h1>;
      <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <GridItem h="10" colStart={2} colEnd={3}>
          <Map />
        </GridItem>

        <GridItem colStart={3} colEnd={5} colSpan={2} h="10">
          <Wreckinfo />
        </GridItem>
      </Grid>
      <div className="d-grid gap-2">
        <Button onClick={handleLogout} colorScheme="blue">
          Log out
        </Button>
      </div>
    </>
  );
};
