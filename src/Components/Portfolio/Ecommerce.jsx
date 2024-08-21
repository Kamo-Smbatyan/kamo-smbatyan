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
    </div>
  );
}

export default Ecommerce;
