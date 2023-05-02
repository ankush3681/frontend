import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display:"flex",width:"50%",margin:"auto",justifyContent:"space-evenly"}}>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/register">Signup</Link></p>
      <p><Link to="/login">Login</Link></p>
      <p><Link to="/posts">Posts</Link></p>
    </div>
  )
}

export default Navbar
