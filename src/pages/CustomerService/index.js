import React from 'react'
import Typography from "@mui/material/Typography";
import ContactCustomer from '../../component-ui/ContactCustomer';
const CustomerService = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        Customer Service Center
      </Typography>
      <Typography gutterBottom variant="subtitle1" sx={{ m: 3 }}>
        If you have any questions or are in need for help please contact
        customer service
      </Typography>
      <ContactCustomer name="Dilini" url="https://www.w3schools.com/" />
      <ContactCustomer name="Krishan" url="https://www.w3schools.com/" />
    </div>
  );
}

export default CustomerService