// import React from "react";
// import Header from "./header";
// import Sidebar from "./sidebar";

import { Container, CssBaseline, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./header";
import Navbar from "./navbar";

const drawerWidth = 200;

export default function SidebarWithHeader({ children }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header drawerWidth={drawerWidth} />
        <Navbar drawerWidth={drawerWidth} />
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
