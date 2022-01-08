import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";

import Link from "next/link";

const pages = [
  {
    name: "home",
    url: "/home",
    displayName: "홈",
  },
  {
    name: "exerciseManagement",
    url: "/exercises",
    displayName: "운동 관리",
  },
  {
    name: "calendar",
    url: "/calendar",
    displayName: "운동 만들기",
  },
  {
    name: "manage",
    url: "/manage",
    displayName: "관리",
  },
];

const drawer = (
  <>
    <Toolbar />
    <Divider />
    <List>
      {pages.map((page, index) => {
        return (
          <Link key={index} href={page?.url}>
            <ListItem button key={page.name}>
              {/* <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon> */}
              <ListItemText primary={page.displayName} />
            </ListItem>
          </Link>
        );
      })}
    </List>
  </>
);

export default function Navbar({ drawerWidth }) {
  const {
    drawer: { mobileOpen, handleDrawerToggle },
  } = useContext(AppContext);

  let container = undefined;
  if (typeof window !== "undefined") {
    container = window !== undefined ? () => window().document.body : undefined;
  }

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        modalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "black", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
