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

function App() {
  return (
    <ThemeProvider theme={getTheme("dark")}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/subPakages" element={<SubPackages />} />
          <Route path="/share" element={<Share />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
