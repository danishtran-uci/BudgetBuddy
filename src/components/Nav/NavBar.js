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
  fontSize: '10vh',
  paddingRight: '1vw'
}

const textStyle = {
  fontWeight: 'bold',
  fontSize: '4vh',
}

function NavBar() {
  return (
    <Box
      style={{
        width: '20vw',
        height: '100vh',
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
        <span style={spanStyle}>
          <HomeIcon style={iconStyle} />
          <Typography style={textStyle}>
            Home
          </Typography>
        </span>
        <span style={spanStyle}>
          <ListIcon style={iconStyle} />
          <Typography style={textStyle}>
            Data
          </Typography>
        </span>
        <span style={spanStyle}>
          <SavingsIcon style={iconStyle} />
          <Typography style={textStyle}>
            Budget
          </Typography>
        </span>
        <span style={spanStyle}>
          <SettingsIcon style={iconStyle} />
          <Typography style={textStyle}>
            Settings
          </Typography>
        </span>
      </Box>
    </Box>
  );
}

export default NavBar;