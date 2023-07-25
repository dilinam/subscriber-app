import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getRechagesUser } from "../../use-cases/get-recharges-user";

const Recharge = () => {
  const [amount, setAmount] = useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleClick = (e) => {
    setAmount((pre) => e.target.value);
  };
  let navigate = useNavigate();
  const routeChange = (value, amount) => {
    let error;
    if (amount === ""){
      error = "Recharge value should be not null"
    }
    if(amount <= 0 ){
      error = "Recharge value should more than 0 ";
    }
    if (!error){
        navigate(value, {
          state: {
            recharge: amount,
          },
        });
    }else{
      alert(error);
    }
   
  };
  // useEffect(() => {
  //   const data = getRechagesUser(1);
  //   console.log(data);
  // }, []);
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
        <Typography variant="subtitle1">Quick Recharge</Typography>
        <Box sx={{ "& button": { m: 1, width: 90 } }}>
          <div>
            <Button
              variant="outlined"
              size="medium"
              value="10"
              color="primaryVariant"
              onClick={handleClick}
            >
              10
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="20"
              color="primaryVariant"
              onClick={handleClick}
            >
              20
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="50"
              color="primaryVariant"
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
              color="primaryVariant"
              onClick={handleClick}
            >
              100
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="200"
              color="primaryVariant"
              onClick={handleClick}
            >
              200
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="500"
              color="primaryVariant"
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
              color="primaryVariant"
              onClick={handleClick}
            >
              1000
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="5000"
              color="primaryVariant"
              onClick={handleClick}
            >
              5000
            </Button>
            <Button
              variant="outlined"
              size="medium"
              value="10000"
              color="primaryVariant"
              onClick={handleClick}
            >
              10000
            </Button>
          </div>
        </Box>
      </Grid>
      <Box align="center">
        <Button
          sx={{ mt: "10%", width: "80%" }}
          variant="contained"
          onClick={() => {
            routeChange(`/rechargeQR`, amount);
          }}
        >
          Recharge
        </Button>
      </Box>
    </div>
  );
};

export default Recharge;
