import { Box } from '@mui/material';
import React from 'react';
import ProgressTitle from './ProgressTitle';
import ProgressBar from './ProgressBar';
import AmtSpendRemaining from './AmtSpendRemaining';

function Progress() {
  return (
    <>
      <Box
        style={{
          width:'40%',
          height:'100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center'
        }}
      >
        <ProgressTitle />
        <ProgressBar />
        <AmtSpendRemaining />
      </Box>
    </>
  )
}

export default Progress;