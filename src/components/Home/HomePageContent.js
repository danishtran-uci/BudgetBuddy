import React from 'react';
import { Box } from '@mui/material';
import SpendingChart from './chart/SpendingChart';
import TopComp from './topSection/TopComp';
import SpendingReviewSectionComp from './spendingReviewSection/SpendingReviewSectionComp';

function HomePageContent({ purchaseData, handleAddPurchaseData, budget }) {
  return (
    // Main Container for defining size of the component   
    <Box
      style={{
        width:'100%',
        height:'100%',
      }}
    >
      {/* Container for holding whole component's content */}
      <Box
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TopComp handleAddPurchaseData={handleAddPurchaseData} />        

        <SpendingReviewSectionComp purchaseData={purchaseData} budget={budget} />

        <SpendingChart purchaseData={purchaseData}/>
      </Box>
    </Box>
  );
}

export default HomePageContent;