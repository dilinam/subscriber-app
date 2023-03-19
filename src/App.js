import Table from "./component-ui/Table";
import { getTheme } from "./theme/get-theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import SubPackages from "./pages/SubPackages";
import Share from "./pages/Share";
import SignUp from "./pages/SignUp";
import ViewAllUsers from "./pages/ViewAllUsers";
import TopBar from "./component-ui/TopBar";
import BottomNav from "./component-ui/BottomNav";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={getTheme("dark")}>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="user/signup" element={<SignUp />} />
          <Route path="user/homePage" element={<HomePage />} />
          <Route path="user/subPakages" element={<SubPackages />} />
          <Route path="user/share" element={<Share />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="admin/viewAllUsers" element={<ViewAllUsers />} />
        </Routes>
      </BrowserRouter>
      <Box sx={{ visibility: { xs: "visible", md: "hidden" } }}>
        <BottomNav />
      </Box>
    </ThemeProvider>
  );
}

export default App;
