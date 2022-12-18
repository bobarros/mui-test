// Hooks
import { useContext } from "react";

// Styles
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";

// Context
import { ThemeContext } from "@/utils/themeContext";

// Types
import type { FC } from "react";
import { INavProps } from "@/components/NavBar/types";

/*--------------------*/

/**
 * MobileItems Component
 */

const MobileItems: FC<INavProps> = ({
  pages,
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}) => {
  const { display } = useContext(ThemeContext);

  const transformOrigin = {
    vertical: "top",
    horizontal: "left",
  };
  const anchorOrigin = {
    vertical: "bottom",
    horizontal: "left",
  };
  const mobile = {
    box: {
      flexGrow: 1,
      display: display.desktop("flex"),
    },
    menu: {
      display: display.desktop("block"),
    },
  };

  return (
    <Box sx={mobile.box}>
      <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
        <MenuIcon />
      </IconButton>
      <Menu
        keepMounted
        id="menu-appbar"
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={mobile.menu}
        {...transformOrigin}
        {...anchorOrigin}
      >
        {pages.map((page: string) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileItems;
