
import React from 'react'
import AutomaticSlider from '../../component-ui/AutomaticSlider';
import CardForHome from '../../component-ui/CardForHome';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomePage = () => {
  return (
    <div>
      <AutomaticSlider />
      <CardForHome value="$100" name="Available Balance" />
      <Stack spacing={1} direction="column" sx={{ m: 2 }}>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIosIcon sx={{ ml: 20 }} />}
        >
          Withdraw
        </Button>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIosIcon sx={{ ml: 25 }} />}
          sx={{ float: "left" }}
        >
          Packages
        </Button>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIosIcon sx={{ ml: 25 }} />}
        >
          Recharge
        </Button>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIosIcon sx={{ ml: 25 }} />}
        >
          Packages
        </Button>
      </Stack>
    </div>
  );
}

export default HomePage;