import React, { useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MyTeamCard from '../../component-ui/MyTeamCard';
import { getAllRefUser } from '../../use-cases/get-all-ref-users';
import { Search } from '@mui/icons-material';

const MyTeam = () => {
  const [dataList, setDataList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getAllRefUser().then((res)=>{setDataList(res.data);setSearchResult(res.data);});
  },[]);

  const Search = (value)=>{
    if (value == 1 || value == 2 || value == 3){
      let x = [];
      x.push(dataList.find((o) => o.level == value));
      console.log(x)
      if(x[0] != undefined){
        setSearchResult(x);
      }else{
        setSearchResult(dataList);
      }
      
    }else{
      setSearchResult(dataList);
    }

  }

  return (
    <div>
      <Box sx={{ m: 3 }}>
        <Typography gutterBottom variant="h5" align="center">
          My Team
        </Typography>
        <Typography gutterBottom variant="h6">
          Team Size {dataList.length}
        </Typography>
      </Box>
      <Box sx={{ m: 1, width: "95%" }}>
        <TextField
          label="search"
          fullWidth
          onChange={(e) => {
            Search(e.target.value);
          }}
          placeholder='Enter filter level'
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
        {searchResult.map((data, key) => (
          // console.log(data.user.registeredDateTime);

          <MyTeamCard
            key={key}
            level={data.level}
            name={data.user.firstName}
            date={data.user.registeredDateTime.split("T")[0]}
          />
        ))}
      </Box>
    </div>
  );
}

export default MyTeam