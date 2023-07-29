import { useState,useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../../use-cases/get-user-details";

const Assets = () => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  const routeChange = (value) => {
    navigate(value);
  };
  useEffect(() => {
    getUserDetails().then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom align="center">
        ASSETS
      </Typography>
      <CardForHome value={user.totalBalance} name="Available Balance" />
      <Stack spacing={1} direction="column" sx={{ m: 2, mb: 10 }}>
        <Button
          variant="outlined"
          color="primaryVariant"
          size="large"
          sx={{ display: "flex", justifyContent: "flex-start" }}
          onClick={() => {
            routeChange(`/assetDetails`);
          }}
        >
          Asset Details
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="primaryVariant"
          sx={{ display: "flex", justifyContent: "flex-start" }}
          onClick={() => {
            routeChange(`/expensesRecord`);
          }}
        >
          Expenses Record
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="primaryVariant"
          sx={{ display: "flex", justifyContent: "flex-start" }}
          onClick={() => {
            routeChange(`/activityIncome`);
          }}
        >
          Activity Income
        </Button>
      </Stack>
      {/* */}
    </div>
  );
};

export default Assets;
