import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Reacttutorialindex() {
  useEffect(() => {
    document.title = "Hylcore | Portfolio";
    document.getElementsByTagName("META")[3].content = "This is my Protfolio";
    document.documentElement.scrollTop = 0;
  }, []);

  const navigate = useNavigate();


  function toDetailPage(domain) {
    navigate(`${domain}`);
  }
  return (
    <div className="portfolio-main">
      <div className="projects-grp">
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/subsocial")}
        >
          <video className="portfolio-fv" loop autoPlay muted>
            <source src="/assets/subsocial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project-overview-sub">
            <h2>Subsocial</h2>
            <p>
              The project is a simplified implementation of Subsocial Web App
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() =>
            toDetailPage("/portfolio/health-care-hospital")
          }
        >
          <img
            src="/assets/healthcare.webp"
            className="portfolio-fv"
            alt="health care hospital"
          />
          <div className="project-overview-sub">
            <h2>Health Care Hospital</h2>
            <p>
              This project is based on a Healthcare hospitalsservice in this
              project and the technology is used here is react js.
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/zenlink")}
        >
          <img
            src="/assets/zenlink-overview.webp"
            className="portfolio-fv"
            alt="zenlink"
          />
          <div className="project-overview-sub">
            <h2>Zenlink Protocol Interface</h2>
            <p>An open source interface for the Zenlink protocol</p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("acria-scan-explorer")}
        >
          <img
            src="/assets/acria.webp"
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
            src="/assets/wagerr.webp"
            className="portfolio-fv"
            alt="AcriaScan Explorer"
          />
          <div className="project-overview-sub">
            <h2>Wagerr Smart Contract</h2>
            <p>
              Wagerr smart contract written in Ink, a Rust-based smart contract
              language for the Polkadot ecosystem
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("paralink-network")}
        >
          <img
            src="/assets/paralink.webp"
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
          onClick={() => toDetailPage("chainx")}
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
   
      <div></div>
    </div>
  );
}

export default Reacttutorialindex;
