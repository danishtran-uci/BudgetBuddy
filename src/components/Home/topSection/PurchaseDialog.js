import { Dialog, DialogTitle, DialogActions, Button, DialogContent, TextField, Autocomplete } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import CurrencyTextField from '@lupus-ai/mui-currency-textfield/dist/CurrencyTextField';
import dayjs from 'dayjs'

function PurchaseDialog(props) {
  const { open, onClose, onAdd } = props;

  const [purchaseData, setPurchaseData] = useState({
    type: '',
    amount: '',
    date: dayjs(),
  });

  function handleAdd() {
    onAdd(purchaseData);
    console.log(purchaseData)
    setPurchaseData({
      type: '',
      amount: '',
      date: dayjs(),
    });
    onClose();
  };

  function handleClose() {
    onClose();
  };

  return (
    <Dialog 
      onClose={handleClose} 
      open={open}
    >
      <DialogTitle>Add New Purchase Data</DialogTitle>
      <DialogContent>
        <Autocomplete
          id="type"
          options={['Housing', 'Transportation', 'Food', 'Savings', 'Utilities', 'Miscellaneous']}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Purchase Type" />}
          value={purchaseData.type}
          onChange={(_, value) => setPurchaseData({ ...purchaseData, type: value })}
        />
        <CurrencyTextField
          style={{ width: '100%' }}
          label="Purchase Amount"
          placeholder="0.00"
          variant="outlined"
          currencySymbol="$"
          decimalCharacter="."
          value={purchaseData.amount}
          onChange={(_, value) => setPurchaseData({ ...purchaseData, amount: value})}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            sx={{
              width: '100%',
            }}
            label={'month'} 
            views={['month']}
            onChange={(value) => setPurchaseData({ ...purchaseData, date: value.format('MMMM')})}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default PurchaseDialog;