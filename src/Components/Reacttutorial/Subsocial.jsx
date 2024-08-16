import React from "react";
import { useEffect } from "react";

function Subsocial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Subsocial React Example
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <video className="project-detail-fv" loop autoPlay muted>
          <source src="/assets/subsocial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.png" alt="website icon" />
            <a className="doc-link" href="https://subsocial.network/">
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.png" alt="github icon" />
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/social-template-react-subs"
            >
              Github
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          Subsocial is a community-driven project on the Subsocial is a
          decentralized social networking platform built on the
          <a
            className="doc-link"
            href="https://github.com/paritytech/substrate"
          >
            {" "}
            Substrate
          </a>
          &nbsp;blockchain framework , which is also the foundation of the
          <a
            className="doc-link"
            href="https://github.com/paritytech/substrate"
          >
            {" "}
            Polkadot
          </a>{" "}
          and{" "}
          <a
            className="doc-link"
            href="https://wiki.polkadot.network/docs/en/kusama-index"
          >
            Kusama{" "}
          </a>{" "}
          ecosystems. It aims to provide a censorship-resistant, user-owned, and
          community-driven social media experience.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="blog-tag">React.JS</span>
          <span className="blog-tag">Template</span>
          <span className="blog-tag">MUI</span>
          <span className="blog-tag">Subsocial</span>
          <span className="blog-tag">Next.JS</span>
          <span className="blog-tag">Substrate</span>
          <span className="blog-tag">Web3</span>
          <span className="blog-tag">Medium-clone</span>
          <span className="blog-tag">Social Media</span>
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
          <div className="subsocial-img-grp">
            <img src="/assets/react.png" alt="react" />
            <h1>+</h1>
            <img src="/assets/icons/mui.svg" alt="mui" />
          </div>
          <p>
            The Subsocial React Example is a Next.js project that leverages the
            Subsocial JS SDK and{" "}
            <a
              className="doc-link"
              href="https://www.npmjs.com/package/@mui/docs"
            >
              {" "}
              MUI (Material-UI)
            </a>
            . It serves as a simplified implementation of the Subsocial Web App,
            providing a foundation for developers to build decentralized
            applications with a similar structure and functionality.
          </p>
        </div>
        <div>
          <h2 className="hover-dot">
            React.js Challenge: Optimizing Component Performance
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            During the development of the Subsocial React Example, one of the
            key challenges was optimizing the performance of components that
            rendered large data sets from the Subsocial SDK. The initial
            implementation led to performance bottlenecks, particularly when
            rendering lists with complex nested structures.
          </p>
          <p>
            To address this, I implemented several React-specific optimizations:
          </p>
          <ul>
            <li>
              <strong>
                Memoization with{" "}
                <a
                  className="doc-link"
                  href="https://react.dev/reference/react/memo"
                >
                  {" "}
                  React.memo
                </a>
                :
              </strong>{" "}
              I utilized <code>React.memo</code> to prevent unnecessary
              re-renders of components that depend on props that rarely change.
              This reduced the rendering overhead, particularly for static
              content.
            </li>
            <li>
              <strong>Efficient State Management:</strong> I leveraged React's{" "}
              <code>useReducer</code> hook to manage complex state transitions
              within components, ensuring that state updates were handled
              efficiently without causing excessive re-renders.
            </li>
            <li>
              <strong>Virtualized Lists:</strong> For rendering large lists, I
              integrated a virtualized list component using
              <code>react-window</code>. This library allows for only rendering
              the visible part of the list, significantly improving performance
              when dealing with large datasets.
            </li>
          </ul>
          <p>
            These optimizations not only enhanced the overall user experience
            but also demonstrated my ability to effectively utilize React.js for
            building scalable and high-performance applications. The final
            implementation allowed the Subsocial React Example to handle large
            data sets smoothly, even on resource-constrained devices.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Installation
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>To install the project locally, follow these steps:</p>
          <ol>
            <li>
              Clone the repository:
              <pre>
                <code>
                  git clone https://github.com/dappforce/subsocial-react-example
                </code>
              </pre>
            </li>
            <li>
              Move to the project directory:
              <pre>
                <code>cd subsocial-react-example</code>
              </pre>
            </li>
            <li>
              Install all dependencies:
              <pre>
                <code>npm i</code> or <code>yarn</code>
              </pre>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="hover-dot">
            Running the Project
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            To run the project locally, use the following command in the root
            directory:
            <pre>
              <code>yarn dev</code>
            </pre>
            This will start a development build of the Next.js project, allowing
            you to interact with the Subsocial React Example on your local
            machine.
          </p>
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
            You can easily deploy the Subsocial React Example to platforms like
            Vercel by integrating CI/CD from your GitHub repository. This allows
            for automated deployments and continuous integration.
          </p>
          <p>
            For more details, refer to the deployment documentation{" "}
            <a
              className="doc-link"
              href="https://vercel.com/guides/deploying-nextjs-with-vercel"
            >
              here
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Important Links
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <ul>
            <li>
              Get started with Subsocial SDK{" "}
              <a
                className="doc-link"
                href="https://docs.subsocial.network/docs/develop/sdk/getting-started"
              >
                here
              </a>
            </li>
            <li>
              Read Quick Reference Guide{" "}
              <a
                className="doc-link"
                href="https://docs.subsocial.network/docs/develop/sdk/quick-start"
              >
                here
              </a>
            </li>
            <li>
              Check Detailed How-To Guide{" "}
              <a
                className="doc-link"
                href="https://docs.subsocial.network/docs/develop/sdk/how-to-guides"
              >
                here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Subsocial;
