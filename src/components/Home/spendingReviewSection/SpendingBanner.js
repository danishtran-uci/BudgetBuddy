import { Box, Typography } from '@mui/material';
import React from 'react';

function SpendingBanner() {
  return (
    <>
      {/* Container for spending banner */}
      <Box
        style={{
          width:'30%',
          height:'40%',
          backgroundColor: '#D9D9D9',
          display: 'flex',
          alignItems:'center',
          justifyContent: 'center'
        }}
      >
          <Typography
            style={{
              fontSize: '2.5vh',
              fontWeight: 'bold'
            }}
          >
            Your spending in review:
          </Typography>
      </Box>
    </>
  )
}

export default SpendingBanner;