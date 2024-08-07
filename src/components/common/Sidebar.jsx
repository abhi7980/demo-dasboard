import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const drawerWidth = 240;

function Sidebar({ open }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : 72,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 72,
          boxSizing: "border-box",
          backgroundColor: "#2d2f33",
          color: "white",
          transition: "width 0.3s",
          overflow: "hidden",
          paddingTop: "15px",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton>
          {open ? (
            <ChevronLeftIcon sx={{ color: "white" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "white" }} />
          )}
        </IconButton>
      </Box>

      <List>
        {[
          { text: "Dashboard", icon: <HomeIcon /> },
          { text: "Orders", icon: <ListAltIcon /> },
          { text: "Reports", icon: <BarChartIcon /> },
          { text: "Settings", icon: <SettingsIcon /> },
          { text: "Test", icon: <DashboardIcon /> },
        ].map((item, index) => (
          <ListItem button key={item.text} sx={{ minHeight: "55px" }}>
            <ListItemIcon sx={{ color: "white", minWidth: "30px" }}>
              {item.icon}
            </ListItemIcon>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <ListItem button sx={{ minHeight: "55px" }}>
        <ListItemIcon sx={{ color: "white", minWidth: "30px" }}>
          <ExitToAppIcon />
        </ListItemIcon>
        {open && <ListItemText primary="Logout" />}
      </ListItem>
    </Drawer>
  );
}

export default Sidebar;
