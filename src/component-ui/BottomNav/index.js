import React from 'react'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PaidIcon from "@mui/icons-material/Paid";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import Paper from "@mui/material/Paper";
import { deepPurple } from "@mui/material/colors";
import { Link } from 'react-router-dom';

const BottomNav = () => {
    const [value, setValue] = React.useState("assets");
    const handleChange = (event, newValue) => {
      console.log(newValue);
      console.log(event);
      setValue(newValue);
    };

  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={handleChange}
          sx={{ bgcolor: deepPurple["900"] }}
        >
          <Link to="/home">
            <BottomNavigationAction
              label="Home"
              value="home"
              icon={<HomeIcon fontSize="large" />}
              // href={`http://localhost:3000/${value}`}
              onClick={handleChange}
            ></BottomNavigationAction>
          </Link>
          <BottomNavigationAction
            label="Assets"
            value="assets"
            icon={<PaidIcon fontSize="large" />}
            href={`http://localhost:3000/${value}`}
          />
          <BottomNavigationAction
            label="Packages"
            value="subPackages"
            icon={<Inventory2OutlinedIcon fontSize="large" />}
            href={`http://localhost:3000/${value}`}
          />

          <BottomNavigationAction
            label="Me"
            value="me"
            icon={<DescriptionIcon fontSize="large" />}
            href={`http://localhost:3000/me`}
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<AccountCircleIcon fontSize="large" />}
            href={`http://localhost:3000/${value}`}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default BottomNav