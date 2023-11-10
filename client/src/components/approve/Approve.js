import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./Approve.scss";

const Approve = () => {
  return (
    <Box className="box1">
        <Typography className='text1'>Let's start by calculating your sleep efficiency and examining your concerns.</Typography>
        <Typography className='text2'>Over time, we will work together to improve these.</Typography>
        <Link to="/auth/questions/:id">
          <ArrowDownwardIcon className='icon' />
        </Link>
    </Box>
  )
}

export default Approve