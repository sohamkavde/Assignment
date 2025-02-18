// src/components/LogoutButton.js
import React from "react";
import { logOutService } from "../firebase";

const LogoutButton = () => {
  return (
    <button onClick={logOutService}>Logout</button>
  );
};

export default LogoutButton;
