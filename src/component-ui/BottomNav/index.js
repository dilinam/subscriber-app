import React from 'react'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";

const BottomNav = () => {
    const [value, setValue] = React.useState("recents");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Packages"
            value="packages"
            icon={<Inventory2OutlinedIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Recharge"
            value="recharge"
            icon={<AddCircleOutlineIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Withdraw"
            value="withdraw"
            icon={<CurrencyExchangeIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Me"
            value="me"
            icon={<AccountCircleIcon fontSize="large" />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default BottomNav