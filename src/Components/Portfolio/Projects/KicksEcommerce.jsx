import React from "react";
import { useEffect } from "react";

function KicksEcommerce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Kicks E-commerce
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/kick ecommerce.webp"
          alt="Kicks E-commerce"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://ecommerce-kicks.vercel.app/">
              Website
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
        An open-source e-commerce app built with Next.js and Tailwind CSS.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="frontend-tag blog-tag">React.JS</span>
          <span className="frontend-tag blog-tag">Next.JS</span>
          <span className="frontend-tag blog-tag">E-commerce</span>
          <span className="frontend-tag blog-tag">Tailwind CSS</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div></div>
        <div>
          <div className="project-image">
            <img
              src="/assets/kick ecommerce1.webp"
              alt="elise shop"
              style={{ width: "40vw" }}
            />
            <img
              src="/assets/kick ecommerce2.webp"
              alt="elise shop"
              style={{ width: "40vw" }}
            />
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
            Kicks is an innovative, open-source e-commerce platform tailored for
            seamless online shopping experiences. Built using the powerful
            combination of Next.js and Tailwind CSS, it provides a robust,
            scalable solution for anyone looking to launch or expand their
            online retail business. Kicks is designed to be fully customizable,
            accommodating a wide range of products and user preferences.
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
              <strong>Next.js:</strong> Employs server-side rendering for
              enhanced SEO and faster page loads, making Kicks incredibly
              efficient and user-friendly.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Utilizes this utility-first CSS
              framework for rapid UI development, ensuring that Kicks maintains
              a modern and responsive design.
            </li>
          </ul>

          <h2 className="hover-dot">
            Core Features
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <ul>
            <li>
              <strong>Product Pages:</strong> Each product has its own detailed
              page with high-quality images, descriptions, and customizable
              options to enhance the shopping experience.
            </li>
            <li>
              <strong>Shopping Cart:</strong> A dynamic shopping cart that
              updates in real time, providing users with a summary of their
              potential purchases and allowing for adjustments before checkout.
            </li>
            <li>
              <strong>Checkout Functionality:</strong> A streamlined checkout
              process that includes secure payment gateways, ensuring a smooth
              transaction from start to finish.
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
            The development of Kicks follows strict best practices to ensure the
            code is not only bug-free but also easy to maintain. This includes
            thorough documentation, use of modern coding standards, and
            comprehensive testing to guarantee stability and performance.
          </p>

          <h2 className="hover-dot">
            Community and Contributions
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            As an open-source project, Kicks encourages community contributions.
            Whether it's refining features, enhancing the design, or fixing
            bugs, developers are welcome to fork the repository, contribute to
            the codebase, and share their improvements. Don't forget to give the
            repository a star if you find it useful!
          </p>

          <h2 className="hover-dot">
            Future Enhancements
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Looking ahead, Kicks plans to integrate AI-driven recommendations,
            multilingual support, and an expanded payment system that includes
            cryptocurrencies to further enhance the user experience and
            accessibility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KicksEcommerce;
