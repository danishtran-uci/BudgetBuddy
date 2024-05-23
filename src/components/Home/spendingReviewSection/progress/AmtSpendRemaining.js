import { Box, Typography } from '@mui/material';
import React from 'react';

function AmtSpendRemaining() {
  return (
    <>
      {/* Amount Spend and Remaining */}
      <Box
        style={{
          width:'100%',
          height:'30%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        {/* Amount Spend*/}
        <Box
          style={{
            marginTop: '1vh',
            marginRight: '5vw',
            width:'40%',
            height:'80%',
            backgroundColor: '#D9D9D9',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            style={{
              fontWeight: 'bold',                    
            }}
          >
            Amount Spend: Temp
          </Typography>
        </Box>

        {/* Amount Remaining */}
        <Box
          style={{
            marginTop: '1vh',
            width:'40%',
            height:'80%',
            backgroundColor: '#D9D9D9',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            style={{
              fontWeight: 'bold',                    
            }}
          >
            Amount Remaining: Temp
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default AmtSpendRemaining;