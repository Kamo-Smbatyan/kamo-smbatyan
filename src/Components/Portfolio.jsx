import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// portfolio first index
import Index from "./Portfolio/Index";

// portfolio category
import Frontend from "./Portfolio/Frontend";
import Blockchain from "./Portfolio/Blockchain";
import Substrate from "./Portfolio/Substrate";
import Polkadot from "./Portfolio/Polkadot";
import React from "./Portfolio/React";
import BlockExplorer from "./Portfolio/BlockExplorer";

// portfolio projects
import ParalinkNetwork from "./Portfolio/Projects/ParalinkNetwork";
import ChainX from "./Portfolio/Projects/ChainX";
import Subsocial from "./Portfolio/Projects/Subsocial";
import Healthcare from "./Portfolio/Projects/Healthcare";
import Zenlink from "./Portfolio/Projects/Zenlink";
import Acria from "./Portfolio/Projects/Acria";
import Wagerr from "./Portfolio/Projects/wagerr";
import DripsContract from "./Portfolio/Projects/DripsContract";
import GemforgeTool from "./Portfolio/Projects/GemforgeTool";
import ErcContract from "./Portfolio/Projects/ErcContract";
import EliseEcommerce from "./Portfolio/Projects/EliseEcommerce";
import LayerSwap from "./Portfolio/Projects/LayerSwap";

// import css file
import "./Components.css";

function Portfolio() {
  const [state, setstate] = useState("flex");
  // State to manage the active link
  const [activeLink, setActiveLink] = useState('');

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

  const handleNavLinkClick = (to) => {
    if (window.innerWidth <= 600) {
      setstate("none");
    }
    setActiveLink(to);
  };

  return (
    <div>
      <div className="mobileresponsive">
        <button id="responsive" onClick={myfun}>
          Click to open Menu
        </button>
      </div>
      <div style={{ display: state }} className="portfolio-sidebar">
      <NavLink
        onClick={() => handleNavLinkClick('frontend')}
        className={activeLink === 'frontend' ? 'portfolio-tag gradient-pan' : 'portfolio-tag'}
        to="frontend"
      >
        Frontend
        <span>3</span>
      </NavLink>

      <NavLink
        onClick={() => handleNavLinkClick('blockchain')}
        className={activeLink === 'blockchain' ? 'portfolio-tag gradient-pan' : 'portfolio-tag'}
        to="blockchain"
      >
        Blockchain
        <span>4</span>
      </NavLink>

      <NavLink
        onClick={() => handleNavLinkClick('substrate')}
        className={activeLink === 'substrate' ? 'portfolio-tag gradient-pan' : 'portfolio-tag'}
        to="substrate"
      >
        Substrate
        <span>2</span>
      </NavLink>

    
      <NavLink
        onClick={() => handleNavLinkClick('polkadot')}
        className={activeLink === 'polkadot' ? 'portfolio-tag gradient-pan' : 'portfolio-tag'}
        to="polkadot"
      >
        Polkadot
        <span>2</span>
      </NavLink>

   
      <NavLink
        onClick={() => handleNavLinkClick('react')}
        className={activeLink === 'react' ? 'portfolio-tag gradient-pan' : 'portfolio-tag'}
        to="react"
      >
        React.JS
        <span>3</span>
      </NavLink>

      <NavLink
        onClick={() => handleNavLinkClick('block-explorer')}
        className={activeLink === 'block-explorer' ? 'portfolio-tag gradient-pan' : 'portfolio-tag'}
        to="block-explorer"
      >
        Block Explorer
        <span>1</span>
      </NavLink>
      </div>
      <div className="rtroutes">
        <Routes>
          {/* portfolio first index */}
          <Route index element={<Index />}></Route>

          {/* portfolio category */}
          <Route path="frontend" element={<Frontend />}></Route>
          <Route path="blockchain" element={<Blockchain />}></Route>
          <Route path="substrate" element={<Substrate />}></Route>
          <Route path="polkadot" element={<Polkadot />}></Route>
          <Route path="react" element={<React />}></Route>
          <Route path="block-explorer" element={<BlockExplorer />}></Route>

          {/* portfolio projects */}
          <Route path="health-care-hospital" element={<Healthcare />}></Route>
          <Route path="zenlink" element={<Zenlink />}></Route>
          <Route path="paralink-network" element={<ParalinkNetwork />}></Route>
          <Route path="chainx" element={<ChainX />}></Route>
          <Route path="acria-scan-explorer" element={<Acria />}></Route>
          <Route path="subsocial" element={<Subsocial />}></Route>
          <Route path="wagerr-smart-contract" element={<Wagerr />}></Route>
          <Route path="drips-network-contract" element={<DripsContract />}></Route>
          <Route path="gemforge-command-line-tool" element={<GemforgeTool />}></Route>
          <Route path="erc-20-contract" element={<ErcContract />}></Route>
          <Route path="elise-ecommerce" element={<EliseEcommerce />}></Route>
          <Route path="layer-swap" element={<LayerSwap />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Portfolio;
