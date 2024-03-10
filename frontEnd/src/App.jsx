import "./App.css";
import HeaderOne from "./components/header/HeaderOne";
import HeaderTwo from "./components/header/HeaderTwo";
import HeaderThree from "./components/header/HeaderThree";

import { ColorModeContext, useMode } from "./theme/Theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import BtnScroll from "./components/btnScroll/BtnScroll";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderOne />
        <HeaderTwo />
        <HeaderThree />
        <Box bgcolor={theme.palette.bgBody.main} py={1} mt={3} pb={0}>
          <Hero />
          <Main />
          <Footer />
        </Box>
        <BtnScroll />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
