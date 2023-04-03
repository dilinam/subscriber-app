import React from 'react'
import AssignmentIcon from "@mui/icons-material/Assignment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CampaignIcon from "@mui/icons-material/Campaign";

const Me = () => {
  return (
    <div>
      <Stack spacing={1} direction="column" sx={{ m: 2, mb: 10 }}>
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
          Trending Profit Commission
        </Button>
        <Button
          color="secondary"
          startIcon={<StorefrontIcon sx={{ mr: 2 }} />}
          size="large"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "20px",
          }}
        >
          Team Activity
        </Button>
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
        <Button
          color="secondary"
          size="large"
          startIcon={<StarIcon sx={{ mr: 2}} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "20px",
          }}
        >
          Event Hall
        </Button>
      </Stack>
      <Box align="center">
        <Button
          sx={{ mt: "10%", width: "80%" }}
          variant="contained"
          href="http://localhost:3000/rechargeQR"
        >
          Logout
        </Button>
      </Box>
    </div>
  );
}

export default Me