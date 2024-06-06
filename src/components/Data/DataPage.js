import React, { useState } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';

function DataPage({ purchaseData }) {
  function createData(type, amount, month) {
    return { type, amount, month };
  }
  
  const rows = purchaseData.map(item => createData(item.type, item.amount, item.date));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
          height: '85%',
          width: '85%',
          backgroundColor: '#D9D9D9',
          marginLeft: '2.5vw',
          paddingTop: '2vh',
          paddingBottom: '2vh',
          paddingLeft: '1vw',
          paddingRight: '1vw',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TableContainer 
          component={Paper}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}  
        >
          <Table sx={{ minWidth: 650, flex: 1 }} aria-label="simple table">
            <TableHead 
              style={{ 
                height: '15%', 
                borderBottom: '3px solid #000',
              }}
            >
              <TableRow>
                <TableCell style={{ fontSize: '1.5vh', fontWeight: 'bold' }}>Purchase Data Type</TableCell>
                <TableCell align="right" style={{ fontSize: '1.5vh', fontWeight: 'bold' }}>Purchase Amount</TableCell>
                <TableCell align="right" style={{ fontSize: '1.5vh', fontWeight: 'bold' }}>Month</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.type}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.month}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default DataPage;