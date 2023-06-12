import React, { useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MyTeamCard from '../../component-ui/MyTeamCard';
import { getAllRefUser } from '../../use-cases/get-all-ref-users';

const MyTeam = () => {
  const [dataList,setDataList]= useState([])

  useEffect(() => {
    getAllRefUser().then((res)=>setDataList(res.data));
  },[]);

  return (
    <div>
      <Box sx={{ m: 3 }}>
        <Typography gutterBottom variant="h5" align="center">
          My Team
        </Typography>
        <Typography gutterBottom variant="h6">
          Team Size {dataList.length - 1}
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
        {dataList.map((data, key) => (
          // console.log(data.user.registeredDateTime);

          <MyTeamCard
            key={key}
            level={data.level}
            name={data.user.firstName}
            date={data.user.registeredDateTime}
          />
        ))}
      </Box>
    </div>
  );
}

export default MyTeam