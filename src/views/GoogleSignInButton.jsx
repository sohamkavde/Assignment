import React from "react";
import { googleSignInService } from "../firebase";
import {  Button } from "@mui/material";

const GoogleSignInButton = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <Button variant="outlined" color="error" onClick={googleSignInService}>Sign in with Google</Button>    
    </div>
  );
};

export default GoogleSignInButton;  