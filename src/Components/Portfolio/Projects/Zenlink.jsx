import React from "react";
import { useEffect } from "react";

function Zenlink() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Zenlink Protocol Interface
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/zenlink.webp"
          alt="zenlink"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://app.zenlink.pro/swap">
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <a className="private-link" href="#">
              Github: <span className="disabled-link"> Private</span>
            </a>
          </div>
        </div>
        <div className="project-tag-grp tag-grp">
          <span className="frontend-tag blog-tag">Typescript</span>
          <span className="blog-tag">Zenlink</span>
          <span className="polkadot-tag blog-tag">Polkadot</span>
          <span className="blog-tag">MonoRepo</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div>
          <h2 class="hover-dot">
            Project Overview
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The Zenlink Protocol Interface is a monorepo designed to support the
            decentralized exchange (DEX) protocol within the Polkadot ecosystem.
            This project enables seamless cross-chain asset swaps by integrating
            with multiple parachains, ensuring interoperability within the
            Polkadot network. My role as a frontend developer involved building
            a highly performant and user-friendly interface using Next.js and
            TypeScript.
          </p>
          <p>
            One of the key challenges was ensuring that the interface could
            efficiently handle the complexity of cross-chain interactions. This
            required optimizing the data flow between the frontend and the
            various parachain integrations, ensuring that users could execute
            transactions quickly and reliably. By leveraging Next.js’s
            server-side rendering (SSR) capabilities, I was able to enhance the
            performance, particularly for pages that required real-time data
            from multiple sources.
          </p>
        </div>

        <div>
          <h2 class="hover-dot">
            Key Features and Packages
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The Zenlink Protocol Interface includes a variety of features that
            are essential for building a comprehensive DEX platform. One of the
            standout features is the Aggregation Swap V2, which allows users to
            perform advanced swap operations by aggregating liquidity across
            different parachains. This feature required meticulous planning and
            coordination between the frontend and backend teams to ensure that
            the UI could seamlessly handle complex operations without
            compromising on user experience.
          </p>
          <p>
            The project is structured as a monorepo, containing numerous
            packages that facilitate its functionality. These include:
          </p>
          <ul>
            <li>
              <code>@zenlink-interface/amm </code>
            </li>
            <li>
              <code>@zenlink-interface/chain </code>
            </li>
            <li>
              <code>@zenlink-interface/compat </code>
            </li>
            <li>
              <code>@zenlink-interface/config </code>
            </li>
            <li>
              <code>@zenlink-interface/currency </code>
            </li>
            <li>
              <code>@zenlink-interface/math </code>
            </li>
            <li>
              <code>@zenlink-interface/polkadot </code>
            </li>
            <li>
              <code>@zenlink-interface/smart-router </code>
            </li>
            <li>
              <code>@zenlink-interface/ui </code>
            </li>
          </ul>
          <p>
            A significant challenge during development was managing dependencies
            across these packages to ensure that changes in one part of the
            monorepo did not adversely affect others. This was particularly
            crucial for packages like <code>@zenlink-interface/ui</code> and{" "}
            <code>@zenlink-interface/smart-router</code>, which are central to
            the user experience and swap functionality. I contributed to solving
            this by implementing rigorous testing protocols and leveraging
            TypeScript’s strong typing to catch potential issues early in the
            development cycle.
          </p>
        </div>

        <div>
          <h2 class="hover-dot">
            Development and Testing
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The development process for the Zenlink Protocol Interface was
            highly modular, making it easier to maintain and extend the
            codebase. We used <strong>pnpm</strong> as the package manager,
            which allowed us to handle multiple packages efficiently within the
            monorepo. However, ensuring consistent build and development
            environments across the team posed a challenge, particularly when
            working with multiple packages that had interdependencies.
          </p>
          <p>
            To address this, I implemented <strong>Turborepo</strong> to
            streamline task running across the monorepo. This approach
            significantly reduced build times and ensured that the development
            server could be started quickly, even when working with the entire
            monorepo. Additionally, I played a key role in refining the testing
            strategy, introducing unit and integration tests that covered
            critical paths, especially around the swap and routing
            functionalities. This was crucial in maintaining the integrity of
            the application as new features were added.
          </p>
        </div>

        <div>
          <h2 class="hover-dot">
            Documentation and Integration
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Comprehensive documentation was a cornerstone of the Zenlink
            Protocol Interface project, ensuring that both current and future
            developers could easily navigate and extend the codebase. I
            contributed to the documentation effort, particularly in detailing
            the integration of various frontend components with the backend
            services. This was vital for developers working on integrating the
            interface with other projects in the Polkadot ecosystem.
          </p>
          <p>
            Detailed breakdowns such as the{" "}
            <strong>Integration Breakdown</strong> and{" "}
            <strong>Aggregation Swap V2 Breakdown</strong> were included in the
            project’s documentation under <code>docs/</code>, providing in-depth
            insights into how these critical features were implemented and how
            they could be adapted or extended in future versions.
          </p>
        </div>

        <div>
          <h2 class="hover-dot">
            License
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The Zenlink Protocol Interface is licensed under the LGPL License,
            which allows for both open-source usage and commercial deployment
            under specific conditions. This choice of license ensures that the
            project remains accessible to the wider developer community while
            protecting the core intellectual property.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Zenlink;
