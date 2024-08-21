import React from "react";
import { useEffect } from "react";

function Gemforge() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Gemforge Command Line Tool
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/gemforge.webp"
          alt="Gemforge Command Line Tool"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://gemforge.xyz/">
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/gemforge-command-line-tool"
            >
              Github
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          Gemforge is a command-line tool designed to simplify the process of
          building, deploying, and upgrading Diamond Standard (EIP-2535)
          contracts on EVM chains. By automating boilerplate code and offering
          extensive configuration options, Gemforge enhances developer
          efficiency and reduces the complexities involved in working with
          upgradeable contracts.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="blog-tag">NPM</span>
          <span className="blog-tag">Solidity</span>
          <span className="blog-tag">Typescript</span>
          <span className="blog-tag">EVM</span>
          <span className="blog-tag">Diamond Standard</span>
          <span className="blog-tag">Eip-2535</span>
          <span className="blog-tag">Bin</span>
          <span className="blog-tag">Forge</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div></div>
        <div>
          <h2 className="hover-dot">
            Why Gemforge?
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The Diamond Standard (EIP-2535) offers a powerful way to build and
            deploy upgradeable contracts with virtually no size limitations.
            However, the process of utilizing this standard often involves
            writing significant amounts of boilerplate code, including diamond
            proxy contracts, interface code, and deployment scripts. Gemforge
            automates most of these tasks, allowing developers to focus on the
            core logic of their contracts rather than boilerplate.
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
              Auto-generates Diamond proxy code and deployment scripts for
              Foundry tests.
            </li>
            <li>
              Accurately and efficiently calculates facet deployment and
              upgrades.
            </li>
            <li>
              Supports deployment of multiple instances on a single chain.
            </li>
            <li>Cleans existing deployments and records addresses in JSON.</li>
            <li>
              Pre- and post- hooks available for both build and deploy steps.
            </li>
            <li>Generates scaffolding for both Foundry and Hardhat.</li>
            <li>Highly configurable per project needs.</li>
            <li>Fully documented and used in production environments.</li>
          </ul>

          <h2 className="hover-dot">
            Installation
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            To run Gemforge, Node.js 20+ is required. It's recommended to use
            nvm to manage different Node.js versions. Gemforge can be installed
            globally via pnpm, npm, or yarn:
          </p>
          <pre>
            <code>pnpm add --global gemforge</code>
          </pre>
          <pre>
            <code>npm install --global gemforge</code>
          </pre>
          <pre>
            <code>yarn global add gemforge</code>
          </pre>

          <h2 className="hover-dot">
            Usage
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Gemforge provides a command-line interface with various commands to
            initialize a project, generate scaffolding, build, and deploy
            Diamond contracts. The basic usage can be explored by running:
          </p>
          <pre>
            <code>gemforge --help</code>
          </pre>
          <p>
            To deploy the diamond to a network, the following command can be
            used:
          </p>
          <pre>
            <code>gemforge deploy [options] [network]</code>
          </pre>
          <p>
            Where <code>[network]</code> is the target network (default:
            "local"). Additional options allow customization of the deployment
            process, including verbose logging, specifying a folder, and using a
            custom configuration file.
          </p>

          <h2 className="hover-dot">
            Development
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            For those interested in contributing to the Gemforge tool itself,
            the development process involves building, watching for changes, and
            running tests. Building the tool is straightforward:
          </p>
          <pre>
            <code>pnpm build</code>
          </pre>
          <p>For continuous development, you can watch for changes:</p>
          <pre>
            <code>pnpm dev</code>
          </pre>
          <p>
            Testing requires Foundry and the Solidity compiler. After starting
            local test nodes, tests can be run as follows:
          </p>
          <pre>
            <code>pnpm test</code>
          </pre>
          <p>
            If errors occur, they are likely due to TypeScript syntax errors in
            the test code.
          </p>

          <h2 className="hover-dot">
            Publishing
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            To publish a new release of Gemforge, the following command is used:
          </p>
          <pre>
            <code>pnpm release</code>
          </pre>

          <h2 className="hover-dot">
            Contributing
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Contributions are welcome via Issues and PRs on GitHub. For more
            details, please refer to the contributing guidelines provided in the
            repository.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gemforge;
