import React from "react";
import { useEffect } from "react";

function IconGenerator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Icon-AI
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/icon generator.webp"
          alt="AI Icon Generator"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a
              className="doc-link"
              href="https://ai-icon-generator.vercel.app/"
            >
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/AI-icon-generator"
            >
              Github
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          This is a SaaS app. You can generate any icons with an AI
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="frontend-tag blog-tag">React.JS</span>
          <span className="frontend-tag blog-tag">Next.JS</span>
          <span className="blog-tag">Prisma</span>
          <span className="frontend-tag blog-tag">E-commerce</span>
          <span className="blog-tag">tRPC</span>
          <span className="frontend-tag blog-tag">Tailwind CSS</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div></div>
        <div>
          <div className="project-image">   
              <img src="/assets/icon generator1.webp" alt="ai icon generator"   style={{ width: "40vw" }}  />
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
            The AI Icon Generator is an advanced web application designed to
            simplify the creation of icons using AI technology. Built with the
            T3 Stack, this project leverages the modern capabilities of Next.js,
            NextAuth.js for authentication, Prisma as an ORM, tRPC for type-safe
            API routes, and Tailwind CSS for styling. The app provides a robust,
            scalable foundation for users to generate custom icons effortlessly.
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
              <strong>Next.js:</strong> Provides the SSR and static generation
              features, enhancing SEO and improving load times.
            </li>
            <li>
              <strong>NextAuth.js:</strong> Manages secure authentication flows,
              integrating seamlessly with various social media login systems.
            </li>
            <li>
              <strong>Prisma:</strong> Serves as the ORM for handling database
              operations, ensuring smooth data management and migration
              strategies.
            </li>
            <li>
              <strong>tRPC:</strong> Eliminates the need for traditional REST or
              GraphQL APIs by allowing end-to-end typesafe APIs directly over
              RPC.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Facilitates rapid UI development
              with its utility-first approach, ensuring the app remains
              responsive and visually appealing.
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
              <strong>AI-Driven Icon Generation:</strong> Users can input
              parameters and have the AI generate unique, custom icons based on
              their specifications.
            </li>
            <li>
              <strong>User Authentication:</strong> Secure login and
              registration system using NextAuth.js, supporting multiple OAuth
              providers.
            </li>
            <li>
              <strong>Interactive UI:</strong> A clean and intuitive user
              interface designed with Tailwind CSS that provides a seamless user
              experience.
            </li>
          </ul>

          <h2 className="hover-dot">
            Development Best Practices
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The AI Icon Generator follows rigorous development protocols to
            ensure the codebase is maintainable and scalable. This includes
            thorough documentation, consistent coding standards, and a strong
            emphasis on testing and security.
          </p>

          <h2 className="hover-dot">
            Community and Contribution
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            As an open-source project, the AI Icon Generator welcomes
            contributions from developers worldwide. Whether it's improving
            features, fixing bugs, or enhancing documentation, all forms of
            collaboration are appreciated.
          </p>

          <h2 className="hover-dot">
            Deployment Options
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The application can be deployed on various platforms such as Vercel,
            Netlify, and Docker, offering flexible deployment options to suit
            different hosting preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IconGenerator;
