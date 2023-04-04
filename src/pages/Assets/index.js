import { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardForHome from "../../component-ui/CardForHome";
import Stack from "@mui/material/Stack";


const Assets = () => {

  return (
    <div>
      <Typography variant="h5" gutterBottom align="center">
        ASSETS
      </Typography>
      <CardForHome value="100.00" name="Available Balance" />
      <Stack spacing={1} direction="column" sx={{ m: 2, mb: 10 }}>
        <Button
          variant="outlined"
          size="large"
          sx={{ display: "flex", justifyContent: "flex-start" }}
          href={`http://localhost:3000/assetDetails`}
        >
          Asset Details
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ display: "flex", justifyContent: "flex-start" }}
          href={`http://localhost:3000/expensesRecord`}
        >
          Expences Record
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ display: "flex", justifyContent: "flex-start" }}
          href={`http://localhost:3000/activityIncome`}
        >
          Activity Income
        </Button>
      </Stack>
      {/* */}
    </div>
  );
};

export default Assets;
