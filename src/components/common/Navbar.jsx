import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

function Navbar({ toggleSidebar }) {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <GridViewIcon sx={{ color: "#7294ff" }} />
        </IconButton>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          sx={{ bgcolor: "background.paper", borderRadius: 1, mr: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <MailIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <Avatar
          alt="User Avatar"
          src="https://randomuser.me/api/portraits/men/1.jpg"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
