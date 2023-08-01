import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { resetPassword } from "../../use-cases/reset-password";

const userData = {
  password: "",
  ComfirmPassword:"",
};

export default function ResetPassword() {
  const [formData, setFormData] = React.useState({ ...userData });
  const [formErrorMessages, setFormErrorMessages] = React.useState({
    ...userData,
  });
  const [queryParameters] = useSearchParams();
  // const queryParameters = new URLSearchParams(window.location.search);
 const MySwal = withReactContent(Swal);

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = false;
    let errorMessages = { ...userData };

    if (formData.password.trim() === "") {
      errorMessages.password = "Password is required";
      errors = true;
    }
    if (formData.ComfirmPassword.trim() === "") {
      errorMessages.ComfirmPassword = "Comfirm Password is required";
      errors = true;
    } else if (formData.ComfirmPassword.trim() !== formData.password.trim()) {
      errorMessages.ComfirmPassword =
        "Confirm Password is not match with Password";
      errors = true;
    }

    if (errors) {
      setFormErrorMessages(errorMessages);
      return;
    }else{
          const token = queryParameters.get("resetToken");
          resetPassword(token, formData.password)
            .then((response) => {
              MySwal.fire(
                "Good job!",
                "Succesfully Updated Your Password",
                "success"
              );
              setFormData({ ...userData });
            })
            .catch((error) => {
              if (error?.response?.data) {
                setFormErrorMessages((prev) => {
                  const newErrors = { ...prev };
                  Object.keys(error.response.data).forEach((key) => {
                    newErrors[key] = error.response.data[key];
                  });
                  MySwal.fire("ERROR!", "Somthing Went Wrong", "error");
                  return newErrors;
                });
              }
            });

    }

  };

  const handleFormValueChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    setFormErrorMessages((prev) => ({
      ...prev,
      [event.target.name]: "",
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid grey",
          paddingTop: 1,
          padding: 3,
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      >
        <Avatar
          sx={{ width: 100, height: 100 }}
          alt="Remy Sharp"
          src="logo.jpg"
        ></Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleFormValueChange}
                error={formErrorMessages.password !== ""}
                helperText={formErrorMessages.password}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="ComfirmPassword"
                label="Comfirm Password"
                type="password"
                id="Comfirm password"
                autoComplete="new-password"
                value={formData.ComfirmPassword}
                onChange={handleFormValueChange}
                error={formErrorMessages.ComfirmPassword !== ""}
                helperText={formErrorMessages.ComfirmPassword}
                color="secondary"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3,color:"#000"}}>
            Reset Password
          </Button>
          <br></br>
          <br></br>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link href="/" variant="body2" sx={{color:"#ecf029"}}>
                Go to Login Page
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
