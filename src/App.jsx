import { useState } from "react";
import "./sass/style.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import SingleRoute from "./pages/singleRoute/SingleRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:id" element={<SingleRoute />} /> */}
      </Routes>
    </>
  );
}

export default App;
