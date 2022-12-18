// Hooks
import { createContext } from "react";

// Types
import type { ReactNode } from "react";

// Iniate Context
const theme = {
  defaultTypography: {
    mr: 2,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  display: {
    mobile: (display: string) => ({
      xs: "none",
      md: display,
    }),
    desktop: (display: string) => ({
      xs: display,
      md: "none",
    }),
  },
};

export const ThemeContext = createContext(theme);

const ContextProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
};

export default ContextProvider;
