import { Route, Routes} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const theme = {
    dark: "#090E16",
    secondary: "#7B4AE2",
    rose: "#C83267"
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>

    </ThemeProvider>
  );
}

export default App;
