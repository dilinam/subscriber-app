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
} from "@mui/material";
import { getUserDetails } from "../../use-cases/get-user-details";
import { editUser } from "../../use-cases/edit-user";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const handleChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  useEffect(() => {
    getUserDetails().then((res) => setUser(res.data));
  }, []);

  // const handleSubmit =
  //   ((event) => {
  //     event.preventDefault();
  //   },
  //   []);
console.log(user);
  const save = () => {
    editUser(user);
    console.log(user)
  };

  return (
    <Card>
      <CardHeader subheader="The information can be edited" title="Profile" />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                // label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={user.firstName}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                // label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={user.lastName}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                // label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={user.email}
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

export default UserDetails;
