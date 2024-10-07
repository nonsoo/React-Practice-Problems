import { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("lights");

  const setLightTheme = () => {
    setTheme("light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
  };
  return <div>{children}</div>;
};

export default ThemeProvider;
