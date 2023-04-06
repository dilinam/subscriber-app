import React from 'react'
import {
  Card,
  CardContent
} from "@mui/material";
import Typography from "@mui/material/Typography";

const TeamActivityBelowButtons = (props) => {
  return (
    <div>
      <Card sx={{ borderRadius: 1, m: 2 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h6">Level - {props.level}</Typography>
          <Typography variant="h6">{props.value}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default TeamActivityBelowButtons