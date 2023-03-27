import { Box } from '@mui/system';
import React from 'react'
import Table from '../../component-ui/Table';
import TableToCard from '../../component-ui/TableToCard';

const SubPackages = () => {
  return (
    <div>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Table />
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <TableToCard />
      </Box>
    </div>
  );
}

export default SubPackages;