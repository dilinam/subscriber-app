import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AssetDetailsBody from "../../component-ui/AssetDetailsBody";


const AssetDetails = () => {
   const [value, setValue] = React.useState("1");

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

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
          <AssetDetailsBody />
        </TabPanel>
        <TabPanel value="2">
          <AssetDetailsBody />
        </TabPanel>
        <TabPanel value="3">
          <AssetDetailsBody />
        </TabPanel>
        <TabPanel value="4">
          <AssetDetailsBody />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default AssetDetails;
