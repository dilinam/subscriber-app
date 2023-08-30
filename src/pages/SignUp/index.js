import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import validateEmail from "../../utils/validate-email";
import { getMaxRef, registerUser } from "../../use-cases/register-user";
import { useSearchParams } from "react-router-dom";
import { getDisabledReg } from "../../use-cases/get-disabled-reg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const userData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  ComfirmPassword: "",
  userRef: "",
};

export default function SignUp() {
  const [isRegDisabled, setIsRegDisabled] = React.useState(false);
  const [maxRef, setMaxRef] = React.useState(0);
  const [formData, setFormData] = React.useState({ ...userData });
  const [formErrorMessages, setFormErrorMessages] = React.useState({
    ...userData,
  });
  const [queryParameters] = useSearchParams();
  const [progress, setProgress] = React.useState(0);
  const [pColor, setPColor] = React.useState("error");
  // const queryParameters = new URLSearchParams(window.location.search);
  const MySwal = withReactContent(Swal);
  React.useEffect(() => {
    const ref = queryParameters.get("ref");
    if (ref) {
      setFormData((prev) => ({ ...prev, userRef: ref }));
    }

    getDisabledReg().then((response) => {
      if (response.data.value === "TRUE") {
        setIsRegDisabled(true);
        MySwal.fire(
          "REALLY SORRY...!",
          "New Registrations are hold for now..!",
          "error"
        );
      }
    });
  }, []);

  React.useEffect(() => {
    getMaxRef().then((res) => {
      setMaxRef(res.data);
    });
  }, []);

  // alert(maxRef)

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = false;
    let errorMessages = { ...userData };

    if (formData.firstName.trim() === "") {
      errorMessages.firstName = "First Name is required";
      errors = true;
    }

    if (formData.lastName.trim() === "") {
      errorMessages.lastName = "Last Name is required";
      errors = true;
    }

    if (formData.email.trim() === "") {
      errorMessages.email = "Email is required";
      errors = true;
    }

    if (formData.email.trim() !== "" && !validateEmail(formData.email.trim())) {
      errorMessages.email = "Email is not valid";
      errors = true;
    }

    if (formData.userRef !== ""){
      if (formData.userRef.slice(3) > maxRef || formData.userRef <= 0) {
        errorMessages.userRef = "Refferal ID Does Not Exists";
        errors = true;
      }}

    if (formData.password.trim() === "") {
      errorMessages.password = "Password is required";
      errors = true;
    } else {
      let passwordValue = formData.password.trim();
      let progressValue = 100;
      if (!(passwordValue.length >= 8)) {
        errorMessages.password = "Password should contain 8 characters";
        progressValue = progressValue - 25;
        errors = true;
      }
      if (!/[a-z]+/.test(passwordValue)) {
        errorMessages.password = "At leat one simple letter";
        progressValue = progressValue - 25;
        errors = true;
      }
      if (!/[A-Z]+/.test(passwordValue)) {
        errorMessages.password = "At leat one Capital letter";
        progressValue = progressValue - 25;
        errors = true;
      }
      if (!/[0-9]+/.test(passwordValue)) {
        errorMessages.password = "At leat one number";
        progressValue = progressValue - 25;
        errors = true;
      }
      setProgress(progressValue);
      if (progressValue === 100) {
        setPColor("success");
      } else if (progressValue === 75) {
        setPColor("primary");
      } else if (progressValue === 50) {
        setPColor("secondary");
      } else {
        setPColor("error");
      }
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
    }

    const requestData = { ...formData, userRef: undefined };

    if (formData.userRef !== "") {
      requestData.parentRef = formData.userRef.slice(3);
    }
    requestData.parentRef = formData.userRef.slice(3);
    // alert(JSON.stringify(requestData));
    registerUser(requestData)
      .then((response) => {
        MySwal.fire(
          "Good job!",
          "Please verify your email using the link we sent to your email",
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

    if (event.target.name === "password") {
      let passwordValue = formData.password.trim();
      let progressValue = 100;
      if (!(passwordValue.length >= 8)) {
        progressValue = progressValue - 25;
      }
      if (!/[a-z]+/.test(passwordValue)) {
        progressValue = progressValue - 25;
      }
      if (!/[A-Z]+/.test(passwordValue)) {
        progressValue = progressValue - 25;
      }
      if (!/[0-9]+/.test(passwordValue)) {
        progressValue = progressValue - 25;
      }
      setProgress(progressValue);
      if (progressValue === 100) {
        setPColor("success");
      } else if (progressValue === 75) {
        setPColor("primary");
      } else if (progressValue === 50) {
        setPColor("secondary");
      } else {
        setPColor("error");
      }
    }
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formData.firstName}
                onChange={handleFormValueChange}
                error={formErrorMessages.firstName !== ""}
                helperText={formErrorMessages.firstName}
                color="secondary"
                disabled={isRegDisabled}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleFormValueChange}
                error={formErrorMessages.lastName !== ""}
                helperText={formErrorMessages.lastName}
                color="secondary"
                disabled={isRegDisabled}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleFormValueChange}
                error={formErrorMessages.email !== ""}
                helperText={formErrorMessages.email}
                color="secondary"
                disabled={isRegDisabled}
              />
            </Grid>
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
                disabled={isRegDisabled}
              />
              <Box sx={{ width: "100%", mt: 1 }}>
                {(progress !== 0) && (
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    color={pColor}
                  />
                )}
              </Box>
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
                disabled={isRegDisabled}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="userRef"
                label="Referral"
                type="number"
                name="userRef"
                value={formData.userRef}
                onChange={handleFormValueChange}
                error={formErrorMessages.userRef !== ""}
                helperText={formErrorMessages.userRef}
                color="secondary"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, color: "#000" }}
            disabled={isRegDisabled}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2" color="#fff">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
