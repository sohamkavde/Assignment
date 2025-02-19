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
  const myNavButtonStyle = {
    textDecoration:'none',
    color:'black'
  };

  return (
    <>
      {/* Desktop Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <NavLink to='/' style={myNavButtonStyle}><Button variant="contained" color="inherit">Home</Button></NavLink> &nbsp;
         <NavLink to='/Form' style={myNavButtonStyle}> <Button variant="contained" color="inherit">Form</Button></NavLink>&nbsp;
          {!user?
         <NavLink to='/Login' style={myNavButtonStyle}> <Button variant="outlined" color="inherit">Login</Button></NavLink>:
          <Button variant="outlined" color="inherit" onClick={logOutService} style={myNavButtonStyle}>LogOut</Button>          
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
      {/* <Drawer
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
      </Drawer> */}
      <Outlet/>
    </>
  );
}

export default Navbar;
