import { Typography } from '@mui/material';
import React from 'react';

function ProgressTitle() {
  return (
    <>
      <Typography
        style={{
          fontSize: '1.25vw',
          fontWeight: 'bold',
          marginBottom: '1vh'
        }}
      >
        Progress Bar showing current month{"'"}s budget
      </Typography>
    </>
  )
}

export default ProgressTitle;