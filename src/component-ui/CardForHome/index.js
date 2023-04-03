import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";

const CardForHome = (props) => {
  return (
    <Card sx={{ m: 2, borderRadius: 5 }}>
      <CardContent sx={{ ml: 5 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {props.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.value}
        </Typography>
      </CardContent>
      <CardActions display={"flex"}>
        <Button
          variant="outlined"
          size="large"
          sx={{ ml: 5, mr: 5, borderRadius: 2 }}
        >
          <Link href="http://localhost:3000/recharge">Recharge</Link>
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ ml: 5, mr: 5, borderRadius: 2 }}
        >
          <Link href="http://localhost:3000/withdraw">Withdraw</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardForHome