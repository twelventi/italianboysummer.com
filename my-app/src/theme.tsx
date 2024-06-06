import { ThemeContext, ThemeProvider } from "@emotion/react";
import {
  alpha,
  createTheme,
  getContrastRatio,
  PaletteColorOptions,
  ThemeOptions,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

// Augment the palette to include an ochre color
declare module "@mui/material/styles" {
  interface Palette {
    gold: Palette["primary"];
  }

  interface PaletteOptions {
    gold?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gold: true;
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    gold: true;
  }
}

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  const goldMain = "#FFA900";
  const theme: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: {
        main: "#106300",
      },
      secondary: {
        main: "#FC0006",
      },
      gold: {
        main: goldMain,
        light: alpha(goldMain, 0.5),
        dark: alpha(goldMain, 0.9),
        contrastText:
          getContrastRatio(goldMain, "#fff") > 4.5 ? "#fff" : "#111",
      },
    },

    typography: {
      h2: { fontFamily: "serif" },
    },
  };

  const themeInstance = createTheme(theme);
  return <ThemeProvider theme={themeInstance}>{children}</ThemeProvider>;
};
