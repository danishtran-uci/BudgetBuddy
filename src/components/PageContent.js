import React, { useRef, useState } from 'react';
import NavBar from './Nav/NavBar';
import { Box, IconButton } from '@mui/material';
import HomePageContent from './Home/HomePageContent';
import DataPage from './Data/DataPage';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BudgetPage from './Budget/BudgetPage';

const pageContentStyle = { 
  height: '100%', 
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

function PageContent() {  
  const [purchaseData, setPurchaseData] = useState([]);
  
  function handleAddPurchaseData(data) {
    setPurchaseData([...purchaseData, data]);
  };

  const [budget, setBudget] = useState(0);
  
  function addTestData() {
    const types = ['Housing', 'Transportation', 'Food', 'Savings', 'Utilities', 'Miscellaneous'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const data = [];
    for (let i = 0; i < 60; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const amount = Math.floor(Math.random() * 2000) + 500;
      const date = months[Math.floor(Math.random() * months.length)];
      data.push({ type, amount, date });
    }
    setPurchaseData(data);
  }

  const homeRef = useRef(null);
  const dataRef = useRef(null);
  const budgetRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    // Main Container to set Nav on the left and on the right the rest of the content
    <Box
    style={{
      display: 'flex',
      flexDirection: 'row',
      height: '300vh',
      width: '99vw',
      overflow: 'hidden',
    }}
    >
      <Box
        style={{
          width: '20%',
          height: '100%',
          position: 'fixed',
        }}
      >
        <NavBar homeRef={homeRef} dataRef={dataRef} budgetRef={budgetRef} scrollToRef={scrollToRef} />
      </Box>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: '20%',
          width: '80%'
        }}
      >
        <Box ref={homeRef} style={pageContentStyle}>
          <HomePageContent purchaseData={purchaseData} handleAddPurchaseData={handleAddPurchaseData} budget={budget} />

          <IconButton
            style={{
              marginTop: '-5.5vh',
              width: '3.5%',
            }}
            onClick={() => scrollToRef(dataRef)}
          >
            <ArrowDropDownIcon
              style={{
                fontSize: '2vw',
              }}
            />
          </IconButton>
        </Box>

        <Box ref={dataRef} style={pageContentStyle}>
          <DataPage purchaseData={purchaseData}/>

          <button 
            onClick={() => addTestData()}
            style={{
              marginTop: '-7vh',
              marginLeft: '60vw'
            }}
          >
            Tester Button
          </button>

          <IconButton
            style={{
              width: '3.5%',
            }}
            onClick={() => scrollToRef(budgetRef)}
          >
            <ArrowDropDownIcon
              style={{
                fontSize: '2vw',
              }}
            />
          </IconButton>
        </Box>

        <Box ref={budgetRef} style={pageContentStyle}>
          <BudgetPage budget={budget} setBudget={setBudget} />
        </Box>
      </Box>
    </Box>
  );
}

export default PageContent;