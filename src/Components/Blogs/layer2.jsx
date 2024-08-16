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
          <h2 className="hover-dot">
            The Need for Layer 2s
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
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
          <h2 className="hover-dot">
            How Layer-2 Solutions Work
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p className="note">
            <strong> Note:</strong> Implementations of most layer-2 solutions
            are still in their early stages, and many elements of layer-2
            protocol design are still untested or unproven.
          </p>
          <p>
            At a high level, layer-2s typically have two parts: A network that
            processes transactions and a{" "}
            <a href="https://chain.link/education/smart-contracts">
              {" "}
              smart contract
            </a>{" "}
            on the underlying blockchain that resolves any disputes and achieves
            consensus on the state of the layer-2 network by cementing it to an
            underlying blockchain.
          </p>
          <p>
            Layer-2 networks are where fast execution of transactions and
            computations occur. They can vary wildly in how they achieve this
            throughput. A common denominator between each layer-2 environment,
            however, is that when looking to settle on the base chain, layer 2s
            must provide some kind of cryptographic and verifiable “proof” to
            the blockchain on the integrity of the proposed state change, either
            preemptively or retroactively.
          </p>
          <p>
            Similarly, the underlying smart contract implementation can vary
            between layer 2s, but the core functions of the smart contract are
            always to:
          </p>
          <ul>
            <li>Hold and release funds transferred to the layer 2</li>
            <li>
              Receive some kind of proof generated by the layer 2, validate it,
              resolve disputes, and then finalize transactions
            </li>
          </ul>
          <p>
            A good way to conceptualize these two dynamics is to take two
            examples of existing layer-2 implementations—payment channels and
            rollups.
          </p>
          <h2 className="hover-dot">
            Payment Channels
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            A payment channel enables the off-chain transfer of on-chain tokens
            between two or more users by pre-funding liquidity into a channel.
          </p>
          <p>
            Alice and Bob create a payment channel by locking up collective
            funds in a smart contract and agreeing (through cryptographic
            signatures) how much each has access to. For example, if both locked
            up $50 of funds for a total of $100, they would most likely agree
            that each gets to use $50 each in the payment channel.
          </p>
          <p>
            Once the payment channel is set up, Alice and Bob are free to
            transact off-chain via signed messages without submitting
            transactions to the underlying blockchain. Alice can pay Bob, and
            vice versa, at zero cost and lightning-fast latencies. When
            communicating over the two-way payment channel, Alice and Bob’s
            transactions aren’t posted onto the underlying blockchain; it’s only
            when they mutually decide to close the channel that the end results
            are transmitted to, and settled on, the blockchain.
          </p>
          <p>
            The end result of this system is that Bob and Alice only need to pay
            for two on-chain transactions to open and close the payment channel.
            While the payment channel is open, millions of transfers can be made
            at zero cost and sub-second speeds directly peer to peer—a classic
            example of scalability.
          </p>
          <img src="/assets/paymentchannel.png" alt="payment channel" />
          <h2 className="hover-dot">
            Rollups
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Optimistic and zero-knowledge rollups offer higher throughput and
            lower costs by executing smart contract state changes off-chain and
            proving them on-chain. Scalability with rollups is achieved through
            the following three methods.
          </p>
          <ul>
            <li>
              Rollups <strong> perform off-chain execution </strong>of
              transactions, requiring that the underlying base blockchain only
              needs to execute small proofs to verify network activity and store
              raw transaction data.
            </li>
            <li>
              Rollups <strong> batch transaction data </strong>
              together when submitted to a blockchain so that the on-chain gas
              cost is distributed across a number of transactions.
            </li>
            <li>
              Rollups only require{" "}
              <strong> a minimum of one honest validator</strong> to prove the
              validity of transactions to the base layer blockchain, allowing
              for smaller validator sets and increased hardware requirements
              without significantly compromising security.
            </li>
          </ul>
          <h3>Off-Chain Execution</h3>
          <p>
            A key feature of rollups is that they perform off-chain execution of
            transactions. This means that layer-2 networks handle the processing
            of transactions, whether with another user or with a smart contract,
            on behalf of of the base blockchain. In conjunction with a smaller
            validator set with better hardware, this offers much higher
            throughput when transacting on the layer-2 network compared to the
            base blockchains.
          </p>
          <p>
            The base blockchain only needs to execute proofs submitted to the
            rollup smart contract to verify the activity on the layer-2 network
            (in the case of optimistic rollups, only in the case of a dispute)
            and store raw, unexecuted transaction data as calldata. In simple
            terms, this means the blockchain needs to do less work and store
            less data for transactions that take place on a layer 2, leading to
            a lower total cost per transaction.
          </p>
          <h3>Batch Transactions</h3>
          <p>
            Another way to reduce costs is to batch transactions. This can be
            thought of as gift packing. On a blockchain, every transaction is a
            separate gift and is delivered in a separate box. This makes
            shipping expensive as you have to pay a shipping fee every time you
            want to send a gift. With rollups, you pack many gifts into a larger
            box at less frequent intervals and split a larger shipping fee
            across multiple gifts.
          </p>
          <p>
            A more technically accurate explanation is that rollups batch raw
            transaction data as calldata. Rollup transactions don’t need to be
            verified in the same way that on-chain transactions do; rather,
            batched transaction data is simply a way to keep data stored on the
            base chain so that, if necessary, a validator or rollup participant
            can recreate the state of the layer-2 network at any time. However,
            the core logic is still the same—one batched transaction on the main
            chain stores data regarding multiple rollup transactions.
          </p>
          <img
            src="/assets/rolluptransaction.png"
            alt="rollup transaction, transaction on base blockchains"
          />
          <p>
            This is a clear and straightforward way of reducing the transaction
            fees that inhibit scalability on a blockchain, and combined with
            data compression, it offers remarkable improvements in execution
            costs compared to transacting on the base blockchain.
          </p>
          <p>
            Both zk-rollups and optimistic rollups batch transactions in a
            similar way.
          </p>
          <h3>Fewer Validators</h3>
          <p>
            As previously mentioned, layer 2s inherent the security guarantees
            and decentralization of their underlying blockchain. This is
            elaborated on below, but the core idea is that layer 2s must provide
            a form of proof to their underlying blockchain that their proposed
            state changes are valid.
          </p>
          <p>
            This makes it possible for rollups to have fewer validators process
            all transactions on the layer-2 network. Validators can be
            permissioned entities and often have much more sophisticated
            hardware to compute transactions faster and at lower costs. The
            reason this is possible is that validators don’t provide
            consensus—that happens through a smart contract on a base chain, and
            the smart contract requires proof.
          </p>
          <h2 className="hover-dot">
            Layer 2 Security: The Importance of Proof
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            The concept of “proof” is fundamental to layer 2s in order for them
            to inherit the security guarantees of a base chain. In the physical
            world, proof can take a variety of forms. Fingerprints on a weapon
            and camera recordings at the time of an incident are both examples
            of proof.
          </p>
          <p>
            Cryptographic proof works in a similar way, but the contents are
            much more objective than what’s admissible in physical courts.
            Proving something with cryptography gives objective, verifiable, and
            tamper-proof guarantees that an exact thing is true. If the proof
            works, it’s guaranteed to be true. In the case of payment channels,
            cryptographic signatures on transactions provide the definitive
            truth needed by the smart contract to settle any disputes.
          </p>
          <p>
            Every layer 2 relies on some form of cryptographic proof to settle
            disputes on the base chain. The most prominent proofs today are
            fault proofs and validity proofs (also known as{" "}
            <a href="https://blog.chain.link/what-is-a-zero-knowledge-proof-zkp/">
              {" "}
              zero-knowledge proofs
            </a>
            ), foundations for the modern-day optimistic rollups and zk-rollups.
          </p>
          <h3>Payment Channel Signed Messages</h3>
          <p>
            Suppose that when closing a payment channel Bob or Alice acts
            maliciously and attempts to take funds that aren’t theirs. Either
            one can do this by giving the smart contract an outdated copy of the
            payment channel’s “ledger.”{" "}
          </p>
          <p>
            A key design element of a payment channel is that transactions must
            always be cryptographically signed. This becomes a form of evidence
            that’s compatible with the underlying smart contract to resolve
            disputes. For example, if Alice proposes an outdated copy of the
            ledger that gives her more funds than she should get, Bob can
            dispute the settlement transaction and provide a newer copy of the
            ledger. The correct amounts can then be determined by the smart
            contract. Alice would also have to pay a fee for her dishonest
            behavior.
          </p>
          <p>
            The adjudication process of the underlying smart contract is
            precisely what makes payment channels a layer 2. An easy way to
            think about this is to look at it from a “proof” perspective. Once
            the payment channel is opened, both Bob and Alice must
            cryptographically sign every transaction they make and store a copy
            of the other’s signature.
          </p>
          <p>
            This is proof of the activities within the payment channel, but just
            having proof isn’t enough. There needs to be enforcement of the
            truth, much like a judge makes a decision after evidence is provided
            and the jury have reached a verdict. In this case, the smart
            contract enforces the judgment and settles the account by returning
            the correct amount to each participant’s wallet on the base chain.
          </p>
          <p>
            This is what it means to inherit the decentralization and security
            guarantees of the underlying blockchain. The payment channel handles
            the majority of the computation and execution off-chain, but in the
            case that consensus is needed to settle the channel, the robust
            consensus layer of an underlying blockchain makes the ultimate
            decision.
          </p>
          <h3>Optimistic Rollup Fault Proofs</h3>
          <p>
            Fault proofs are simple in nature. A layer 2 that uses fault proofs
            assumes all transactions are valid by default. However, there is a
            dispute period where any network participant can generate a dispute
            and provide proof to the smart contract that the transaction data
            and proposed state change are wrong. When a fault proof is
            published, the rollup transaction is either partially or fully
            re-executed on-chain and the resulting state change is compared to
            the original claim. If the re-execution results in a different
            result, then the original claim is deemed invalid and reverted.{" "}
          </p>
          <p>
            This system is used by optimistic rollups today. The “optimism”
            comes from the philosophical viewpoint of a fault-proof: The smart
            contract “optimistically” assumes that all transactions are valid
            until proven otherwise (innocent until proven guilty). Taking this
            back to the example of a dishonest validator, any network
            participant only needs to propose a valid fault proof to the smart
            contract during the dispute period for the validator’s actions to be
            nullified before transactions are finalized.
          </p>
          <img src="/assets/optimistic rollups.png" alt="optimistic rollups" />
          <h3>zk-rollup Validity Proofs</h3>
          <p>
            Validity proofs can be viewed as having the opposite philosophical
            viewpoint of a fault proof, in which all computation and execution
            is under question and must be proven true preemptively.
          </p>
          <p>
            {" "}
            To put it simply, validity proofs prove that something is correct.
            In the case of a zk-rollup, this necessarily refers to the
            transactions and computations that took place on the layer-2
            network. The corresponding on-chain smart contract can thus verify a
            layer 2’s validity proof to approve state changes. In the context of
            validators, a full-functioning zk-rollup effectively makes it
            impossible for faulty or malicious transactions to be settled on the
            base chain, as every batch must have a corresponding validity proof.{" "}
          </p>

          <img src="/assets/zk rollup.png" alt="zk rollup" />
          <h2 className="hover-dot">
            Scaling Blockchains
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Payment channels, rollups, and layer 2s in a larger sense are all
            methods of approaching the blockchain scalability problem in a
            sustainable and long-term-oriented manner—supporting both the
            growing adoption of Web3 applications and enhanced user experience.{" "}
          </p>
          <p>
            As a nascent and continually developing technology, most{" "}
            <a href="https://chain.link/education/web3"> Web3</a>{" "}
            infrastructural components, including base blockchains and layer 2s,
            have yet to reach the inflection point where it is definitively
            known which approach best suits the needs of the market. However,
            thousands of developers and researchers continue to work tirelessly
            to find viable solutions via the expansive ecosystem of blockchain
            networks, DAG solutions, and layer 2s that exist today in order to
            bring the promises of Web3 to the forefront of society.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Layer2;
