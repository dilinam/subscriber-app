import React from 'react'
import {
  Button,
    Card,
  CardContent,
  Typography,
} from "@mui/material";

const Promotion = (props) => {
  const claimBouns =()=>{

  }
  return (
    <div>
      <Card sx={{ borderRadius: 1, m: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16, mb:2}} color="text.secondary">
            Accumilated members {props.members} successful promotions Active
            members and rewards. {props.value} USDT
          </Typography>
          <Button variant="contained" onClick={() => claimBouns(false)}>
            Claim
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Promotion