// Hooks
import { useState } from "react";

// Styles
import { AppBar, Toolbar, Container } from "@mui/material";

// Types
import type { MouseEvent } from "react";

// Local Components
import SmallerScreensMenu from "./SmallerScreensMenu";
import LargeScreensMenu from "./LargeScreensMenu";

/*--------------------*/

/**
 * NavBar Component
 */

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const pages = ["Products", "Pricing", "Blog"];

  function handleOpenNavMenu(event: MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  const componentProps = {
    anchorElNav,
    setAnchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
    pages,
  };

  /*--------------------*/

  /**
   * NavBar Component Structure
   */

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SmallerScreensMenu {...componentProps} />
          <LargeScreensMenu {...componentProps} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
