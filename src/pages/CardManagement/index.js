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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const CardManagement = () => {
  const [values, setValues] = useState({
    accountType: "Binance",
    cardType: "USDT",
    chainName: "TRC20",
    receivingAddress: "",
  });
const MySwal = withReactContent(Swal);
  const [data, setData] = useState({});

  useEffect(() => {
    getCardDetails().then((res) => setData(res.data));
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
  const handleChangeMenu = (e) => {
    setValues((prev) => ({
      ...prev,
      accountType: e.target.value,
    }));
  };
  const save = () => {
    saveCardDetails(values).then(res => {
      getCardDetails().then((res) => setData(res.data));
      MySwal.fire("success!", "Card details save successful....!", "success");
    }).catch(()=>{ MySwal.fire("ERROR", "Please contact admin", "error");});
  };
  return (
    <Card sx={{ backgroundColor: "transparent" }}>
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
                value={values.accountType}
                onChange={handleChangeMenu}
              >
                <MenuItem value="Binance">Binance</MenuItem>
                <MenuItem value="Huobi">Huobi</MenuItem>
                <MenuItem value="OKX">OKX</MenuItem>
                <MenuItem value="Coinbase">Coinbase</MenuItem>
                <MenuItem value="KuCoin">KuCoin</MenuItem>
                <MenuItem value="Bybit">Bybit</MenuItem>
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
                // label="Receiving Address"
                placeholder={values.receivingAddress ? "" : "Receiving Address"}
                value={values.receivingAddress ? values.receivingAddress : null}
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
