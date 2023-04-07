import React from 'react'
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaidIcon from "@mui/icons-material/Paid";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import Paper from "@mui/material/Paper";
import { deepPurple } from "@mui/material/colors";
import { Link } from 'react-router-dom';

const BottomNav = () => {
    const [value, setValue] = React.useState("home");

  return (
    <Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        //  
      >
        <Link to={`/${value}`}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              console.log(newValue);
              setValue((pre) => newValue);
            }}  
          >
            <BottomNavigationAction
              label="Home"
              value="home"
              icon={<HomeIcon fontSize="large" color="#fff" />}
            ></BottomNavigationAction>
            <BottomNavigationAction
              label="Assets"
              value="assets"
              icon={<PaidIcon fontSize="large" />}
            />
            <BottomNavigationAction
              label="Packages"
              value="subPackages"
              icon={<Inventory2OutlinedIcon fontSize="large" />}
            />

            <BottomNavigationAction
              label="Me"
              value="me"
              icon={<DescriptionIcon fontSize="large" />}
            />
            <BottomNavigationAction
              label="Profile"
              value="profile"
              icon={<AccountCircleIcon fontSize="large" />}
            />
          </BottomNavigation>
        </Link>
      </Paper>
    </Box>
  );
}

export default BottomNav