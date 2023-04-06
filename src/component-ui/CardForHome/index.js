import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const CardForHome = (props) => {
  return (
    <Card sx={{ m: 2, borderRadius: 5, border: "1px solid #f2e22c" }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="subtitle1" align="center">
          {props.name} (USDT)
        </Typography>
        <Typography variant="h5" color="subtitle1" align="center">
          {props.value} USDT
        </Typography>
      </CardContent>
      <CardActions sx = {{display : "flex",alignItems: "center",justifyContent: "center"}}>
        <Button
          variant="outlined"
          size="large"
          color="primaryVariant"
          sx={{ ml: 5, mr: 5, mb: 3, borderRadius: 2 }}
          href="http://localhost:3000/recharge"
        >
          Recharge
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="primaryVariant"
          sx={{ ml: 5, mr: 5, mb: 3, borderRadius: 2 }}
          href="http://localhost:3000/withdraw"
        >
          Withdraw
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardForHome