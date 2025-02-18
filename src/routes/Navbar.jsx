import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {NavLink, Outlet} from 'react-router-dom';
import { logOutService } from "../firebase";
import useCheckAuthForLogin from "../models/CheckAuthForLogin";

function Navbar() {
   
  const  { user } = useCheckAuthForLogin();  

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button variant="contained" color="inherit"><NavLink to='/'>Home</NavLink></Button> &nbsp;
          <Button variant="contained" color="inherit"><NavLink to='/Form'>Form</NavLink></Button>&nbsp;
          {!user?
          <Button variant="outlined" color="inherit"><NavLink to='/Login'>Login</NavLink></Button>:
          <Button variant="outlined" color="inherit" onClick={logOutService}>LogOut</Button>          
        }
           
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <List>
          {["Home", "About", "Services", "Contact"].map((text) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Outlet/>
    </>
  );
}

export default Navbar;
