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
    const [value, setValue] = React.useState("");
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
            href={`http://localhost:3000/${value}`}
          />
          <BottomNavigationAction
            label="Packages"
            value="subPackages"
            icon={<Inventory2OutlinedIcon fontSize="large" />}
            href={`http://localhost:3000/${value}`}
          />
          <BottomNavigationAction
            label="Recharge"
            value="recharge"
            icon={<AddCircleOutlineIcon fontSize="large" />}
            href={`http://localhost:3000/${value}`}
          />
          <BottomNavigationAction
            label="Withdraw"
            value="withdraw"
            icon={<CurrencyExchangeIcon fontSize="large" />}
            href={`http://localhost:3000/${value}`}
          />
          <BottomNavigationAction
            label="Me"
            value="me"
            icon={<AccountCircleIcon fontSize="large" />}
            href={`http://localhost:3000/profile`}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default BottomNav