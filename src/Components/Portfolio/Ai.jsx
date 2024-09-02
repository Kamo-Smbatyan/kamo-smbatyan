import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Ai() {
  useEffect(() => {
    document.title = "Portfolio | AI";

    document.getElementsByTagName("META")[3].content =
      "These projects showcase my ability in Artificial Intelligence Industry";

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
          onClick={() => toDetailPage("/portfolio/icon-generator")}
        >
          <img
            src="/assets/icon generator.webp"
            className="portfolio-fv"
            alt="icon generator"
          />
          
          <div className="project-overview-sub">
            <h2>Icon-AI</h2>
            <p>
            This is a SaaS app. You can generate any icons with an AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai;
