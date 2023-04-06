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
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Stack from "@mui/material/Stack";
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
      <Card sx={{ m: 1, borderRadius: 3 }}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                height: 80,
                m: 3,
                width: 80,
              }}
            />
            <Box>
              <Typography gutterBottom variant="h6">
                hasitha1999
              </Typography>
              <Typography color="text.secondary" variant="body2">
                ID : 00000410
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            fullWidth
            variant="text"
            href="http://localhost:3000/userDetails"
          >
            Update profile info
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ m: 1, borderRadius: 3 }}>
        <CardContent sx={{ ml: 5 }}>
          <Typography sx={{ fontSize: 18 }} color="text.secondary">
            Your Package
          </Typography>
          <Typography variant="h5" color="text.secondary">
            100 USDT package
          </Typography>
        </CardContent>
        <CardContent sx={{ ml: 5 }}>
          <Typography sx={{ fontSize: 18 }} color="text.secondary">
            Availabale balance (USDT)
          </Typography>
          <Typography variant="h5" color="text.secondary">
            361.00 USDT
          </Typography>
        </CardContent>
      </Card>

      <Stack spacing={1} direction="column" sx={{ m: 2, mb: 10 }}>
        <Button
          color="secondary"
          startIcon={<AssignmentIcon sx={{ mr: 2 }} />}
          size="large"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "20px",
          }}
          href={`http://localhost:3000/expensesRecord`}
        >
          Expences Record
        </Button>
        <Button
          color="secondary"
          startIcon={<TrendingUpIcon sx={{ mr: 2 }} />}
          size="large"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "20px",
          }}
          href={`http://localhost:3000/activityIncome`}
        >
          Activity Income
        </Button>
        <Button
          color="secondary"
          size="large"
          startIcon={<CreditCardIcon sx={{ mr: 2 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "20px",
          }}
          href="http://localhost:3000/cardManagement"
        >
          Card Management
        </Button>
        <Button
          color="secondary"
          startIcon={<HeadsetMicIcon sx={{ mr: 2 }} />}
          size="large"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "20px",
          }}
          href="http://localhost:3000/customerService"
        >
          Customer Service
        </Button>
        <Button
          color="secondary"
          size="large"
          startIcon={<GroupsIcon sx={{ mr: 2 }} />}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "20px",
          }}
          href="http://localhost:3000/aboutUs"
        >
          About DTF Team
        </Button>
      </Stack>
    </div>
  );
};

export default Profile;
