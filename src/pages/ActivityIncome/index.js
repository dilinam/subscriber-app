import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ActivityIncomeData from "../../component-ui/ActivityIncomeData";

const ActivityIncome = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom align="center">
        Activity Income
      </Typography>
      <Divider sx={{ m: 3 }} />
      <Stack divider={<Divider />} spacing={2} sx={{ m: 3 }}>
        <ActivityIncomeData
          time="04:30"
          date="03/04/2023"
          amount="10"
          description="Team referral reward"
        />
        <ActivityIncomeData
          time="04:30"
          date="03/04/2023"
          amount="10"
          description="Team referral reward"
        />
      </Stack>
    </div>
  );
};

export default ActivityIncome;
