import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TeamActivityBelowButtons from "../../component-ui/TeamActivityBelowButtons";

const TotalWithdrawals = () => {
  const [value, setValue] = useState("500");
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        Total Withdrawals
      </Typography>
      <Typography gutterBottom variant="h6" align="center">
        Total Withdrawals {value}
      </Typography>
      <TeamActivityBelowButtons level="1"  />
    </div>
  );
};

export default TotalWithdrawals;
