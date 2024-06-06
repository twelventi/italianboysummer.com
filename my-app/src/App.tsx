import { Box, CssBaseline, Stack, Toolbar } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./Router";
import Wrappers from "./Wrappers";

function App() {
  // #FC0006 -R
  // #106300 -G
  // #FFA900 -Y

  return (
    <>
      <CssBaseline />
      <Wrappers>
        <Stack
          sx={{
            minHeight: "100vh",
            width: "100vw",
            margin: "0",
            padding: "0",
          }}
        >
          <Header />
          <Box
            flexGrow={1}
            sx={{
              overflowY: "scroll",
            }}
          >
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Routing />
          </Box>
          <Footer />
        </Stack>
      </Wrappers>
    </>
  );
}

export default App;
