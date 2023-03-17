import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const paperStyle = {
  height: "70vh",
  width: 250,
  padding: 20,
  margin: "100px auto",
};
const SignUp = () => {
  return (
    <Grid>
      <Paper elevation={7} style={paperStyle}>
        <Grid align="center">
          <Avatar sx={{ bgcolor: "#61DBFB" }}>
            <PersonOutlinedIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            SignUp
          </Typography>
        </Grid>

        <form>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="username"
              label="UserName"
              type="text"
              fullWidth
              required
              size="small"
            />
            <TextField
              id="email"
              label="e-mail"
              type="email"
              fullWidth
              required
              size="small"
            />
            <TextField
              id="contactNo"
              label="Contact no"
              type="text"
              fullWidth
              required
              size="small"
            />

            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              size="small"
              required
            />
            <TextField
              id="cpassword"
              label="Confirm Password"
              type="password"
              fullWidth
              size="small"
              required
            />

            <Button
              variant="contained"
              href="#contained-buttons"
              fullWidth
              size="small"
            >
              Sign Up
            </Button>
            <Typography variant="subtitle2" gutterBottom>
              Do you have an account ?{" "}
              <Link
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
  
}

export default SignUp;