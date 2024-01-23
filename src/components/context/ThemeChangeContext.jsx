import React, { createContext, useContext, useState } from "react";

const ThemeChangeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeChangeContext);
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeChangeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeChangeContext.Provider>
  );
}
