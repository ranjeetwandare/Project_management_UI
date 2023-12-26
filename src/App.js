import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Addproduct from "./component/Addproduct";
import Editproduct from "./component/Editproduct";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addproduct" element={<Addproduct />}></Route>
        <Route path="/editproduct/:id" element={<Editproduct />}></Route>
      </Routes>
    </>
  );
};

export default App;
