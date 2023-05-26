import { Box } from '@mui/system';
import React, { useEffect, useState } from "react";
import TableToCard from '../../component-ui/TableToCard';
import Typography from "@mui/material/Typography";
import { getDisabledReg } from '../../use-cases/get-disabled-reg';
import { Alert } from '@mui/material';
import { Report } from '@mui/icons-material';


const SubPackages = () => {

  const [isRegDisabled, setIsRegDisabled] = React.useState(false);

  useEffect(() => {
    getDisabledReg().then(response => {
      if(response.data.value === 'TRUE') {
        setIsRegDisabled(true);
      }
    });
  }, [])

  return (
    <div>
      <Typography variant="h5" gutterBottom align="center" sx={{ m: 3 }}>
        PACKAGE SUBSCRIPTION
      </Typography>
      {isRegDisabled? (
        <Alert
          color="error"
          icon={<Report />}
        >
          New Subscriptios are hold for now!
        </Alert>
      ): (
        <>
          <TableToCard
          imgname="bronze1.jpeg"
          package="100"
          id={1}
          name="Bronze 1"
          />
          <TableToCard
            imgname="bronze2.jpeg"
            package="250"
            id={2}
            name="Bronze 2"
          />
          <TableToCard
            imgname="bronze3.jpeg"
            package="500"
            id={3}
            name="Bronze 3"
          />
          <TableToCard
            imgname="silver1.jpeg"
            package="1000"
            id={4}
            name="Silver 1"
          />
          <TableToCard
            imgname="silver2.jpeg"
            package="2500"
            id={5}
            name="Silver 2"
          />
          <TableToCard
            imgname="silver3.jpeg"
            package="5000"
            id={6}
            name="Silver 3"
          />
          <TableToCard imgname="gold1.jpeg" package="10000" id={7} name="Gold 1" />
          <TableToCard imgname="gold2.jpeg" package="25000" id={8} name="Gold 2" />
          <TableToCard imgname="gold3.jpeg" package="50000" id={9} name="Gold 3" />
          <TableToCard
            imgname="platinum1.jpeg"
            package="100000"
            id={10}
            name="platinum 1"
          />
          <TableToCard
            imgname="platinum2.jpeg"
            package="250000"
            id={11}
            name="platinum 2"
          />
          <TableToCard
            imgname="platinum3.jpeg"
            package="500000"
            id={12}
            name="platinum 3"
          />
        </>
      )}
      
    </div>
  );
}

export default SubPackages;