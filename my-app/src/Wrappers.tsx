import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageContext } from "./context/Language";
import { ThemeWrapper } from "./theme";

export default function Wrappers({ children }: PropsWithChildren) {
  return (
    <ThemeWrapper>
      <LanguageContext>
        <BrowserRouter>{children}</BrowserRouter>
      </LanguageContext>
    </ThemeWrapper>
  );
}
