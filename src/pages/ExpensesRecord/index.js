import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import TabCard from "../../component-ui/TabCard";
import { getRechagesUser } from "../../use-cases/get-recharges-user";
import { useState, useEffect } from "react";
import { getWithdrwalsUser } from "../../use-cases/get-withdrwals-user";

const ExpensesRecord = () => {
  const [value, setValue] = useState("2");
  const [rdata,setRData] = useState([]);
  const [wdata,setWData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  useEffect(() => {
    getRechagesUser()
      .then((res) => res.data)
      .then((data) => setRData(data));
    getWithdrwalsUser()
      .then((res) => res.data)
      .then((data) => setWData(data));
    
  }, []);
  
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
             <Tab value="2" label="Recharge" sx={{ width: "50%" }} />
             <Tab value="1" label="Withdraw" sx={{ width: "50%" }} />
           </Tabs>
         </Box>
         <TabPanel value="1">
           {rdata.map((rechargeData) => (
             <TabCard
               date={rechargeData.dateTime.replace("T", " ")}
               order={rechargeData.id}
               value={rechargeData.amount}
               isAccepted={rechargeData.isAccepted}
               type="Withdraw"
             />
           ))}
         </TabPanel>
         <TabPanel value="2">
           {wdata.map((withdrawalData) => (
             <TabCard
               date={withdrawalData.dateTime.replace("T", " ")}
               order={withdrawalData.id}
               value={withdrawalData.amount}
               isAccepted={withdrawalData.isAccepted}
               type="Recharge"
             />
           ))}
         </TabPanel>
       </TabContext>
     </Box>
   );
}

export default ExpensesRecord;
