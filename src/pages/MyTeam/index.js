import React from 'react'
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MyTeamCard from '../../component-ui/MyTeamCard';

const MyTeam = () => {
  return (
    <div>
      <Box sx={{ m: 3 }}>
        <Typography gutterBottom variant="h5" align="center">
          My Team
        </Typography>
        <Typography gutterBottom variant="h6">
          Team Size 76
        </Typography>
      </Box>
      <Box sx={{ m: 1, width: "95%" }}>
        <TextField
          label="search"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <MyTeamCard level="1" name="hasitha lakmal" date="2023-04-06" />
        <MyTeamCard level="1" name="Krishan chinthaka" date="2023-04-06" />
        <MyTeamCard level="1" name="hasitha lakmal" date="2023-04-06" />
        <MyTeamCard level="1" name="hasitha lakmal" date="2023-04-06" />
        <MyTeamCard level="1" name="hasitha lakmal" date="2023-04-06" />
        <MyTeamCard level="1" name="hasitha lakmal" date="2023-04-06" />
      </Box>
    </div>
  );
}

export default MyTeam