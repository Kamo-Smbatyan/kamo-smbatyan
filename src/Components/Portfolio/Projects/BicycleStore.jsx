import React from "react";
import { useEffect } from "react";

function BicycleStore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Rohit Bikes
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/bicycle.webp"
          alt="rohit bikes"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a
              className="doc-link"
              href="https://bicycle-store-landing-page.vercel.app/"
            >
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/bicycle-store"
            >
              Github
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          The Bicycle E-commerce platform is a modern online store that offers a
          seamless shopping experience for cycling enthusiasts.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="blog-tag">React.JS</span>
          <span className="blog-tag">Next.JS</span>
          <span className="blog-tag">E-commerce</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div></div>
        <div>
          <h2 className="hover-dot">
            Project Overview
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The Bicycle E-commerce platform is a modern online store that offers
            a seamless shopping experience for cycling enthusiasts. Developed
            with Next.js, this project leverages the power of React and
            Server-Side Rendering (SSR) to deliver high performance and fast
            load times, ensuring a smooth user journey from browsing products to
            checkout.
          </p>
          <h2 className="hover-dot">
            Features
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <ul>
            <li>
              Dynamic Product Listings: Utilizes Next.js pages to dynamically
              list bicycles and accessories based on database entries, ensuring
              up-to-date information and availability.
            </li>
            <li>
              API Integration: Features a custom API built with Next.js, located
              at <code> http://localhost:3000/api/hello </code>, which handles
              all backend interactions including user authentication, product
              management, and order processing.
            </li>
            <li>
              Live Editing: Supports real-time updates on the website as changes
              are made in the codebase, thanks to Next.js’s hot reloading
              feature.
            </li>
          </ul>
          <h2 className="hover-dot">
            Challenges and Solutions
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <div className="project-image">
            <img
              src="/assets/bicycle1.webp"
              alt="bicycle store"
              style={{ width: "40vw" }}
            />
              <img
              src="/assets/bicycle2.webp"
              alt="bicycle store"
              style={{ width: "40vw" }}
            />
          </div>
          <ul>
            <li>
              SEO Optimization: Faced challenges in optimizing the platform for
              search engines due to dynamic content rendering. Implemented SSR
              provided by Next.js to render pages on the server, enhancing
              crawlability and indexation by search engines.
            </li>
            <li>
              Scalability: Ensured the platform could handle increasing loads
              and traffic by utilizing Vercel’s deployment and scaling
              solutions, making use of its global CDN and serverless functions
              for optimal performance.
            </li>
          </ul>
          <h2 className="hover-dot">
            Technical Stack
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <ul>
            <li>
              Frontend: Developed using Next.js and React, styled with CSS
              Modules for component-specific styling.
            </li>

            <li>
              Backend: API routes are handled through Next.js, interfacing with
              a MongoDB database for data persistence.
            </li>
            <li>
              Deployment: Deployed on Vercel, utilizing its seamless integration
              with GitHub for continuous deployment and version control.
            </li>
          </ul>
          <h2 className="hover-dot">
            Contributions
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Led the development of the frontend, focusing on user experience
            design and performance. Designed and implemented API endpoints for
            product management and order processing, ensuring secure and
            efficient backend operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BicycleStore;
