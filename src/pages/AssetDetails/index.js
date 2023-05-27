import {useEffect,useState} from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AssetDetailsBody from "../../component-ui/AssetDetailsBody";
import { getTotalRev } from "../../use-cases/get-total-rev";


const AssetDetails = () => {
   const [value, setValue] = useState("1");
   const [total,setTotal] = useState();

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
   const getLastDate = ()=>{
    const d = new Date();
    let time = 0;
    if (value == 1) {
      time = d.getTime() - d.getDate() * 24 * 60 * 60 * 1000;
    } else if (value == 2) {
      time = d.getTime() - (d.getDate() + 7) * 24 * 60 * 60 * 1000;
    } else if (value == 3) {
      time = d.getTime() - d.getDay() * 24 * 60 * 60 * 1000;
    } else{
      time = d.getTime() - (d.getDay()+30 )* 24 * 60 * 60 * 1000;
    }
    return time; 
   }

   useEffect(()=>{
    getTotalRev().then((rev)=>setTotal(rev.data))
   },[])
   console.log(getLastDate());
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="This week" value="1" sx={{ width: "25%" }} />
            <Tab label="Last week" value="2" sx={{ width: "25%" }} />
            <Tab label="This month" value="3" sx={{ width: "25%" }} />
            <Tab label="Last month" value="4" sx={{ width: "25%" }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AssetDetailsBody total={total} timeStamp={getLastDate()}/>
        </TabPanel>
        <TabPanel value="2">
          <AssetDetailsBody total={total} timeStamp={getLastDate()} />
        </TabPanel>
        <TabPanel value="3">
          <AssetDetailsBody total={total} timeStamp={getLastDate()} />
        </TabPanel>
        <TabPanel value="4">
          <AssetDetailsBody total={total} timeStamp={getLastDate()} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default AssetDetails;
