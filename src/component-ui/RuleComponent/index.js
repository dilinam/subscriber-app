import { Box, Typography } from '@mui/material';
import React from 'react'

const RulesComponent = (props) => {
  return (
    <Box sx={{ m: "20px" }}>
      <Typography color="text.secondary" variant="h5" align="center">
        {props.title}
      </Typography>
      <p
        style={{ textAlign: "justify" }}
      >
        {props.description}
      </p>
    </Box>
  );
}

export default RulesComponent