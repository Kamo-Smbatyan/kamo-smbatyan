import "./App.css";
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
// import Home from "./Components/Home";
import Blog from "./Components/Blog";
import About from "./Components/About";
import { Rings } from "react-loader-spinner";
const Portfolio = React.lazy(() => import("./Components/Portfolio"));

function App() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <div className="top-div">
      {/* Mobile Navigation */}
      <div className="mobile-mainnav">
        <NavLink
          to="/"
          className="bloglink1"
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          <img
            src="/logo.svg"
            className="logo"
            alt="hylcore-V logo"
          ></img>
        </NavLink>
        <button
          className={`hamburger-btn ${mobileNavVisible ? "open" : ""}`}
          onClick={toggleMobileNav}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div
          className={`mobile-nav-links ${mobileNavVisible ? "show" : ""}`}
        >
          <NavLink
            to="/"
            className="bloglink1"
            style={({ isActive }) => ({
              color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
              fontWeight: isActive ? "600" : "400",
            })}
            onClick={() => setMobileNavVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className="bloglink1"
            style={({ isActive }) => ({
              color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
              fontWeight: isActive ? "600" : "400",
            })}
            onClick={() => setMobileNavVisible(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/portfolio"
            className="bloglink1"
            style={({ isActive }) => ({
              color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
              fontWeight: isActive ? "600" : "400",
            })}
            onClick={() => setMobileNavVisible(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className="bloglink1"
            style={({ isActive }) => ({
              color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
              fontWeight: isActive ? "600" : "400",
            })}
            onClick={() => setMobileNavVisible(false)}
          >
            About
          </NavLink>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="mainnav">
        <NavLink
          to="/"
          className="bloglink1"
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          <img
            src="/logo.svg"
            className="logo"
            alt="hylcore-V logo"
          ></img>
        </NavLink>
        <NavLink
          to="/about"
          className="bloglink1"
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/blogs"
          className="bloglink1"
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/portfolio"
          className="bloglink1"
          style={({ isActive }) => ({
            color: isActive ? "rgb(36, 204, 133)" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          Portfolio
        </NavLink>
        
      </div>

      <div className="mainroutes">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blogs/*" element={<Blog />} />
          <Route
            path="/portfolio/*"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings />
                  </div>
                }
              >
                <Portfolio />
              </React.Suspense>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
