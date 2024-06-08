import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CurrencyTextField from '@lupus-ai/mui-currency-textfield/dist/CurrencyTextField';

function BudgetPage( {budget, setBudget} ) {
  const [enteredBudget, setEnteredBudget] = useState(0)

  return (
    // Main Container for defining size of the component 
    <Box
      style={{
        height: '100%', 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Container for holding whole component's content */}
      <Box
        style={{
          height: '65%',
          width: '65%',
          backgroundColor: '#D9D9D9',
          marginLeft: '2.5vw',
          paddingTop: '10vh',
          paddingBottom: '15vh',
          paddingLeft: '3vw',
          paddingRight: '3vw',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}
      >
        <Typography
          style={{
            fontSize: '2.5vw',
            fontWeight: 'bold',
            marginBottom: '4vh'
          }}
        >
          Set New Budget
        </Typography>
        <Typography
          style={{
            fontSize: '2vw',
            marginBottom: '3vh'
          }}
        >
          Current Budget: ${budget}
        </Typography>
        <CurrencyTextField
          style={{ 
            height: '30%',
            width: '50%',
          }}
          label="Purchase Amount"
          placeholder="0.00"
          variant="outlined"
          currencySymbol="$"
          decimalCharacter="."
          value={budget}
          onChange={(_, value) => setEnteredBudget(value)}
        />
        <Button 
          style={{
            height: '10%',
            width: '30%',
          }}
          variant="contained"
          onClick={() => setBudget(enteredBudget)}
        >Submit</Button>
      </Box>
    </Box>
  );
}

export default BudgetPage;