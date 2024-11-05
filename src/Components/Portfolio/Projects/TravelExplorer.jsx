import React from "react";
import { useEffect } from "react";

function TravelExplorer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
        Travel Explorer
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/travel explorer.webp"
          alt="Elise E-commerce"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a
              className="doc-link"
              href="https://explore-brown-beta.vercel.app/"
            >
              Website
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          About Explore is a single-page landing site designed to provide an
          engaging and informative experience for users interested in traveling
          to Indonesia, Nepal, and Thailand.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="frontend-tag blog-tag">React</span>
          <span className="frontend-tag blog-tag">Next.js</span>
          <span className="frontend-tag blog-tag">Typescript</span>
          <span className="blog-tag">Swiper</span>
          <span className="frontend-tag blog-tag">React-Scroll</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div></div>
        <div>
          <div className="project-image">
            <img
              src="/assets/travel explorer1.webp"
              alt="bicycle store"
              style={{ width: "40vw" }}
            />
                 <img
              src="/assets/travel explorer2.webp"
              alt="bicycle store"
              style={{ width: "40vw" }}
            />
                 <img
              src="/assets/travel explorer3.webp"
              alt="bicycle store"
              style={{ width: "40vw" }}
            />
          </div>
          <h2 className="hover-dot">
           Porject Overview
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Travel Explorer is a meticulously designed single-page landing site
            tailored for travel enthusiasts planning trips to Indonesia, Nepal,
            and Thailand. Utilizing cutting-edge web technologies, the site
            offers a visually rich and interactive experience, combining
            detailed travel information with breathtaking imagery and seamless
            navigation.
          </p>

          <h2 className="hover-dot">
            Technologies Used
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <ul>
            <li>
              <strong>Next.js:</strong> Chosen for its robust server-side
              rendering, Next.js boosts the website’s performance and SEO, while
              enabling dynamic content fetching and hydration strategies to
              optimize user experience across different network conditions.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> This utility-first framework
              supports responsive design with minimal overhead, allowing for
              rapid development of custom designs without sacrificing
              performance. Tailwind’s JIT compilation ensures that only the
              necessary styles are loaded, keeping the site lightweight and
              fast.
            </li>
            <li>
              <strong>React-Scroll:</strong> Enhances the single-page navigation
              model by providing smooth, animated scrolling between sections,
              which enriches user interaction and engagement.
            </li>
            <li>
              <strong>TypeScript:</strong> TypeScript’s static typing adds a
              layer of reliability and maintainability to the project, reducing
              runtime errors and facilitating easier code management and
              refactoring.
            </li>
            <li>
              <strong>Swiper:</strong> Implemented for its responsive and
              touch-friendly sliders that adapt seamlessly to different devices,
              Swiper enriches the visual presentation of the site, allowing
              users to interact with the content intuitively.
            </li>
          </ul>

          <h2 className="hover-dot">
            Routing and Features
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The site’s architecture is structured around react-scroll, which
            facilitates a smooth and logical flow through various informational
            and visual sections. This method not only enhances user experience
            but also contributes to the aesthetic layout of the content.
          </p>
          <ul>
            <li>
              <strong>Header:</strong> Features a dynamic slider that introduces
              the countries with visually striking images and transitions,
              setting the tone for the exploration journey.
            </li>
            <li>
              <strong>General Information:</strong> Provides a compelling
              introduction to each destination, highlighting unique cultural
              aspects and must-visit sites.
            </li>
            <li>
              <strong>Country Facts:</strong> Delivers curated facts and
              essential information, presenting a deeper understanding of each
              location's heritage and environment.
            </li>
            <li>
              <strong>Photo Slider:</strong> Uses advanced imaging techniques to
              display high-quality images that capture the essence of each
              destination, optimized for quick loading without compromising
              visual fidelity.
            </li>
            <li>
              <strong>Event Information:</strong> Detailed listings of upcoming
              events and festivals are dynamically updated, offering users
              timely and actionable information to plan their visits
              accordingly.
            </li>
            <li>
              <strong>Contact Form:</strong> A streamlined, accessible form
              allows for easy communication, fostering user engagement and
              providing a direct line for inquiries and feedback.
            </li>
          </ul>

          <h2 className="hover-dot">
            Getting Started
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>To get a local copy up and running, follow these simple steps:</p>
          <ul>
            <li>
              Clone the repository using{" "}
              <code>git clone https://github.com/your-repo/explore.git</code>.
            </li>
            <li>
              Install all dependencies by running <code>npm install</code> in
              the project directory.
            </li>
            <li>
              Start the development server with <code>npm run dev</code>, and
              navigate to <code>http://localhost:3000</code> to view the
              application.
            </li>
          </ul>

          <h2 className="hover-dot">
            Summary
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Travel Explorer not only serves as a gateway to the vibrant cultures
            of Indonesia, Nepal, and Thailand but also exemplifies the potential
            of modern web technologies to create compelling and engaging digital
            experiences. The application’s thoughtful design and technical
            execution aim to inspire and facilitate travel planning through
            informative content and stunning visuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TravelExplorer;
