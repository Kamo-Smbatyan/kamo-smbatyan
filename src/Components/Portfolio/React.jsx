import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function React() {
  useEffect(() => {
    document.title = "Portfolio | React";

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
          onClick={() => toDetailPage("/portfolio/kicks-ecommerce")}
        >
          <img
            src="/assets/kick ecommerce.webp"
            className="portfolio-fv"
            alt="Kicks E-commerce"
          />
          <div className="project-overview-sub">
            <h2>Kicks E-commerce</h2>
            <p>
              An open-source e-commerce app built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/signs-for-trucks")}
        >
          <img
            src="/assets/signfortruck.webp"
            className="portfolio-fv"
            alt="signs for truck"
          />
          <div className="project-overview-sub">
            <h2>Signs For Truck</h2>
            <p>
              An online store to buy custom vinyl designs for trucks. This repo
              contains the fronted app developed using Next Js for a better
              React js experience
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/travel-explorer")}
        >
          <img
            src="/assets/travel explorer.webp"
            className="portfolio-fv"
            alt="explorer Indonesia"
          />
          <div className="project-overview-sub">
            <h2>Travel Explorer</h2>
            <p>
              A single-page landing site designed to provide an engaging and
              informative experience for users interested in traveling to
              Indonesia, Nepal, and Thailand.
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/elise-ecommerce")}
        >
          <img
            src="/assets/elise2.webp"
            className="portfolio-fv"
            alt="Elise ecommerce"
          />
          <div className="project-overview-sub">
            <h2>Elise Ecommerce</h2>
            <p>
              About Elise is an e-commerce website built with Next.js and Chakra
              UI.
            </p>
          </div>
        </div>
        <div
          className="projects-overview"
          onClick={() => toDetailPage("/portfolio/health-care-hospital")}
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
          onClick={() => toDetailPage("/portfolio/bicycle-store")}
        >
          <img
            src="/assets/bicycle.webp"
            className="portfolio-fv"
            alt="layer swap atomice bridge"
          />
          <div className="project-overview-sub">
            <h2>Rohit Bikes</h2>
            <p>
            The Bicycle E-commerce platform is a modern online store that offers a seamless shopping experience for cycling enthusiasts. 
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default React;
