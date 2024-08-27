import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./Components.css";
import { Rings } from "react-loader-spinner";
import Evm from "./Blogs/EvmVs";
const Blogindex = React.lazy(() => import("./Blogs/Blogindex"));
const Reactseo = React.lazy(() => import("./Blogs/Reactseo"));
const SubstrateAndPolkadot = React.lazy(() =>
  import("./Blogs/SubstrateAndPolkadot")
);
const LayerTwo = React.lazy(() => import("./Blogs/LayerTwo"));
const Bridge = React.lazy(() => import("./Blogs/Bridge"));
const ZkRollup = React.lazy(() => import("./Blogs/ZkRollup"));
const AiBlockchain = React.lazy(() => import("./Blogs/AiBlockchain"));



function Blog() {
  const [state, setstate] = useState("block");

  useEffect(() => {
    document.title = "Hylcore | Blog";
    document.getElementsByTagName("META")[3].content =
      "Blogs are good way to share knowledge among people";

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setstate("none");
      } else {
        setstate("block");
      }
    });

    if (window.innerWidth <= 600) {
      setstate("none");
    }
  }, []);

  function myfun() {
    if (state === "block") {
      setstate("none");
    } else {
      setstate("block");
    }
  }

  function myfun1() {
    if (window.innerWidth <= 600) {
      setstate("none");
    }
  }
  return (
    <div>
      <div className="mobileresponsive">
        <button id="responsive" onClick={myfun}>
          Click to open Menu
        </button>
      </div>
      <div style={{ display: state }} className="blogsidebar">
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="bloglink real-bloglink"
          to="react-seo"
        >
          React SEO
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="bloglink real-bloglink"
          to="substrate-and-polkadot"
        >
          Substrate & Polkadot
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="bloglink real-bloglink"
          to="layer-two"
        >
          Layer2
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="bloglink real-bloglink"
          to="zk-rollup"
        >
          ZK-Rollup
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="bloglink real-bloglink"
          to="bridge"
        >
          The Role of Bridges...
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="bloglink real-bloglink"
          to="evm"
        >
          EVM
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="bloglink real-bloglink"
          to="ai-and-blockchain"
        >
         Blockchain & AI
        </NavLink>
      </div>

      <div className="blogsroutes">
        <Routes>
          <Route
            path="react-seo"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <Reactseo />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="substrate-and-polkadot"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <SubstrateAndPolkadot />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="layer-two"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <LayerTwo />
              </React.Suspense>
            }
          ></Route>
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <Blogindex />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="bridge"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <Bridge />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="evm"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <Evm />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="zk-rollup"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <ZkRollup />
              </React.Suspense>
            }
          ></Route>
        
        <Route
            path="ai-and-blockchain"
            element={
              <React.Suspense
                fallback={
                  <div style={{ paddingTop: "10%", paddingLeft: "40%" }}>
                    <Rings></Rings>
                  </div>
                }
              >
                <AiBlockchain />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Blog;
