import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import CardActions from "@mui/material/CardActions";

const CardForHome = (props) => {
  return (
    <Card sx={{ m: 1, borderRadius: 5 }}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {props.name}
        </Typography>
        <Typography color="text.secondary">
          {props.value}
        </Typography>
      </CardContent>
      <CardActions display={"flex"}>
        <Button
          variant="outlined"
          size="large"
          sx={{ ml: 5, mr: 5, borderRadius: 2 }}
        >
          Recharge
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ ml: 5, mr: 5, borderRadius: 2 }}
        >
          Withdraw
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardForHome