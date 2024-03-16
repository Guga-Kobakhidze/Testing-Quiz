'use client'

import { Alert, Box, Typography } from '@mui/material'
import React from 'react'
import { useMode } from '../context/QuizModeCotext';
import Link from 'next/link';

const Details = () => {
    const { mode, valueArr } = useMode();
  return (
    <Box>
        <Link href="/results">go back</Link>
    {valueArr.map(({ correct, checked }, index) => (
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
