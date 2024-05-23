import { CircularProgress } from '@mui/material';
import React from 'react';

function ProgressBar() {
  return (
    <>
      {/* Progress Circle */}
      <CircularProgress 
        variant="determinate" 
        value={65} 
        size={75}
        thickness={5}
        sx={{ color: '#000000'}}
      />
    </>
  )
}

export default ProgressBar;