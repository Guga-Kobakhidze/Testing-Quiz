"use client";

import React, { useState } from "react";
import BackgroundImg from "../components/bgImage/BackgroundImg";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from "@mui/material";
import { useMode } from "../context/QuizModeCotext";
import Link from "next/link";

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 18,
  fontWeight: 'bold'
}));

const ResultsPage = () => {
  const { mode, valueArr, time, ref } = useMode();
  let count: number = 0

  valueArr.forEach(({ checked, correct }) => {
    if (checked === correct) {
      count = count + 1;
    }
  });
console.log(time)
  const percentage: number = (count / 40) * 100

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Box color={mode ? "black" : "white"} sx={{marginTop: '15vh'}}>
      <BackgroundImg />
      <Typography textAlign={"center"} mb={4} fontSize={48}>
        Your Result
      </Typography>
      <TableContainer component={Paper} sx={{minWidth: 650, maxWidth: 1000, margin: "auto"}}>
      <Table sx={{ minWidth: 650, maxWidth: 1000}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{fontWeight: "bold", color: "red"}}>
            <StyledTableCell>Total Questions</StyledTableCell>
            <StyledTableCell>Correct Answers</StyledTableCell>
            <StyledTableCell>Percentage</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          <TableCell>40</TableCell>
          <TableCell>{count}</TableCell>
          <TableCell>{percentage.toFixed(2)} %
          </TableCell>
          <TableCell>{formatTime(ref.current)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: "center", gap: 10}}>
    <Link href="/details">
      <Typography sx={{textAlign: 'center', textDecorationLine: 'underline'}} mt={5} color={mode ? "black" : "white"}>See more details</Typography>
      </Link>
      <Link href="/">
      <Typography sx={{textAlign: 'center'}} mt={5} color={mode ? "black" : "white"}>Return to home page</Typography>
      </Link>
    </Box>
    </Box>
  );
};

export default ResultsPage;



