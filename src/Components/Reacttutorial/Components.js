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
          onClick={() => toDetailPage("acria-scan-explorer")}
        >
          <img
            src="/assets/acria.png"
            className="portfolio-fv"
            alt="AcriaScan Explorer"
          />
          <div className="project-overview-sub">
            <h2>AcriaScan Explorer</h2>
            <p>
              Real-time multi-chain Explorer for Polkadot, Kusama, Rococo
              networks.
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("wagerr-smart-contract")}
        >
          <img
            src="/assets/wagerr.png"
            className="portfolio-fv"
            alt="AcriaScan Explorer"
          />
          <div className="project-overview-sub">
            <h2>Wagerr Smart Contract</h2>
            <p>
            Wagerr smart contract written in Ink, a Rust-based smart contract language for the Polkadot ecosystem
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Howtouse;
