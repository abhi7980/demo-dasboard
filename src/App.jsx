import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
