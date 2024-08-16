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
  const [state, setstate] = useState("flex");

  useEffect(() => {
    document.title = "Hylcore | Portfolio";
    document.getElementsByTagName("META")[3].content =
      "This page showcase my working projects";

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setstate("none");
      } else {
        setstate("flex");
      }
    });

    if (window.innerWidth <= 600) {
      setstate("none");
    }
  }, []);

  function myfun() {
    if (state === "flex") {
      setstate("none");
    } else {
      setstate("flex");
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
      <div style={{ display: state }} className="portfolio-sidebar">
            <NavLink onClick={myfun1} className="portfolio-tag" to="frontend">
          Frontend
          <span>3</span>
        </NavLink>
        <NavLink onClick={myfun1} className="portfolio-tag" to="blockchain">
          Blockchain
          <span>1</span>
        </NavLink>
        <NavLink onClick={myfun1} className="portfolio-tag" to="substrate">
          Substrate
          <span>2</span>
        </NavLink>

        <NavLink onClick={myfun1} className="portfolio-tag" to="polkadot">
          Polkadot
          <span>2</span>
        </NavLink>

        <NavLink onClick={myfun1} className="portfolio-tag" to="react">
          React.JS
          <span>2</span>
        </NavLink>

        <NavLink onClick={myfun1} className="portfolio-tag" to="block-explorer">
          Block Explorer
          <span>1</span>
        </NavLink>
      </div>
      <div className="rtroutes">
        <Routes>
          <Route index element={<Reacttutorialindex />}></Route>
          <Route path="frontend" element={<Whatisreact />}></Route>
          <Route path="subsocial" element={<Subsocial />}></Route>
          <Route path="health-care-hospital" element={<Healthcare />}></Route>
          <Route path="zenlink" element={<Zenlink />}></Route>
          <Route path="substrate" element={<Howtouse />}></Route>
          <Route path="paralink-network" element={<ParalinkNetwork />}></Route>
          <Route path="chainx" element={<ChainX />}></Route>

          <Route path="polkadot" element={<Components />}></Route>
          <Route path="acria-scan-explorer" element={<Acria />}></Route>
          <Route path="wagerr-smart-contract" element={<Wagerr />}></Route>
          <Route path="react" element={<State />}></Route>
          <Route path="block-explorer" element={<Props />}></Route>
          <Route path="blockchain" element={<Componentlifecycle />}></Route>
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
