import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TabCard = (props) => {
  return (
    <div>
      <Card sx={{ borderRadius: 1, mb:2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18, mb: 2 }} color="text.secondary">
            Recharge <br /> {props.date}
          </Typography>
          <Typography sx={{ fontSize: 18, mb: 2 }} color="text.secondary">
            Order number : {props.order}
          </Typography>
          <Typography sx={{ fontSize: 18, mb: 2 }} color="text.secondary">
            Amount to be Recived : <br /> {props.value} USDT
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TabCard;
