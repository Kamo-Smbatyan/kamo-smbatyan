import React from "react";
import { useEffect } from "react";

function LayerswapV8() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
          Layerswap V8 Atomic Bridge
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/layer swap (1).webp"
          alt="Layerswap V8 Atomic Bridge"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a
              className="doc-link"
              href="https://layerswap.notion.site/"
            >
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/layerswap-atomic-bridge"
            >
              Github
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          Layerswap V8 Atomic Bridge is a permissionless, trustless cross-chain
          bridging protocol that eliminates reliance on Oracles and third-party
          infrastructures. This project leverages Atomic Swaps to ensure secure
          and decentralized asset exchanges across multiple blockchain networks.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="rust-tag blog-tag">Rust</span>
          <span className="frontend-tag blog-tag">Typescript</span>
          <span className="blog-tag">Bitcoin</span>
          <span className="blog-tag">Solidity</span>
          <span className="eth-tag blog-tag">EVM</span>
          <span className="blog-tag">Solana</span>
          <span className="blog-tag">Ton</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div></div>
        <div>
          <h2 className="hover-dot">
            Motivation
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The Layerswap V8 Atomic Bridge project is driven by the need for an
            ideal bridging solution that does not rely on third parties or
            complex infrastructure. Traditional bridges often introduce
            additional security risks and dependencies. Layerswap aims to
            provide a trustless, open, and permissionless cross-chain bridging
            experience. Atomic Swaps are utilized to enable secure and
            decentralized asset exchanges without the need for external
            verification.
          </p>

          <h2 className="hover-dot">
            Core Concept
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The process of adding a network to the Layerswap protocol is
            designed to be as seamless and permissionless as adding an ERC20
            token to the Uniswap protocol. This ensures that the bridging
            process remains trustless and open to any participant.
          </p>

          <h2 className="hover-dot">
            Architecture
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            <strong>Note:</strong> The architecture section is currently marked
            as "FAILED" in the README, indicating that the development is still
            in progress, and the architecture is subject to significant
            changes. As such, this section may evolve as the project matures.
          </p>

          <h2 className="hover-dot">
            Development Status
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            <strong>Disclaimer:</strong> This project is actively under
            development and is not yet ready for deployment on any mainnet
            environments. The interface and underlying architecture are
            continuously evolving, and ongoing modifications are expected as
            new ideas are tested and implemented.
          </p>

          <h2 className="hover-dot">
            Supported Networks
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <ul>
            <li>Bitcoin</li>
            <li>EVM</li>
            <li>Starknet</li>
            <li>TON</li>
            <li>Solana</li>
            <li>Aptos/Sui (in progress)</li>
            <li>Stacks (in progress)</li>
          </ul>

          <h2 className="hover-dot">
            Acknowledgements
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The initial HTLC (Hash Time-Locked Contract) implementation in
            Layerswap V8 was based on the work done in the atomic-port project
            by Yuki Uichiro. His contributions can be found at{" "}
            <a
              className="doc-link"
              href="https://github.com/ymuichiro/atomic-port"
            >
              https://github.com/ymuichiro/atomic-port
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LayerswapV8;
