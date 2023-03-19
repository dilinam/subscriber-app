import React, { useState,useRef,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Login = () => {
  const paperStyle = {height:'60%',width:250,padding:20,margin:'100px auto'}
  const userRef = useRef();
  const errRef = useRef();
  const [user,setUser] = useState("");
  const [pwd,setPwd] = useState("");
  const [errMsg,setErrMsg] = useState("");

  return (
    <Grid>
      <Paper elevation={7} style={paperStyle}>
        <Grid align="center">
          <Avatar sx={{ bgcolor: "#61DBFB" }}>
            <PersonOutlinedIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Sign in
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
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              size="small"
              required
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                label="Remember Me"
                size="small"
              />
            </FormGroup>
            <Button
              variant="contained"
              href="#contained-buttons"
              fullWidth
              size="small"
            >
              Sign in
            </Button>
            <Typography variant="subtitle2" gutterBottom>
              <Link
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Forgot Password ?
              </Link>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Don't you have an account ?{" "}
              <Link
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
}

export default Login