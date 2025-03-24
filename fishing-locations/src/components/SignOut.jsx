import React from "react";
import { auth } from "../firebase";

function Logout() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert("Successfully logged out!");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
}

export default Logout;
