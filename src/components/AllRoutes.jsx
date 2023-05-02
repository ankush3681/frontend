import React from 'react';
import {Routes,Route} from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
import Posts from './Posts';
import Home from './Home';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
