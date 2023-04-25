import { Box } from '@mui/system';
import React from 'react'
import TableToCard from '../../component-ui/TableToCard';
import Typography from "@mui/material/Typography";

const SubPackages = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom align="center" sx={{ m: 3 }}>
        PACKAGE SUBSCRIPTION
      </Typography>
      <TableToCard imgname="bronze1.jpeg" package="100" />
      <TableToCard imgname="bronze2.jpeg" package="100" />
      <TableToCard imgname="bronze3.jpeg" package="100" />
      <TableToCard imgname="silver1.jpeg" package="100" />
      <TableToCard imgname="silver2.jpeg" package="100" />
      <TableToCard imgname="silver3.jpeg" package="100" />
      <TableToCard imgname="gold1.jpeg" package="100" />
      <TableToCard imgname="gold2.jpeg" package="100" />
      <TableToCard imgname="gold3.jpeg" package="100" />
      <TableToCard imgname="platinum1.jpeg" package="100" />
      <TableToCard imgname="platinum2.jpeg" package="100" />
      <TableToCard imgname="platinum3.jpeg" package="100" />
    </div>
  );
}

export default SubPackages;