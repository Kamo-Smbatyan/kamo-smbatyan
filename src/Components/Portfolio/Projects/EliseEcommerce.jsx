import React from "react";
import { useEffect } from "react";

function EliseEcommerce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Elise E-commerce Website
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/elise2.webp"
          alt="Elise E-commerce"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
        <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://onurs-ecommerce-site.netlify.app/">
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/elise-ecommerce"
            >
              Github
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          Elise is a cutting-edge e-commerce platform built with React, Next.js,
          and ChakraUI. Currently under construction, Elise aims to provide a
          modern, user-friendly shopping experience, with a focus on clean
          design, intuitive navigation, and secure, efficient payment
          processing. Stay tuned as we continue to develop and enhance the
          platform!
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="frontend-tag blog-tag">React</span>
          <span className="frontend-tag blog-tag">Next.js</span>
          <span className="blog-tag">ChakraUI</span>
          <span className="frontend-tag blog-tag">E-commerce</span>
          <span className="blog-tag">Web Development</span>
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
            Elise is more than just an e-commerce site; it's a complete shopping
            experience designed to be fast, secure, and easy to use. The
            platform is being built with the latest web technologies, ensuring
            that it not only looks great but also performs exceptionally well on
            all devices.
          </p>
          <p>
            With a focus on user experience, Elise will feature a clean and
            modern interface, making it simple for users to browse, search, and
            purchase products. From the moment they land on the homepage, to the
            time they check out, customers will enjoy a seamless and satisfying
            shopping journey.
          </p>

          <h2 className="hover-dot">
            Technologies Used
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>The development of Elise leverages the following technologies:</p>
          <ul>
            <li>
              <strong>React:</strong> The core library for building the user
              interface, ensuring a dynamic and responsive experience.
            </li>
            <li>
              <strong>Next.js:</strong> Used for server-side rendering, routing,
              and optimized performance, making the site fast and scalable.
            </li>
            <li>
              <strong>ChakraUI:</strong> A simple, modular, and accessible
              component library that helps in creating a consistent and visually
              appealing design across the platform.
            </li>
            <li>
              <strong>JavaScript/TypeScript:</strong> For robust and
              maintainable code, with TypeScript adding type safety and
              improving development efficiency.
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
              <strong>Homepage:</strong> A welcoming landing page with featured
              products, special offers, and easy navigation.
              <div className="project-image">
                <img src="/assets/elise1.webp" alt="elise shop" style={{width: "40vw"}}
                />
              </div>
            </li>
            <li>
              <strong>Shop Page:</strong> A dedicated shopping page where users
              can browse products by category, filter options, and search for
              specific items.
              <div className="project-image">
                <img src="/assets/elise2.webp" alt="elise shop" style={{width: "40vw"}} />
              </div>
            </li>
            <li>
              <strong>Cart Page:</strong> A user-friendly cart page that
              summarizes selected items, calculates totals, and offers a
              streamlined checkout process.
              <div className="project-image">
                <img src="/assets/elise3.webp" alt="elise shop" style={{width: "40vw"}} />
              </div>
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
            Developing a modern e-commerce platform like Elise involves several
            challenges, from ensuring high performance and security to
            maintaining a consistent user experience across various devices.
          </p>
          <ul>
            <li>
              <strong>Performance Optimization:</strong> To ensure fast load
              times and smooth interactions, Next.js is used for server-side
              rendering and static site generation, optimizing the site's
              performance.
            </li>
            <li>
              <strong>Responsive Design:</strong> ChakraUI provides a set of
              responsive components that adapt to different screen sizes,
              ensuring that Elise looks great on both mobile and desktop
              devices.
            </li>
            <li>
              <strong>Security:</strong> Implementing secure payment gateways
              and protecting user data is a top priority. Best practices in web
              security are followed to safeguard sensitive information.
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
            As development progresses, Elise will continue to evolve with new
            features and improvements. Future plans include:
          </p>
          <ul>
            <li>Integration with multiple payment gateways</li>
            <li>Advanced search and filtering options</li>
            <li>User accounts with order tracking</li>
            <li>Product reviews and ratings</li>
            <li>AI-powered product recommendations</li>
          </ul>

          <h2 className="hover-dot">
            Conclusion
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Elise represents a significant step forward in e-commerce
            development, combining cutting-edge technology with a user-centric
            design. As the project moves closer to completion, it promises to
            deliver a shopping experience that is both enjoyable and efficient
            for users. Stay tuned for more updates as Elise continues to take
            shape!
          </p>
        </div>
      </div>
    </div>
  );
}

export default EliseEcommerce;
