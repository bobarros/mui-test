// Hooks
import { useContext } from "react";

// Styles
import AdbIcon from "@mui/icons-material/Adb";
import { Typography } from "@mui/material";

// Context
import { ThemeContext } from "@/utils/themeContext";

// Local Components
import MobileItems from "./MobileItems";

// Types
import type { FC } from "react";
import { INavProps } from "@/components/NavBar/types";

/*--------------------*/

/**
 * SmallerScreensMenu Component
 */

const SmallerScreensMenu: FC<INavProps> = (props) => {
  const { defaultTypography, display } = useContext(ThemeContext);
  const mobile = {
    icon: {
      display: display.desktop("flex"),
      mr: 1,
    },
    typography: {
      ...defaultTypography,
      display: display.desktop("flex"),
      flexGrow: 1,
    },
  };

  return (
    <>
      <AdbIcon sx={mobile.icon} />
      <MobileItems {...props} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={mobile.typography}
      >
        LOGO
      </Typography>
    </>
  );
};

export default SmallerScreensMenu;
