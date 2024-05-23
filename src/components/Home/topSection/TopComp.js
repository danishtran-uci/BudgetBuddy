import { Box } from '@mui/material';
import React from 'react';
import WelcomeBanner from './WelcomeBanner';
import AddPurchaseButton from './AddPurchaseButton';

function TopComp({ handleAddPurchaseData  }) {
  return (
    <>
      {/* Container first section of the page; with welcome banner and button to log new purchases */}
      <Box
        style={{
          width:'100%',
          height:'20%',
          display: 'flex',
          alignItems:'center',
          justifyContent: 'space-evenly',
        }}
      >
        <WelcomeBanner />

        <AddPurchaseButton handleAddPurchaseData={handleAddPurchaseData}/>
      </Box>
    </>
  )
}

export default TopComp;