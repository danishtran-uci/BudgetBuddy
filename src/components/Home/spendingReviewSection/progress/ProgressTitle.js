import { Typography } from '@mui/material';
import React from 'react';

function ProgressTitle() {
  return (
    <>
      <Typography
        style={{
          fontSize: '2.5vh',
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