import React from "react";
import { useEffect } from "react";

function SignsForTrucks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Signs For Trucks
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/signfortruck.webp"
          alt="signs for trucks"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://www.signsfortrucks.com/">
              Website
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          Signs for Trucks is an online store to buy custom vinyl designs for
          trucks. This repo contains the fronted app developed using Next Js for
          a better React js experience
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="frontend-tag blog-tag">React.JS</span>
          <span className="frontend-tag blog-tag">Next.JS</span>
          <span className="frontend-tag blog-tag">E-commerce</span>
          <span className="blog-tag">Docker</span>
          <span className="frontend-tag blog-tag">Frontend</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div></div>
        <div>
        <div className="project-image">   
              <img src="/assets/signfortruck1.webp" alt="signs for trucks"   style={{ width: "40vw" }}  />
          </div>
          <h2 className="hover-dot">
            Project Overview
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Signs for Trucks offers a unique platform for truck owners to
            customize their vehicles with vinyl letterings and designs. It
            simplifies the design process, allowing users to either upload their
            custom designs or modify pre-existing templates. This section
            highlights the core features, technological stack, and innovative
            solutions to encountered challenges.
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
              <strong>React:</strong> Utilized for its efficient rendering
              capabilities and vast ecosystem, React forms the backbone of the
              client-side application, facilitating a dynamic and responsive
              user interface.
            </li>
            <li>
              <strong>Next.js:</strong> Chosen for its server-side rendering and
              static generation features, Next.js enhances SEO and optimizes
              performance, crucial for the content-heavy product catalog.
            </li>
            <li>
              <strong>Django:</strong> Handles all backend operations including
              user authentication, data processing, and API management, ensuring
              robust security and scalability.
            </li>
            <li>
              <strong>Docker:</strong> Used to containerize the application,
              Docker simplifies deployment and maintains consistency across
              development, staging, and production environments.
            </li>
          </ul>

          <h2 className="hover-dot">
            Key Features
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <ul>
            <li>
              <strong>Customizable Design Tool:</strong> A feature-rich design
              editor allows users to upload and manipulate images, add text, and
              customize designs directly on the website. This tool uses canvas
              technology to give users real-time feedback as they create their
              custom vinyls.
            </li>
            <li>
              <strong>Product Catalog:</strong> The platform dynamically
              generates pages for each product category using server-side
              rendering, ensuring fast load times and up-to-date product
              information.
            </li>
            <li>
              <strong>Secure Checkout System:</strong> Integrates with Stripe
              for payment processing, implementing the latest security protocols
              to protect user transactions and personal data.
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
          <p>
            The development of Signs for Trucks involved several technical and
            design challenges:
          </p>
          <ul>
            <li>
              <strong>Performance Optimization:</strong> The initial load time
              was critical due to the heavy use of high-resolution images and
              custom designs. Leveraging Next.js's Image Optimization and static
              generation features significantly reduced the load times,
              enhancing user experience.
            </li>
            <li>
              <strong>Custom Design Complexity:</strong> Developing an intuitive
              yet powerful custom design tool was challenging. The solution
              involved using a combination of React for the UI and Fabric.js for
              the canvas operations, providing a seamless design experience.
            </li>
            <li>
              <strong>Security Concerns:</strong> Ensuring secure transactions
              and data privacy was paramount. Django’s built-in security
              features along with custom middleware and Stripe's secure payment
              APIs helped address these concerns effectively.
            </li>
          </ul>

          <h2 className="hover-dot">
            Future Plans
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Moving forward, the platform plans to introduce AI-driven design
            suggestions, a mobile app for on-the-go design modifications, and
            expanded payment options to include cryptocurrencies. These
            enhancements aim to further streamline the user experience and
            broaden market reach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignsForTrucks;
