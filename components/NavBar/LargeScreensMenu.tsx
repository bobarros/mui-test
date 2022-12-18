// Hooks
import { useContext } from "react";

// Styles
import AdbIcon from "@mui/icons-material/Adb";
import { Box, Typography, Button } from "@mui/material";

// Context
import { ThemeContext } from "@/utils/themeContext";

// Types
import { FC } from "react";
interface IProps {
  handleCloseNavMenu: () => void;
  pages: string[];
}

/*--------------------*/

/**
 * LargeScreensMenu Component
 */

const LargeScreensMenu: FC<IProps> = ({ handleCloseNavMenu, pages }) => {
  const { defaultTypography, display:themeDisplay } = useContext(ThemeContext);
  const display = themeDisplay.mobile("flex");

  const mobile = {
    typography: {
      ...defaultTypography,
      display,
    },
    icon: {
      display,
    },
    box: {
      display,
      flexGrow: 1,
    },
    button: {
      my: 2,
      color: "white",
      display: "block",
    },
  };

  return (
    <>
      <AdbIcon sx={mobile.icon} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={mobile.typography}
      >
        LOGO
      </Typography>
      <Box sx={mobile.box}>
        {pages.map((page) => (
          <Button key={page} onClick={handleCloseNavMenu} sx={mobile.button}>
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default LargeScreensMenu;
