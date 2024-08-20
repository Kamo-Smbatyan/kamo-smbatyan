import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Blockchain() {
  useEffect(() => {
    document.title = "Portfolio | Block Explorer";
    document.getElementsByTagName("META")[3].content =
      "React is a component based Javascript library for building user interfaces.";

    document.documentElement.scrollTop = 0;
  }, []);

  const navigate = useNavigate();

  function toDetailPage(domain) {
    navigate(`${domain}`);
  }
  return (
    <div>
      <div className="projects-grp">
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/acria-scan-explorer")}
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
          onClick={() => toDetailPage("/portfolio/drips-network-contract")}
        >
          <video className="portfolio-fv" loop autoPlay muted>
            <source src="/assets/drips.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project-overview-sub">
            <h2>Drips Network Contract</h2>
            <p>💧 Drips Protocol Smart Contracts</p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/gemforge-command-line-tool")}
        >
          <img
            src="/assets/gemforge.webp"
            className="portfolio-fv"
            alt="Gemforge command line tool"
          />
          <div className="project-overview-sub">
            <h2>Gemforge Command Line Tool</h2>
            <p>
            Command-line tool for building, deploying and upgrading Diamond Standard contracts on EVM chains.
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/erc-20-contract")}
        >
          <img
            src="/assets/erc20contract.webp"
            className="portfolio-fv"
            alt="ERC-20 Contract"
          />
          <div className="project-overview-sub">
            <h2>ERC-20 Contract</h2>
            <p>
            High level implementation of the ERC-20 tokens contract
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blockchain;
