import { createContext, PropsWithChildren, useContext, useState } from "react";

const LC = createContext({
  language: "",
  setLanguage: (lang: string) => {},
});

export const useLanguageContext = () => useContext(LC);
export const LanguageContext = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ?? "en"
  );
  return (
    <LC.Provider
      value={{
        language: language,
        setLanguage: (lang: string) => {
          setLanguage(lang);
          localStorage.setItem("language", lang);
        },
      }}
    >
      {children}
    </LC.Provider>
  );
};

export const LanguageText = ({
  content,
}: {
  content: Record<string, string>;
}) => {
  const lc = useLanguageContext();
  return <>{content[lc.language]}</>;
};
