import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React, { useEffect } from "react";

function Sidebar({ setMode, getDrinksBySearch }) {

  const handleChange = (e) => {
    if (e.target.checked) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  const handleClickMargarita = () => {
    getDrinksBySearch('search.php?s=margarita')
  }
  const handleClickVodka = () => {
    getDrinksBySearch('search.php?s=vodka')
  }
  useEffect(() => {
    getDrinksBySearch('random.php')
  
  }, [])
  const handleClickHome = () => {
    getDrinksBySearch('random.php')
  }
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="button" onClick={handleClickHome}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="button" onClick={handleClickMargarita}>
              <ListItemIcon>
                <LocalBarIcon />
              </ListItemIcon>
              <ListItemText primary="Margrita" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="button" onClick={handleClickVodka}>
              <ListItemIcon>
                <WineBarIcon />
              </ListItemIcon>
              <ListItemText primary="Vodka" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch onChange={handleChange} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
