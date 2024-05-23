import { Box, Typography, IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from 'react';
import PurchaseDialog from './PurchaseDialog';

const iconButtonTextStyle = {
  fontSize: '1.5vh',
  color: 'grey'
}

function AddPurchaseButton({ handleAddPurchaseData }) {
  const [open, setOpen] = useState(false);
  const [purchaseData, setPurchaseData] = useState();

  function handleClickOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  function handleAddData(data) {
    setOpen(false);
    setPurchaseData(data);
    handleAddPurchaseData(data);
  };

  return (
    <>
      {/* Container for log new purchase button and its text */}
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'space-evenly'
        }}
      >
        {/* Button for adding purchase */}
        <IconButton onClick={handleClickOpen}>
          <AddBoxIcon 
            style={{
              fontSize: '7vh'
            }}
          />
        </IconButton>

        {/* Text for labeling the text */}
        <Typography style={iconButtonTextStyle}>
          Log New
        </Typography>
        <Typography  style={iconButtonTextStyle}>
          Purchase Activity
        </Typography>

        <PurchaseDialog 
          selectedValue={purchaseData}
          open={open}
          onClose={handleClose}
          onAdd={handleAddData}
        />
      </Box>
    </>
  )
}

export default AddPurchaseButton;