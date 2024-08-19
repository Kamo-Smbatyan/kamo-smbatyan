import { useEffect } from "react";
import "./blog.css";

function Evm() {
  useEffect(() => {
    document.title = "Blog | EVM";
    document.getElementsByTagName("META")[3].content =
      "Ethereum Virtual Machine";
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="blog-main">
      <div className="blog-ttl">
        <div>
          <h1>Ethereum Virtual Machine (EVM)</h1>
          <p>
            The Ethereum Virtual Machine (EVM) is a decentralized computation
            engine that executes smart contracts on the Ethereum network.{" "}
          </p>
          <p>
            EVM is not exclusive to Ethereum; it is also used by other
            blockchains like Polygon, Arbitrum, and Avalanche.
          </p>
          <p>
            EVM plays a crucial role in maintaining consensus across the
            Ethereum blockchain and facilitating the execution of decentralized
            applications (dApps).
          </p>
        </div>
        <div className="blog-tag-grp">
          <span className="blog-tag">Ethereum</span>
          <span className="blog-tag">EVM</span>
        </div>
        <h3 className="post-date"> Posted on November 16, 2023</h3>
      </div>
      <div className="blog-main-img">
        <div></div>
        <img src="/assets/evm.webp" className="sub-img" alt="bridge" />
      </div>
      <div className="blog-description">
        <div>
          <h2 className="hover-dot">
            What is the Ethereum Virtual Machine (EVM)?
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The Ethereum Virtual Machine (EVM) is a decentralized computation
            engine that executes smart contracts on the Ethereum network. It is
            a crucial component of Ethereum's infrastructure, enabling the
            execution of code exactly as intended. EVM is not a physical machine
            but a virtual one, operating across thousands of computers, or
            nodes, participating in the Ethereum network. This distributed
            nature of EVM ensures the security and reliability of the Ethereum
            network.
          </p>
          <h3>
          How does the EVM work?
          </h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Evm;
