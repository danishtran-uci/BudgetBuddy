import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProgressTitle from './ProgressTitle';
import ProgressBar from './ProgressBar';
import AmtSpendRemaining from './AmtSpendRemaining';

function Progress( {purchaseData, budget} ) {
  const [monthSpending, setMonthSpending] = useState(0);

  const calculateTotalSpent = (data) => {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    return data
      .filter(purchase => purchase.date === currentMonth)
      .reduce((total, purchase) => total + purchase.amount, 0);
  };

  useEffect(() => {
    setMonthSpending(calculateTotalSpent(purchaseData));
  }, [purchaseData]);

  return (
    <>
      <Box
        style={{
          width:'40%',
          height:'100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center'
        }}
      >
        <ProgressTitle />
        <ProgressBar budget={budget} monthSpending={monthSpending} />
        <AmtSpendRemaining budget={budget} monthSpending={monthSpending} />
      </Box>
    </>
  )
}

export default Progress;