import { Box } from "@mui/material";
import SideNav from "../../component-ui/SideNav";
import TopBar from "../../component-ui/TopBar";
import BottomNav from "../../component-ui/BottomNav";

const Layout = (props) => {
  return (
    <Box sx={{ float: "right", width: { xs: "100%", md: "80%" } }}>
      <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, width: "15%" }}>
        <SideNav />
      </Box>
      <header sx={{ display: { xs: "flex", md: "none" } }}>
        <TopBar />
      </header>
      {props.children}
      <Box sx={{ visibility: { xs: "visible", md: "hidden" } }}>
        <BottomNav />
      </Box>
    </Box>
  );
};

export default Layout;
