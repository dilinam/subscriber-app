import React, { useEffect, useState } from 'react'
import {
  Stack,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { getcountRefUserbylevel } from '../../use-cases/get-count-ref-user';


const TeamActivity = () => {
  const navigate = useNavigate();
  const [level1,setLevel1] = useState();
  const [level2, setLevel2] = useState();
  const [level3, setLevel3] = useState();

  const routeChange = (value) => {
    navigate(value);
  };
  return (
    <div>
      <Typography gutterBottom variant="h6" align="center">
        Team Activity
      </Typography>
      <Stack spacing={1} direction="column" sx={{ m: 2, mb: 10 }}>
        <Button
          color="secondary"
          size="large"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
          }}
          onClick={() => {
            routeChange(`/promotionBonus`);
          }}
        >
          Promotion Bonus
          <ArrowForwardIosIcon />
        </Button>
        <Button
          color="secondary"
          size="large"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
          }}
          onClick={() => {
            routeChange(`/promotionCode`);
          }}
        >
          Promotion Code
          <ArrowForwardIosIcon />
        </Button>
        <Button
          color="secondary"
          size="large"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
          }}
          onClick={() => {
            routeChange(`/myTeam`);
          }}
        >
          My Team
          <ArrowForwardIosIcon />
        </Button>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Card sx={{ borderRadius: 1, ml: 2, width: "30%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 16, align: "center" }}
                color="text.secondary"
              >
                {level1}
              </Typography>
              <Typography sx={{ fontSize: 16 }} color="text.secondary">
                Level - 1
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: 1, ml: 2, width: "30%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 16, align: "center" }}
                color="text.secondary"
              >
                {level2}
              </Typography>
              <Typography sx={{ fontSize: 16 }} color="text.secondary">
                Level - 2
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: 1, ml: 2, width: "30%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 16, align: "center" }}
                color="text.secondary"
              >
                {level3}
              </Typography>
              <Typography sx={{ fontSize: 16 }} color="text.secondary">
                Level - 3
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Button
          color="secondary"
          size="large"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
          }}
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
          onClick={() => {
            routeChange(`/newRegistration`);
          }}
        >
          New Registration
          <ArrowForwardIosIcon />
        </Button>
        <Button
          color="secondary"
          size="large"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
          }}
          variant="outlined"
          startIcon={<FolderSpecialIcon />}
          onClick={() => {
            routeChange(`/newTopUps`);
          }}
        >
          New Top - Ups
          <ArrowForwardIosIcon />
        </Button>
        <Button
          color="secondary"
          size="large"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
          }}
          variant="outlined"
          startIcon={<CurrencyExchangeIcon />}
          onClick={() => {
            routeChange(`/totalWithdrawals`);
          }}
        >
          Total Withdrawals
          <ArrowForwardIosIcon />
        </Button>
      </Stack>
    </div>
  );
}

export default TeamActivity