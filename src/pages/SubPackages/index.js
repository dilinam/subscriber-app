import { Box } from '@mui/system';
import React from 'react'
import TableToCard from '../../component-ui/TableToCard';
import Typography from "@mui/material/Typography";

const SubPackages = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom align="center">
        PACKAGE SUBSCRIPTION
      </Typography>
      <TableToCard />
    </div>
  );
}

export default SubPackages;