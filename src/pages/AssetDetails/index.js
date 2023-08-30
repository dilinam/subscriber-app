import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AssetDetailsBody from "../../component-ui/AssetDetailsBody";
import { getTotalRev } from "../../use-cases/get-total-rev";

const AssetDetails = () => {
  const [value, setValue] = useState("1");
  const [total, setTotal] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getMonday(d) {
    d = new Date(d);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  function getLastWeekMonday () {
    let monday = getMonday(new Date());
    monday.setDate(monday.getDate() - 7);
    return monday;
  }

  function getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }

  function getFirstDayOfLastMonth(d) {
    return new Date(d.getFullYear(), d.getMonth() - 1, 1);
  }

  function getLastDayOfLastMonth() {
    var d=new Date();
    d.setDate(0);
    d.setHours(23);
    d.setMinutes(59);
    d.setSeconds(59);
    return d;
  }

  function getLastFriday() {
    const t = new Date().getDate() + (6 - new Date().getDay() - 1) - 7 ;
    const lastFriday = new Date();
    lastFriday.setDate(t);
    lastFriday.setHours(23);
    lastFriday.setMinutes(59);
    lastFriday.setSeconds(59);
    return lastFriday;
  }

  const getLastDate = () => {
    const d = new Date();
    let startTime = 0;
    let endTime = new Date().getTime();
    if (value == 1) {
      startTime = getMonday(new Date()).getTime();
    } else if (value == 2) {
      startTime = getLastWeekMonday().getTime();
      endTime = getLastFriday().getTime();
    } else if (value == 3) {
      startTime = getFirstDayOfMonth(new Date()).getTime();
    } else {
      startTime = getFirstDayOfLastMonth(new Date()).getTime();
      endTime = getLastDayOfLastMonth().getTime();
    }
    return [startTime, endTime];
  };

  useEffect(() => {
    getTotalRev().then((rev) => setTotal(rev.data));
  }, []);

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
          <AssetDetailsBody total={total} timeStamp={getLastDate()} />
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
