import { CircularProgress } from '@mui/material';
import React from 'react';

function ProgressBar( {budget, monthSpending} ) {
  const progress = (monthSpending / budget) * 100;
  const isOverBudget = progress > 100;

  return (
    <>
      {/* Progress Circle */}
      <CircularProgress 
        variant="determinate" 
        value={progress} 
        size={75}
        thickness={5}
        sx={{ color: isOverBudget ? 'red' : 'green' }}
      />
    </>
  )
}

export default ProgressBar;