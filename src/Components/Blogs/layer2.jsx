import { useEffect } from "react";
import "./blog.css";

function Layer2() {
  useEffect(() => {
    document.title = "Blog | Substrate & Polkadot";
    document.getElementsByTagName("META")[3].content =
      "In this article, you will see my insights about the Substrate & Polkadot";
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="blog-main">
      <div className="blog-ttl">
        <div>
          <h1>What Is Layer 2?</h1>
          <h3>
            A layer 2 is any off-chain network, system, or technology built on
            top of a blockchain to help extend its capabilities.
          </h3>
        </div>
        <div>
          <span className="blog-tag">Layer 2</span>
          <span className="blog-tag">Off chain</span>
        </div>
        <p>
          A layer 2 refers to any off-chain network, system, or technology built
          on top of a{" "}
          <a href="https://chain.link/education-hub/blockchain"> blockchain</a>{" "}
          (commonly known as a layer-1 network) that helps extend the
          capabilities of the underlying base layer network. Layer-2 networks
          can support any blockchain to introduce enhancements such as higher
          transaction throughputs. <br />
          <br />
          One core requirement for a network, system, or technology to be
          considered a layer 2 is that it inherits the security of the
          blockchain it is built on top of. Transaction data must, in some shape
          or form, be verified and confirmed by the underlying blockchain
          network rather than a separate set of nodes. For example, sidechains
          are often not considered layer 2s because they usually deploy their
          own consensus mechanisms and validators, leading to a different set of
          security guarantees than that of the base layer chain.
          <br />
          <br />
          For blockchains that sacrifice scalability to achieve higher
          decentralization and security, layer 2s enable greater transaction
          throughput, which can lead to lower fees. Layer 2s can be seen as one
          solution to the problem of scalability, enabling fast and scalable
          execution without compromising on decentralization or security.
        </p>
      </div>

      <div className="blog-description">
        <div>
          <h2>The Need for Layer 2s</h2>

          <p>
            Since the emergence of blockchain technology in 2008, thousands of
            researchers and developers have worked to solve pressing limitations
            in blockchain scalability to match growing adoption. These
            limitations have historically resulted in high fees and slow
            execution times, diminishing the ability of blockchains to operate
            at scale. <br />
            <br />
            Coined by Ethereum Co-founder Vitalik Buterin, the{" "}
            <a href="https://vitalik.ca/general/2021/04/07/sharding.html">
              blockchain scalability trilemma{" "}
            </a>{" "}
            posits that blockchains are incapable of scaling effectively while
            keeping the underlying network both secure and decentralized.
            Instead, there must be tradeoffs between these three
            features—today’s blockchain networks can fulfill two out of the
            three conditions, but not all three simultaneously.
          </p>
          <img
            src="/assets/blockchain-trilemma.png"
            alt="blockchain trillemma"
          />
          <p>
            Layer 2s are an emerging technology built on the premise that this
            scalability limitation exists because blockchains are tasked with
            too many things. This is because blockchains today fulfill three
            core functions: execution, data availability, and consensus.
          </p>
          <ul>
            <li>
              <strong> Execution: </strong>transaction processing and
              throughput. Measured by the number of computations (of which
              transactions are a subset) per second a blockchain can process.
            </li>
            <li>
              <strong> Data Availability: </strong>storage requirements for
              nodes and validators on the network for transactions, state, and
              other data. Measured in standard storage terms such as megabytes,
              gigabytes, etc.
            </li>
            <li>
              <strong> Consensus: </strong>broad agreement by nodes and
              validators on the state of the network and ordering of
              transactions. Measured in terms of decentralization and
              time-to-finality, or the time it takes for all nodes to agree on a
              particular state change.
            </li>
          </ul>
          <p className="note">
            <strong> Note:</strong> For the purposes of this post, we will focus
            solely on the execution layer. For a holistic deep dive into scaling
            blockchains, check out this blog post on{" "}
            <a href="https://blog.chain.link/blockchain-scalability-approaches/">
              {" "}
              blockchain scalability.
            </a>
          </p>
          <h2>How Layer-2 Solutions Work</h2>
          <p className="note">
          <strong> Note:</strong> Implementations of most layer-2 solutions are still in their early stages, and many elements of layer-2 protocol design are still untested or unproven.
          </p>
          
        </div>
      </div>
    </div>
  );
}
export default Layer2;
