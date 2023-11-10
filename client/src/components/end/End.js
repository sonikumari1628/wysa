import { Box, Card, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const End = () => {
  const {loading,data,error}=useSelector((state)=>state.user);
  console.log(data);
  return (
    <Box>
        <Typography sx={{fontSize:"3em", m:"0 auto", color:"white", fontWeight:"800", pt:"40%"}}>Thank You!!!</Typography>
        <Typography sx={{fontSize:"3em", m:"0 auto", color:"#257a70", fontWeight:"800"}}>{loading===false && data && data.username}</Typography>
    </Box>
    
  )
}

export default End;