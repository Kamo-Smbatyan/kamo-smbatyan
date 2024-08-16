import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Tutorialinside.css";

function Whatisreact() {
  useEffect(() => {
    document.title = "Portfolio | Frontend";
    document.getElementsByTagName("META")[3].content =
      "This projects showcase my ability to develop frontend";
    document.documentElement.scrollTop = 0;
  }, []);

  const navigate = useNavigate();

  function myfun1() {
    navigate("/portfolio");
  }

  function myfun2() {
    navigate("/portfolio/substrate");
  }
  function toDetailPage(domain) {
    navigate(`${domain}`);
  }
  return (
    <div>
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
            src="/assets/healthcare.png"
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
            src="/assets/zenlink-overview.png"
            className="portfolio-fv"
            alt="zenlink"
          />
          <div className="project-overview-sub">
            <h2>Zenlink Protocol Interface</h2>
            <p>An open source interface for the Zenlink protocol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatisreact;
