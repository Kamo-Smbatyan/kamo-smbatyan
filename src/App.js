import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import About from "./Components/About";
import { Rings } from "react-loader-spinner";
const Reacttutorial = React.lazy(() => import("./Components/Portfolio"));

function App() {
  return (
    <div className="top-div">
      <div className="mainnav">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink1"
          to="/"
        >
          <img
            src="/logo.svg"
            className="logo"
            alt="hylcore-V logo"
          ></img>
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink1"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink1"
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink1"
          to="/portfolio"
        >
          Portfolio
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
          className="bloglink1"
          to="/about"
        >
          About
        </NavLink>
      </div>

      <div className="mainroutes">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs/*" element={<Blog />}></Route>
          <Route
            path="/portfolio/*"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <Reacttutorial />
              </React.Suspense>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
