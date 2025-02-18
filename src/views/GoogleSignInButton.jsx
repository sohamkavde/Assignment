import React from "react";
import { googleSignInService } from "../firebase";
const GoogleSignInButton = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <button onClick={googleSignInService}>Sign in with Google</button>    
    </div>
  );
};

export default GoogleSignInButton;  