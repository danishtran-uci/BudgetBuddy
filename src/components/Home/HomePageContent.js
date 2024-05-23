import React, { useState } from 'react';
import { Box } from '@mui/material';
import SpendingChart from './SpendingChart';
import TopComp from './topSection/TopComp';
import SpendingReviewSectionComp from './spendingReviewSection/SpendingReviewSectionComp';

function HomePageContent() {
  const [purchaseData, setPurchaseData] = useState([]);

  function handleAddPurchaseData(data) {
    setPurchaseData([...purchaseData, data]);
  };

  return (
    // Main Container for defining size of the component   
    <Box
      style={{
        width:'80vw',
        height:'100vh',
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

        <SpendingReviewSectionComp />

        {/* Container for Chart */}
        <Box
          style={{
            width:'100%',
            height:'60%',
            marginTop: '5vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'space-evenly',
          }}
        >
          <SpendingChart purchaseData={purchaseData}/>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePageContent;