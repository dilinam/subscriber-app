import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";


const CardManagement = () => {
    const [values, setValues] = React.useState("sdfadsfasdgfsdgsdafg");
    const handleChange =
      ((e) => {
        setValues((prev) => e.target.value );
      });

    const handleSubmit =
      ((e) => {
        e.preventDefault();
      },
      []);
  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader title="Card Management" align="center" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ mb: 5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Card Type"
                  name="cardType"
                  disabled
                  onChange={handleChange}
                  value="USDT"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Receiving Address"
                  name="receivingAddress"
                  onChange={handleChange}
                  required
                  type="text"
                  value={values}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Chain Name"
                  name="chainName"
                  disabled
                  onChange={handleChange}
                  value="TRC20"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <CardActions>
                  <Button variant="contained">Save details</Button>
                </CardActions>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
};

export default CardManagement;
