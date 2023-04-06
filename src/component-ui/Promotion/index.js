import React from 'react'
import {
    Card,
  CardContent,
  Typography,
} from "@mui/material";

const Promotion = (props) => {
  return (
    <div>
      <Card sx={{ borderRadius: 1, m: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary">
            Accumilated members {props.members} successful promotions Active
            members and rewards. {props.value} USDT
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Promotion