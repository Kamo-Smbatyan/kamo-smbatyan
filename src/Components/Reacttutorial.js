import { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Reacttutorialindex from "./Reacttutorial/Reacttutorialindex";
import Whatisreact from "./Reacttutorial/Whatisreact";
import Components from "./Reacttutorial/Components";
import State from "./Reacttutorial/State";
import Props from "./Reacttutorial/Props";
import Conditionalrendering from "./Reacttutorial/Conditionalrendering";
import ParalinkNetwork from "./Reacttutorial/ParalinkNetwork";
import ChainX from "./Reacttutorial/ChainX";
import "./Components.css";
import Howtouse from "./Reacttutorial/Howtouse";
import Componentlifecycle from "./Reacttutorial/Componentlifecycle";
import Reactrouting from "./Reacttutorial/Reactrouting";
import Subsocial from "./Reacttutorial/Subsocial";
import Healthcare from "./Reacttutorial/Healthcare";
import Zenlink from "./Reacttutorial/Zenlink";
import Acria from "./Reacttutorial/Acria";
import Wagerr from "./Reacttutorial/wagerr";

function Reacttutorial() {
  const [state, setstate] = useState("block");

  useEffect(() => {
    document.title = "Hylcore | Portfolio";
    document.getElementsByTagName("META")[3].content =
      "This page showcase my working projects";

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
      <div style={{ display: state }} className="rtsidebar">
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to=""
        >
          All
        </NavLink>
        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to="frontend"
        >
          Frontend
        </NavLink>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to="substrate"
        >
          Substrate
        </NavLink>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to="polkadot"
        >
          Polkadot
        </NavLink>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to="state-in-react"
        >
          State in React
        </NavLink>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to="props-in-react"
        >
          Props in React
        </NavLink>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to="component-life-cycle"
        >
          Lifecycle of Component
        </NavLink>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to="conditional-rendering"
        >
          Conditional Rendering
        </NavLink>

        <NavLink
          onClick={myfun1}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#f6f6f6" : "",
            color: isActive ? "#222222" : "#2c3e50",
            fontWeight: isActive ? "600" : "400",
            borderRight: isActive ? "4px solid #24cc85" : "#24cc85",
          })}
          className="rtlinks"
          to="react-routing"
        >
          React Routing
        </NavLink>
      </div>

      <div className="rtroutes">
        <Routes>
          <Route index element={<Reacttutorialindex />}></Route>
          <Route path="frontend" element={<Whatisreact />}></Route>
          <Route path="frontend/subsocial" element={<Subsocial />}></Route>
          <Route
            path="frontend/health-care-hospital"
            element={<Healthcare />}
          ></Route>
          <Route path="frontend/zenlink" element={<Zenlink />}></Route>
          <Route path="substrate" element={<Howtouse />}></Route>
          <Route
            path="substrate/paralink-network"
            element={<ParalinkNetwork />}
          ></Route>
          <Route path="substrate/chainx" element={<ChainX />}></Route>

          <Route path="polkadot" element={<Components />}></Route>
          <Route
            path="polkadot/acria-scan-explorer"
            element={<Acria />}
          ></Route>
          <Route
            path="polkadot/wagerr-smart-contract"
            element={<Wagerr />}
          ></Route>
          <Route path="state-in-react" element={<State />}></Route>
          <Route path="props-in-react" element={<Props />}></Route>
          <Route
            path="component-life-cycle"
            element={<Componentlifecycle />}
          ></Route>
          <Route
            path="conditional-rendering"
            element={<Conditionalrendering />}
          ></Route>
          <Route path="react-routing" element={<Reactrouting />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Reacttutorial;
