import { Box } from '@mui/material';
import React from 'react'
import Typography from "@mui/material/Typography";

const EventHalls = () => {
  return (
    <div>
      <Box sx={{ m: 3 }}>
        <Typography gutterBottom variant="h5" align="center">
          Bulletin Board
        </Typography>
        <h4 sx={{ align: "center" }}> No Events.....! </h4>
        
      </Box>
    </div>
  );
};

export default EventHalls;