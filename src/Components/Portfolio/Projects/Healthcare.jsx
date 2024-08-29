import React from "react";
import { useEffect } from "react";

function Healthcare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Healthcare React Example
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/healthcare.webp"
          alt="health care hospital"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="websit" />
            <a
              className="doc-link"
              href="https://healthcaress.netlify.app/home"
            >
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/hospital-website-react"
            >
              Github
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          The Healthcare Hospital website is a modern, responsive web
          application built using{" "}
          <a className="doc-link" href="https://devdocs.io/react/">
            {" "}
            React.js
          </a>
          . It serves as the digital front door for the hospital, offering
          patients and healthcare providers an intuitive platform to manage
          their healthcare needs efficiently. The website is designed to enhance
          the patient experience by providing easy access to essential services,
          information, and tools.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="frontend-tag blog-tag">React.JS</span>
          <span className="frontend-tag blog-tag">API</span>
          <span className="frontend-tag blog-tag">MUI</span>
          <span className="frontend-tag blog-tag">Responsive Design</span>
        </div>
      </div>

      <div className="project-detail-description">
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
            The Health Care Hospital website is a comprehensive digital platform
            designed to enhance patient interaction and streamline the
            management of healthcare services. Built using React.js, the website
            serves as a modern interface that connects patients, healthcare
            providers, and administrative staff, offering a range of features
            aimed at improving accessibility, convenience, and efficiency in
            healthcare delivery.
          </p>
          <p>
            The project focuses on providing a user-friendly experience, with a
            responsive design that adapts seamlessly to different devices,
            ensuring that users can access the site from desktops, tablets, and
            smartphones. The integration with Firebase provides secure
            authentication and hosting, allowing users to register, log in, and
            manage their profiles safely.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Features and Services
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The website includes a responsive navbar for easy navigation across
            various sections of the site, an integrated user authentication
            system that supports secure login and registration, and an
            advertisement carousel that displays rotating promotional content.
            The services list provides detailed descriptions and images of the
            healthcare services offered, while the doctors directory allows
            patients to browse and book appointments with healthcare
            professionals. Additionally, there is an appointment page for
            scheduling and managing appointments, and a responsive footer that
            includes essential links and contact information. The website is
            integrated with Firebase for both authentication and hosting.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Technologies Used
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The Health Care Hospital website is built using modern technologies
            to ensure a responsive and efficient user experience. React.js is
            used for building the dynamic user interface, while{" "}
            <a
              className="doc-link"
              href="https://www.npmjs.com/package/@mui/docs"
            >
              {" "}
              Material UI
            </a>
            provides consistent design and ready-made components. React Router
            facilitates seamless navigation between pages, and Firebase is used
            for both authentication and hosting. Emotion Core is employed for
            styling components with CSS-in-JS, and date-fns handles and formats
            dates. The project also includes React Google Button for
            Google-based authentication.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Getting Started
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Setting up the Health Care Hospital website locally is
            straightforward and can be done by following these steps:
          </p>
          <ol>
            <li>
              <strong>Clone the Repository:</strong> Start by cloning the
              project repository from GitHub:
              <pre>
                <code>
                  git clone https://github.com/akshybhosale/health_cares
                </code>
              </pre>
            </li>
            <li>
              <strong>Navigate to the Project Directory:</strong> Move into the
              project's root directory:
              <pre>
                <code>cd health_cares</code>
              </pre>
            </li>
            <li>
              <strong>Install Dependencies:</strong> Install the necessary npm
              packages and Material UI components:
              <pre>
                <code>npm install</code>
              </pre>
            </li>
            <li>
              <strong>Start the Development Server:</strong> Launch the app in
              development mode:
              <pre>
                <code>npm start</code>
              </pre>
              This will open the application in your default web browser at{" "}
              http://localhost:3000
            </li>
            <li>
              <strong>Build for Production:</strong> To prepare the app for
              deployment, create a production build:
              <pre>
                <code>npm run build</code>
              </pre>
              This command bundles React in production mode and optimizes the
              build for best performance. The output is saved in the{" "}
              <code>build</code> folder, ready for deployment.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="hover-dot">
            Deployment
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Deploying the Health Care Hospital website is straightforward,
            especially using platforms like Netlify. Continuous Integration and
            Continuous Deployment (CI/CD) can be set up directly from the GitHub
            repository, ensuring that any changes pushed to the repository are
            automatically deployed to the live site.
          </p>
          <p>
            <strong>Netlify Deployment:</strong> <br /> For detailed deployment
            logs and information, you can visit the Netlify deploy page{" "}
            <a
              className="doc-link"
              href="https://app.netlify.com/sites/healthcaress/deploys/6597fa8603256b000891f758"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Healthcare;
