import React from 'react';
import NavBar from '../Nav/NavBar';
import { Box } from '@mui/material';
import HomePageContent from './HomePageContent';

function HomePage() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <NavBar />
      <HomePageContent />
    </Box>
  );
}

export default HomePage;