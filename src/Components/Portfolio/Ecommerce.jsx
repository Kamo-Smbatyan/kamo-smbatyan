import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStyle.css";

function Ecommerce() {
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
    </div>
  );
}

export default Ecommerce;
