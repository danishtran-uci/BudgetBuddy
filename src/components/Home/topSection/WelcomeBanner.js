import { Box, Typography } from '@mui/material';
import React from 'react';

function WelcomeBanner() {
  return (
    <>
      {/* Container for welcome user banner */}
      <Box
        style={{
          width:'60%',
          height:'60%',
          backgroundColor: '#D9D9D9',
          marginLeft: '10vw',
          display: 'flex',
          alignItems:'center',
          justifyContent: 'center'
        }}
      >
        {/* Text within banner */}
        <Typography
          style={{
            fontSize: '2vw',
            fontWeight: 'bold'
          }}
        >
          Welcome, User
        </Typography>
      </Box>
    </>
  )
}

export default WelcomeBanner;