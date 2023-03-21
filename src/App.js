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
import SideNav from "./component-ui/SideNav";
import PendingSub from "./pages/PendingSub";
import PendingWithdraw from "./pages/PendingWithdraw";

function App() {
  return (
    <ThemeProvider theme={getTheme("dark")}>
      <BrowserRouter>
        <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, width: "15%" }}>
          <SideNav />
        </Box>
        <header sx={{ display: { xs: "flex", md: "none" } }}>
          <TopBar />
        </header>
        <Box sx={{ float: "right", width: { xs: "100%", md: "80%" } }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="user/signup" element={<SignUp />} />
            <Route path="user/homePage" element={<HomePage />} />
            <Route path="user/subPakages" element={<SubPackages />} />
            <Route path="user/share" element={<Share />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="admin/viewAllUsers" element={<ViewAllUsers />} />
            <Route path="admin/pendingSub" element={<PendingSub />} />
            <Route path="admin/pendingWithdraw" element={<PendingWithdraw />} />
          </Routes>
        </Box>
      </BrowserRouter>
      <Box sx={{ visibility: { xs: "visible", md: "hidden" } }}>
        <BottomNav />
      </Box>
    </ThemeProvider>
  );
}

export default App;
