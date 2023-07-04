import React from 'react'
import {
  Button,
    Card,
  CardContent,
  Typography,
} from "@mui/material";
import {saveBonus } from '../../use-cases/save-recharge';

const Promotion = (props) => {
  const claimBouns =async (value)=>{
      await saveBonus(value);
      props.resetT && props.resetT();
  }
  return (
    <div>
      <Card sx={{ borderRadius: 1, m: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16, mb: 2 }} color="text.secondary">
            Accumilated members {props.members} successful promotions Active
            members and rewards. {props.value} USDT
          </Typography>
          <Button
            variant="contained"
            onClick={() => claimBouns(props.value)}
            disabled={!props.isdisabled}
          >
            Claim
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Promotion