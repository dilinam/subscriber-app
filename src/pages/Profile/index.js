import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import CardForHome from "../../component-ui/CardForHome";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import * as React from "react";

const user = {
  avatar: "/assets/avatars/avatar-anika-visser.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Anika Visser",
  timezone: "GTM-7",
};
const Profile = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                height: 80,
                mb: 2,
                width: 80,
              }}
            />
            <Typography gutterBottom variant="h5">
              {user.name}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.city} {user.country}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.timezone}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button fullWidth variant="text">
            Upload picture
          </Button>
        </CardActions>
      </Card>
      <Button href="http://localhost:3000/userDetails">
        Update profile info
      </Button>
      <CardForHome value="$100" name="Available Balance" />
      <Stack spacing={1} direction="column" sx={{ m: 2, mb: 10 }}>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ display : "flex" ,justifyContent: "flex-end"}}
        >
          Withdraw
        </Button>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIosIcon sx={{ ml: 25 }} />}
          sx={{ float: "left" }}
        >
          Packages
        </Button>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIosIcon sx={{ ml: 25 }} />}
        >
          Recharge
        </Button>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIosIcon sx={{ ml: 25 }} />}
        >
          Packages
        </Button>
      </Stack>
    </div>
  );
};

export default Profile;
