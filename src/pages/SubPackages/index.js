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
      <TableToCard />
      <TableToCard />
      <TableToCard />
      <TableToCard />
    </div>
  );
}

export default SubPackages;