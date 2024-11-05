import React from "react";
import { useEffect } from "react";

function ChainX() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
        ChainX - Layer-2 Network for Bitcoin
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <video className="project-detail-fv" loop autoPlay muted>
          <source src="/assets/chainx.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://chainx.org/">Website</a>
          </div>
        </div>
        <p className="project-ttl-comment">
          ChainX is a community-driven project on the{" "}
          <a className="doc-link" href="https://github.com/paritytech/substrate"> Substrate </a>
          framework, serving as the largest Layer-2 network for Bitcoin. It
          utilizes the Light-client protocol with smart contract support and
          operates as a relay chain alongside Polkadot and Kusama.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="substrate-tag blog-tag">substrate</span>
          <span className="blog-tag">Layer2</span>
          <span className="blog-tag">Bitcoin</span>
          <span className="eth-tag blog-tag">EVM</span>
          <span className="blog-tag">Smart contract</span>
          <span className="blog-tag">Move</span>
          <span className="blog-tag">Multichain</span>
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
            ChainX aims to solve critical issues in the crypto world, including
            scalability, interoperability, and fragmentation of ecosystems. It
            aggregates isolated communities and enables seamless cross-chain
            communication, particularly focusing on integrating BTC with
            EVM-based chains like ETH and BSC.
          </p>
        </div>

        <div>
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
              <strong>Layer-2 Network for Bitcoin:</strong> ChainX enhances
              Bitcoin’s scalability and integrates it into the broader crypto
              ecosystem using the Light-client protocol and multi-centralized
              hosting.
            </li>
            <li>
              <strong>Cross-Chain Liquidity:</strong> The platform utilizes the
              LayerZero protocol to enable decentralized cross-chain
              communication, allowing for shared liquidity between EVM
              ecosystems.
            </li>
            <li>
              <strong>Aggregation of Ecosystems:</strong> ChainX aims to unify
              liquidity pools across platforms like Uniswap and PancakeSwap, and
              synchronize domain name systems like ENS with BTC addresses.
            </li>
            <li>
              <strong>Ecological Projects:</strong> ChainX supports various
              projects, including ComingChat, SherpaX, and MiniX, each
              contributing to the platform’s goal of aggregation and unification
              in the crypto space.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="hover-dot">
            Challenges and Solutions
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The project addresses the fragmentation of the crypto world by
            providing solutions for scalability and cross-chain isolation. By
            adopting innovative protocols and focusing on aggregation, ChainX
            enhances the efficiency and integration of decentralized
            applications across different ecosystems.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Deployment and Use
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Developers can easily deploy and interact with ChainX using the
            provided Metamask configuration. The platform supports a
            comprehensive development environment, ensuring that contributors
            can build and expand upon the existing infrastructure with ease.
          </p>
          <pre>
            <code>
              Network name: ChainX
              <br />
              RPC URL: https://mainnet.chainx.org/rpc
              <br />
              Chain ID: 1501
              <br />
              Currency symbol: BTC
              <br />
              Block explorer URL (Optional): https://evm.chainx.org/
            </code>
          </pre>
        </div>

        <div>
          <h2 className="hover-dot">
            Conclusion
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            ChainX is at the forefront of innovation in the blockchain space,
            addressing key challenges in scalability, interoperability, and
            ecosystem fragmentation. By unifying different blockchain
            environments and promoting cross-chain communication, ChainX is
            helping to create a more cohesive and powerful Web3 world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChainX;
