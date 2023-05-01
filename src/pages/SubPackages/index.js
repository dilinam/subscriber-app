import { Box } from '@mui/system';
import React, { useEffect, useState } from "react";
import TableToCard from '../../component-ui/TableToCard';
import Typography from "@mui/material/Typography";


const SubPackages = () => {

  return (
    <div>
      <Typography variant="h5" gutterBottom align="center" sx={{ m: 3 }}>
        PACKAGE SUBSCRIPTION
      </Typography>
      <TableToCard
        imgname="bronze1.jpeg"
        package="100"
        id={1}
        name="Bronze 1"
      />
      <TableToCard
        imgname="bronze2.jpeg"
        package="1000"
        id={2}
        name="Bronze 1"
      />
      <TableToCard
        imgname="bronze3.jpeg"
        package="100"
        id={3}
        name="Bronze 1"
      />
      <TableToCard
        imgname="silver1.jpeg"
        package="100"
        id={4}
        name="Bronze 1"
      />
      <TableToCard
        imgname="silver2.jpeg"
        package="100"
        id={5}
        name="Bronze 1"
      />
      <TableToCard
        imgname="silver3.jpeg"
        package="100"
        id={6}
        name="Bronze 1"
      />
      <TableToCard
        imgname="gold1.jpeg"
        package="100"
        id={7}
        name="Bronze 1"
      />
      <TableToCard
        imgname="gold2.jpeg"
        package="100"
        id={8}
        name="Bronze 1"
      />
      <TableToCard
        imgname="gold3.jpeg"
        package="100"
        id={9}
        name="Bronze 1"
      />
      <TableToCard
        imgname="platinum1.jpeg"
        package="100"
        id={10}
        name="Bronze 1"
      />
      <TableToCard
        imgname="platinum2.jpeg"
        package="100"
        id={11}
        name="Bronze 1"
      />
      <TableToCard
        imgname="platinum3.jpeg"
        package="100"
        id={12}
        name="Bronze 1"
      />
    </div>
  );
}

export default SubPackages;