'use client'

import { Alert, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import { useMode } from '../context/QuizModeCotext';
import Link from 'next/link';
import BackgroundImg from '../components/bgImage/BackgroundImg';


const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 18,
  fontWeight: 'bold'
}));


const Details = () => {
    const { mode, valueArr, time } = useMode();
  return (
    <Box color={mode ? "black" : "white"}>
       <Link href="/results"><Typography mt={5} sx={{fontSize: '1.2rem', cursor: 'pointer', paddingLeft: 10}} color={mode ? "black" : "white"}>go back</Typography></Link>
    <BackgroundImg />

    <Typography textAlign={"center"} mb={4} fontSize={48} mt={5}>
        Your Details
      </Typography>
      <TableContainer component={Paper} sx={{minWidth: 650, maxWidth: 1000, margin: "auto", marginBottom: 10}}>
      <Table sx={{ minWidth: 650, maxWidth: 1000}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{fontWeight: "bold", color: "red"}}>
            <StyledTableCell>HTML</StyledTableCell>
            <StyledTableCell>CSS</StyledTableCell>
            <StyledTableCell>JavaScript</StyledTableCell>
            <StyledTableCell>Accessibility</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          <TableCell>{time.html}</TableCell>
          <TableCell>{time.css}</TableCell>
          <TableCell>{time.javascript}</TableCell>
          <TableCell>{time.accessibility}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    {valueArr.map(({ correct, checked, }, index) => (
      <Typography
        key={index}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <Typography variant="body2" width={10} mb={2}>
          {index + 1}:{" "}
        </Typography>
        {correct === checked ? (
          <Alert
            sx={{ width: "80%", mb: 2, color: "green" }}
            variant="outlined"
            severity="success"
          >
            {checked}
          </Alert>
        ) : (
          <Alert
            sx={{ width: "80%", mb: 2, color: "red" }}
            variant="outlined"
            severity="error"
          >
            {checked}
          </Alert>
        )}
      </Typography>
    ))}
  </Box>
  )
}

export default Details
