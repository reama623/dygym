import {
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  FitnessCenter as FitnessCenterIcon,
  Event as EventIcon,
  Settings,
} from "@mui/icons-material";

import { Box } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

import Link from "next/link";

const pages = [
  {
    name: "home",
    url: "/home",
    displayName: "홈",
    icon: HomeIcon,
  },
  {
    name: "exerciseManagement",
    url: "/exercises",
    displayName: "운동 관리",
    icon: FitnessCenterIcon,
  },
  {
    name: "calendar",
    url: "/calendar",
    displayName: "운동 만들기",
    icon: EventIcon,
  },
  {
    name: "manage",
    url: "/manage",
    displayName: "관리",
    icon: Settings,
  },
];

const drawer = (
  <>
    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        DYGYM
      </Typography>
    </Toolbar>
    <Divider />
    <List>
      {pages.map((page, index) => {
        return (
          <Link key={index} href={page?.url}>
            <ListItem button key={page.name}>
              <ListItemIcon>
                <Icon component={page.icon} />
              </ListItemIcon>
              <ListItemText primary={page.displayName} />
            </ListItem>
          </Link>
        );
      })}
    </List>
  </>
);

export default function Navbar({ drawerWidth, mobileOpen, handleDrawerToggle }) {
  let container = undefined;
  if (typeof window !== "undefined") {
    container = window !== undefined ? () => window.document.body : undefined;
  }

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        display: { xs: "none", md: "block" },
      }}
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
          display: { md: "block", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
