// import React from "react";
// import Header from "./header";
// import Sidebar from "./sidebar";

import { CssBaseline, Snackbar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Header from "./header";
import Navbar from "./navbar";

const drawerWidth = 200;

export default function SidebarWithHeader({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Navbar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` },
            // height: { sm: `calc(100vh - 64px)` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
}
