import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import TabCard from "../../component-ui/TabCard";

const ExpensesRecord = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   return (
     <Box sx={{ width: "100%", typography: "body1" }}>
       <TabContext value={value}>
         <Box sx={{ width: "100%" }}>
           <Tabs
             value={value}
             onChange={handleChange}
             textColor="secondary"
             indicatorColor="secondary"
             aria-label="secondary tabs example"
           >
             <Tab value="1" label="Item One" sx={{ width: "50%" }} />
             <Tab value="2" label="Item Two" sx={{ width: "50%" }} />
           </Tabs>
         </Box>
         <TabPanel value="1">
           <TabCard date="04:56 05/04/2023" order="000000151" value="100.00" />
         </TabPanel>
         <TabPanel value="2">Item Two</TabPanel>
         <TabPanel value="3">Item Three</TabPanel>
       </TabContext>
     </Box>
   );
}

export default ExpensesRecord;
