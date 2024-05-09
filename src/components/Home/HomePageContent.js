import React from 'react';
import { Box, CircularProgress, IconButton, Typography, colors } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const iconButtonTextStyle = {
  fontSize: '1.5vh',
  color: 'grey'
}

function HomePageContent() {

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
        {/* Container first section of the page; with welcome banner and button to log new purchases */}
        <Box
          style={{
            width:'100%',
            height:'20%',
            display: 'flex',
            alignItems:'center',
            justifyContent: 'space-evenly'
          }}
        >
          {/* Container for welcome user banner */}
          <Box
            style={{
              width:'60%',
              height:'60%',
              backgroundColor: '#D9D9D9',
              marginLeft: '10vw',
              display: 'flex',
              alignItems:'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              style={{
                fontSize: '3vh',
                fontWeight: 'bold'
              }}
            >
              Welcome, User
            </Typography>
          </Box>

          {/* Container for log new purchase button and its text */}
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems:'center',
              justifyContent: 'space-evenly'
            }}
          >
            <IconButton>
              <AddBoxIcon 
                style={{
                  fontSize: '7vh'
                }}
              />
            </IconButton>
            <Typography style={iconButtonTextStyle}>
              Log New
            </Typography>
            <Typography  style={iconButtonTextStyle}>
              Purchase Activity
            </Typography>
          </Box>
        </Box>

        {/* Container second section of the page; with spend in review banner and progress bar of current month's budget */}
        <Box
          style={{
            width:'100%',
            height:'20%',
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'space-evenly',
            // borderStyle: 'solid'
          }}
        >
          {/* Container for spending banner */}
          <Box
            style={{
              width:'30%',
              height:'40%',
              backgroundColor: '#D9D9D9',
              display: 'flex',
              alignItems:'center',
              justifyContent: 'center'
            }}
          >
              <Typography
                style={{
                  fontSize: '2.5vh',
                }}
              >
                Your spending in review:
              </Typography>
          </Box>

          {/* Container for Progress Data */}
          <Box>
            <Typography
              style={{
                fontSize: '2vh',
                fontWeight: 'bold'
              }}
            >
              Progress Bar showing current month{"'"}s budget
            </Typography>
            <CircularProgress variant="determinate" value={75} />

          </Box>

        </Box>


        <Box>
          Chart
        </Box>
        <Box>
          Expenses
        </Box>
      </Box>
    </Box>
  );
}

export default HomePageContent;