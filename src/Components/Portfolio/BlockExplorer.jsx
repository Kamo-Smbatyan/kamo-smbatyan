import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function BlockExplorer() {
  useEffect(() => {
    document.title = "Portfolio | Blockchain";
    document.getElementsByTagName("META")[3].content =
      "On this page, you will learn more about the component's lifecycle and methods.";

    document.documentElement.scrollTop = 0;
  }, []);

  const navigate = useNavigate();

  function toDetailPage(domain) {
    navigate(`${domain}`);
  }
  return (
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
    </div>
  );
}

export default BlockExplorer;
