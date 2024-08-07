import { AppBar } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <AppBar />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
