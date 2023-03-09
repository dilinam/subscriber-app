import Table from "./component-ui/Table";
import { getTheme } from "./theme/get-theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={getTheme("dark")}>
      <Table />
    </ThemeProvider>
  );
}

export default App;
