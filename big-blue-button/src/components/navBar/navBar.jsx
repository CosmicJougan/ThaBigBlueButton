import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, Route, Routes } from "react-router-dom";
import "./navBar.css";
import Overview from "components/overview/overview";
import TimeTracker from "components/timetracker/timetracker";
import Files from "components/files/files";
import Login from "components/login/login";
import Registration from "components/registration/registration";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [_, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="naviBar">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              RELAXANI
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={() => setAnchorEl(null)}
                  component={Link}
                  to={"/timer"}
                >
                  Start/Stop
                </MenuItem>
                <MenuItem
                  onClick={() => setAnchorEl(null)}
                  component={Link}
                  to={"/overview"}
                >
                  Overzicht
                </MenuItem>
                <MenuItem
                  onClick={() => setAnchorEl(null)}
                  component={Link}
                  to={"/files"}
                >
                  Files
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              RELAXANI
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MenuItem
                onClick={() => setAnchorEl(null)}
                component={Link}
                to={"/timer"}
              >
                Start/Stop
              </MenuItem>
              <MenuItem
                onClick={() => setAnchorEl(null)}
                component={Link}
                to={"/overview"}
              >
                Overzicht
              </MenuItem>
              <MenuItem
                onClick={() => setAnchorEl(null)}
                component={Link}
                to={"/files"}
              >
                Files
              </MenuItem>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <button
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  className="navName"
                >
                  Michael
                </button>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => setAnchorEl(null)}
                  component={Link}
                  to={"/timer"}
                >
                  Start/Stop
                </MenuItem>
                <MenuItem
                  onClick={() => setAnchorEl(null)}
                  component={Link}
                  to={"/overview"}
                >
                  Overzicht
                </MenuItem>
                <MenuItem
                  onClick={() => setAnchorEl(null)}
                  component={Link}
                  to={"/files"}
                >
                  Files
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/timer"
          element={
            <div className="centered">
              <TimeTracker />
            </div>
          }
        />
        <Route path="/overview" element={<Overview />} />
        <Route path="/files" element={<Files />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}
export default ResponsiveAppBar;
