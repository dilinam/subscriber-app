import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Unstable_Grid2 as Grid,
  MenuItem,
} from "@mui/material";
import {
  getCardDetails,
  saveCardDetails,
} from "../../use-cases/get-Card-Details";
const Accounts = [
  {
    value: "Binance",
    label: "Binance",
  },
  {
    value: "Huobi",
    label: "Huobi",
  },
  {
    value: "OKX",
    label: "OKX",
  },
];

const CardManagement = () => {
  const [values, setValues] = useState({
    accountType: "Binance",
    cardType: "USDT",
    chainName: "TRC20",
    receivingAddress: "",
  });
  const [data, setData] = useState({});
  useEffect(async () => {
    await getCardDetails().then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    if (data.cardType) {
      setValues(data);
    }
  }, [data]);
  const handleChange = (event) => {
    console.log(values.user);
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const save = () => {
    saveCardDetails(values);
    console.log(values);
  };
  return (
    <Card>
      <CardHeader title="Card Management" align="center" />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField
                id="outlined-select-currency"
                select
                name="accountType"
                fullWidth
                defaultValue={values.accountType}
                onchange={handleChange}
              >
                {Accounts.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                name="cardType"
                disabled
                onChange={handleChange}
                value={values.cardType}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                name="receivingAddress"
                onChange={handleChange}
                required
                type="text"
                value={values.receivingAddress}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                name="chainName"
                disabled
                onChange={handleChange}
                value={values.chainName}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <CardActions>
                <Button
                  variant="contained"
                  size="medium"
                  value="50"
                  onClick={save}
                >
                  Save details
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardManagement;
