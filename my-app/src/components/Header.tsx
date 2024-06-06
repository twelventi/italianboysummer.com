import { useTheme } from "@emotion/react";
import { AppBar, IconButton, Button, Typography, Box } from "@mui/material";
import { alpha, Stack } from "@mui/system";
import { useNavigate } from "react-router";
import { LanguageText, useLanguageContext } from "../context/Language";

const text = {
  events: {
    en: "Events",
    it: "Eventi",
  },
  tunes: {
    en: "Tunes",
    it: "Brani",
  },
  about: {
    en: "About",
    it: "Circa",
  },
};

export default function Header() {
  const theme: any = useTheme();
  console.log(theme);
  const lc = useLanguageContext();
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        variant="outlined"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          sx={{
            backgroundColor: alpha(theme.palette.gold.main, 0.5),
            width: "100vw",
            height: "2.5vh",
          }}
        >
          <IconButton
            onClick={() => {
              lc.setLanguage("en");
            }}
          >
            <Typography variant="h6">🇺🇸</Typography>
          </IconButton>
          <IconButton
            onClick={() => {
              lc.setLanguage("it");
            }}
          >
            <Typography variant="h6">🇮🇹</Typography>
          </IconButton>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          sx={{
            borderBottomWidth: "5px",
            borderBottomColor: "theme.palette.primary",
          }}
        >
          <IconButton onClick={() => (window.location.href = "/")}>
            <img height="150px" width="150px" src="./ibs-logo.png"></img>
          </IconButton>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h2" color="primary">
              ITALIAN &nbsp;
            </Typography>
            {/* //@ts-ignore */}
            <Typography variant="h2" color={theme?.palette?.gold?.main}>
              BOY
            </Typography>
            <Typography variant="h2" color="secondary">
              &nbsp; SUMMER
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            sx={{ marginRight: "1rem" }}
          >
            <Button variant="text" onClick={() => navigate("/events")}>
              <LanguageText content={text.events} />
            </Button>
            <Button
              variant="text"
              color="gold"
              onClick={() => navigate("/tunes")}
            >
              <LanguageText content={text.tunes} />
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/about")}
            >
              <LanguageText content={text.about} />
            </Button>
          </Stack>
        </Stack>
        <Box
          sx={{
            height: "0.5vh",
            backgroundColor: alpha(theme.palette.gold.main, 0.5),
          }}
        ></Box>
      </AppBar>
    </>
  );
}
