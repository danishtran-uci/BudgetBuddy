import { Box } from '@mui/material';
import React from 'react';
import SpendingBanner from './SpendingBanner';
import Progress from './progress/Progress';

function SpendingReviewSectionComp( {purchaseData, budget} ) {
  return (
    <>
      {/* Container second section of the page; with spend in review banner and progress bar of current month's budget */}
      <Box
        style={{
          width:'100%',
          height:'20%',
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'space-evenly',
        }}
      >
        <SpendingBanner />
        <Progress purchaseData={purchaseData} budget={budget}/>
      </Box>
    </>
  )
}

export default SpendingReviewSectionComp;