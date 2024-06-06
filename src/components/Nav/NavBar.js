import React from 'react';
import { Box, Typography } from '@mui/material';
import profileIcon from './penguin.jpg';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SavingsIcon from '@mui/icons-material/Savings';
import SettingsIcon from '@mui/icons-material/Settings';

const spanStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}

const iconStyle = {
  fontSize: '4vw',
  paddingRight: '1vw'
}

const textStyle = {
  fontWeight: 'bold',
  fontSize: '2vw',
}

function NavBar( { homeRef, dataRef, budgetRef, scrollToRef } ) {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#D9D9D9',
      }}
    >
      <Box
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <img
          src={profileIcon}
          alt="profileImage"
          style={{
            height: '25vh',
            width: '25vh',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
        <span style={spanStyle} onClick={() => scrollToRef(homeRef)}>
          <HomeIcon style={iconStyle} />
          <Typography style={textStyle}>
            Home
          </Typography>
        </span>
        <span style={spanStyle} onClick={() => scrollToRef(dataRef)}>
          <ListIcon style={iconStyle} />
          <Typography style={textStyle}>
            Data
          </Typography>
        </span>
        <span style={spanStyle} onClick={() => scrollToRef(budgetRef)}>
          <SavingsIcon style={iconStyle} />
          <Typography style={textStyle}>
            Budget
          </Typography>
        </span>
      </Box>
    </Box>
  );
}

export default NavBar;