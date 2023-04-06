import React from 'react'
import AssignmentIcon from "@mui/icons-material/Assignment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Me = () => {
  return (
    <div>
      <Stack spacing={1} direction="column" sx={{ m: 2, mb: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="secondary"
            startIcon={<TrendingUpIcon />}
            size="large"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "20px",
            }}
          >
            Trending Commission
          </Button>
          <ArrowForwardIosIcon />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="secondary"
            startIcon={<StorefrontIcon sx={{ mr: 2 }} />}
            size="large"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "20px",
            }}
            href="http://localhost:3000/teamActivity"
          >
            Team Activity
          </Button>
          <ArrowForwardIosIcon />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="secondary"
            size="large"
            startIcon={<CampaignIcon sx={{ mr: 2 }} />}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "20px",
            }}
          >
            Bulletin Board
          </Button>
          <ArrowForwardIosIcon />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="secondary"
            startIcon={<AssignmentIcon sx={{ mr: 2 }} />}
            size="large"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "20px",
            }}
          >
            Rules
          </Button>
          <ArrowForwardIosIcon />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="secondary"
            size="large"
            startIcon={<StarIcon sx={{ mr: 2 }} />}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "20px",
            }}
          >
            Event Hall
          </Button>
          <ArrowForwardIosIcon />
        </Box>
      </Stack>
      <Box align="center">
        <Button
          sx={{ mt: "10%", width: "80%" }}
          variant="contained"
          href="http://localhost:3000/login"
        >
          Logout
        </Button>
      </Box>
    </div>
  );
}

export default Me