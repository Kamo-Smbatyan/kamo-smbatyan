import React from "react";
import { useEffect } from "react";

function DripsProtocol() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Drips Protocol V2 Smart Contracts
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/drips.webp"
          alt="Drips Protocol"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://www.drips.network/">
              Website
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          Drips is an EVM blockchain protocol for streaming and splitting ERC-20
          tokens. It enables seamless and efficient token distribution across
          various applications, making it an ideal solution for decentralized
          financial systems and beyond.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="eth-tag blog-tag">EVM</span>
          <span className="blog-tag">Smart Contract</span>
          <span className="blockchain-tag blog-tag">Blockchain</span>
          <span className="blog-tag">Funding</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div></div>
        <div>
          <h2 className="hover-dot">
            Overview
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Drips Protocol V2 is designed to enhance the streaming and splitting
            of ERC-20 tokens on the Ethereum blockchain. It uses Foundry for
            development, testing, and deployment, offering a streamlined process
            for building secure and efficient smart contracts. This protocol is
            ideal for projects requiring ongoing token distribution, such as
            subscription services, payroll systems, or decentralized autonomous
            organizations (DAOs).
          </p>

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
              <strong>Streaming and Splitting:</strong> Efficiently manage the
              distribution of ERC-20 tokens over time, allowing for continuous
              and automated transfers.
            </li>
            <li>
              <strong>Secure Development:</strong> Utilizes Foundry and Slither
              for secure contract development and static analysis.
            </li>
            <li>
              <strong>Modular Deployment:</strong> The protocol supports modular
              deployment, enabling easy upgrades and integration with other
              systems.
            </li>
            <li>
              <strong>Cross-Network Compatibility:</strong> Deployable on
              various Ethereum-compatible networks, with support for multiple
              verification and publishing options.
            </li>
          </ul>

          <h2 className="hover-dot">
            Development Workflow
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The development of Drips Protocol V2 is managed using Foundry, a
            comprehensive framework for Ethereum smart contract development.
            Here are some of the key steps in the workflow:
          </p>
          <ul>
            <li>
              <strong>Formatting Code:</strong> Ensure consistent formatting
              across the codebase using:
              <pre>
                <code>forge fmt</code>
              </pre>
            </li>
            <li>
              <strong>Running Tests:</strong> Validate contract functionality by
              running tests with:
              <pre>
                <code>forge test</code>
              </pre>
            </li>
            <li>
              <strong>Static Analysis:</strong> Detect potential security issues
              using Slither:
              <pre>
                <code>slither .</code>
              </pre>
            </li>
          </ul>

          <h2 className="hover-dot">
            Deployment
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The deployment of Drips Protocol V2 can be done on both local
            testnets and public networks. For local deployments, the Anvil tool
            is used to start a local testnet node:
            <pre>
              <code>anvil</code>
            </pre>
            <p>
              Environment variables must be set up for public network
              deployments, including the RPC URL and wallet arguments. The
              deployment process is initiated using a deployment script:
            </p>
            <pre>
              <code>scripts/deploy.sh</code>
            </pre>
          </p>

          <h2 className="hover-dot">
            Verification and Publishing
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            After deploying the contracts, verification can be performed using
            services like Etherscan, Sourcify, or Blockscout. This can be done
            by running the verification script with the following command:
            <pre>
              <code>scripts/verify.sh &lt;DRIPS_DEPLOYER&gt;</code>
            </pre>
            The <code>&lt;DRIPS_DEPLOYER&gt;</code> parameter should be the
            address of the deployed DripsDeployer contract.
          </p>

          <h2 className="hover-dot">
            Conclusion
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Drips Protocol V2 provides a powerful and flexible solution for
            managing ERC-20 token distribution on Ethereum. Its integration with
            modern development tools and secure deployment practices make it
            suitable for various decentralized applications, ensuring efficient
            and transparent token management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DripsProtocol;
