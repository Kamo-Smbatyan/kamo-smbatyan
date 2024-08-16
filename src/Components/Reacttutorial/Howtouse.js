import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Tutorialinside.css";

function Howtouse() {
  useEffect(() => {
    document.title = "Portfolio | Substrate";
    document.getElementsByTagName("META")[3].content =
      "React is a component based Javascript library for building user interfaces.";

    document.documentElement.scrollTop = 0;
  }, []);

  const navigate = useNavigate();

  function myfun1() {
    navigate("/portfolio/frontend");
  }

  function myfun2() {
    navigate("/portfolio/components-in-react");
  }

  function toDetailPage(domain) {
    navigate(`${domain}`);
  }

  return (
    <div>
        <div className="projects-grp">
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/paralink-network")}
        >
          <img
            src="/assets/paralink.png"
            className="portfolio-fv"
            alt="paralink"
          />
          <div className="project-overview-sub">
            <h2>Paralink Network</h2>
            <p>
              This project contains Substrate based runtime for Paralink
              Network.
            </p>
          </div>
        </div>

        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/chainx")}
        >
          <video className="portfolio-fv" loop autoPlay muted>
            <source src="/assets/chainx.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project-overview-sub">
            <h2>ChainX</h2>
            <p>
              Bitcoin's layer2 smart contract network has already supported WASM
              and EVM, and is supporting MoveVM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howtouse;
