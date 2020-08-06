import * as React from "react";
export type ThemeValue = "Dark";
export const ThemeContext = React.createContext<ThemeValue | undefined>(
  undefined
);

export default ThemeContext;
