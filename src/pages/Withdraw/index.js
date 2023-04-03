import React from 'react'
import { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import ConfirmMsg from '../../component-ui/ConfirmMsg';

const Withdraw = () => {
   const [amount, setAmount] = useState("");
   const handleChange = (e) => {
     setAmount(e.target.value);
   };
   const handleClick = (e) => {
     setAmount((pre) => e.target.value);
   };

   return (
     <div>
       <Grid
         container
         spacing={0}
         direction="column"
         justifyContent="center"
         alignItems="center"
       >
         <Box>
           <Typography variant="subtitle1" gutterBottom>
             USDT(TRC20-2)
           </Typography>
           <div>
             <FormControl sx={{ m: 2 }}>
               <InputLabel htmlFor="outlined-adornment-amount">
                 Amount
               </InputLabel>
               <OutlinedInput
                 id="amount"
                 startAdornment={
                   <InputAdornment position="start">$</InputAdornment>
                 }
                 label="Amount"
                 name="amount"
                 onChange={handleChange}
                 value={amount}
                 type="number"
               />
             </FormControl>
           </div>
         </Box>
         <Typography variant="subtitle1">Quick Withdraws</Typography>
         <Box sx={{ "& button": { m: 1, width: 90 } }}>
           <div>
             <Button
               variant="outlined"
               size="medium"
               value="10"
               onClick={handleClick}
             >
               10
             </Button>
             <Button
               variant="outlined"
               size="medium"
               value="20"
               onClick={handleClick}
             >
               20
             </Button>
             <Button
               variant="outlined"
               size="medium"
               value="50"
               onClick={handleClick}
             >
               50
             </Button>
           </div>
           <div>
             <Button
               variant="outlined"
               size="medium"
               value="100"
               onClick={handleClick}
             >
               100
             </Button>
             <Button
               variant="outlined"
               size="medium"
               value="200"
               onClick={handleClick}
             >
               200
             </Button>
             <Button
               variant="outlined"
               size="medium"
               value="500"
               onClick={handleClick}
             >
               500
             </Button>
           </div>
           <div>
             <Button
               variant="outlined"
               size="medium"
               value="1000"
               onClick={handleClick}
             >
               1000
             </Button>
             <Button
               variant="outlined"
               size="medium"
               value="5000"
               onClick={handleClick}
             >
               5000
             </Button>
             <Button
               variant="outlined"
               size="medium"
               value="10000"
               onClick={handleClick}
             >
               10000
             </Button>
           </div>
         </Box>
       </Grid>
       <Box align="center" sx ={{m:"5%"}}>
         <ConfirmMsg buttonName = "Withdraw"  title = "Withdrawal Confirmation" msg = "This action activate within 24h in working days.Are you confirm this transation ?"/>
       </Box>
     </div>
   );
}

export default Withdraw