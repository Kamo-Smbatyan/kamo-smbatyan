import { useEffect } from "react";
import "./blog.css";

function ZkRollup() {
  useEffect(() => {
    document.title = "Blog | ZK-Rollup";
    document.getElementsByTagName("META")[3].content =
      "In this article, you will see normal terms about the ZK-Rollup";
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="blog-main">
      <div className="blog-ttl">
        <div>
          <h1>ZK-Rollup</h1>
          <h3>The Ultimate Layer2 Solution</h3>
        </div>
        <div className="blog-tag-grp">
          <span className="blog-tag">Layer 2</span>
          <span className="blog-tag">Zkrollup</span>
          <span className="blog-tag">Zksync</span>
          <span className="blog-tag">Zklink</span>
          <span className="blog-tag">Market Analysis</span>

        </div>
        <h3 className="post-date"> Posted on September 20, 2023</h3>
      </div>
      <div className="blog-main-img">
        <div></div>
        <img src="/assets/zkrollup.webp" className="sub-img" alt="ZK-Rollup" />
      </div>
      <div className="blog-description">
        <div>
          <p>
            During the past few months, the congestion of Ethereum has led to
            high costs and poor user experience, which leads to an intense
            discussion about Ethereum2.0, scaling and Layer2. It is when
            ZK-Rollup stands out. The purpose of this paper is to focus
            ZK-Rollup in detail, thus we skip over wider concepts like Layer2.
          </p>
          <h2 className="hover-dot">
            What is ZK-Rollup?
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            To understand ZK-Rollup, first we need to take a look at Layer2.
          </p>
          <p>
            Layer2 is a secondary protocol built on top of the main chain
            parallel with it, sending and receiving information from the latter,
            so that transactions and changes in states that take place in Layer2
            can be returned to and saved on the main chain. In this way, a great
            portion of computation can be moved from the main chain to this
            second layer, so the main chain only takes the responsibility of
            data verification and storage, which considerably lightens the load
            and improves the efficiency of the main chain.
          </p>
          <p>
            ZK-Rollup is one of the Layer2 solutions, and can be understood with
            two concepts: Rollup and ZK, which stands for zero-knowledge.
          </p>
          <p>
            The main idea of rollup is to batch a collection of transactions
            that happened off-chain, and post the compressed data with the
            previous account state and the new state on layer1. To be more
            specific, a rollup smart contract is placed on the main chain which
            maintains and updates a state root (a Merkle root, including the
            state and balance of accounts). When a collection of transactions
            are compressed into a batch (which also includes the previous
            state-root and the new state root) and sent to the main chain, the
            smart contract will check if the previous state root in the batch
            matches the current state root stored in the contract, and will
            update the Merkle root with a positive answer.
          </p>
          <p>
            To guarantee the consistency of Layer1 and Layer2, and to prevent
            malicious activity, the post-state root in the batches must be
            guaranteed to be correct and safe by technological means, and
            ZK-Rollup uses zero-knowledge proof on this matter.
          </p>
          <p
            style={{
              backgroundColor: "#fff3f9",
              borderRadius: "28px",
              padding: "12px 18px 6px",
              fontSize: "20px",
              fontStyle: "italic",
            }}
          >
            &nbsp;&nbsp;&nbsp;"‘Zero Knowledge Proof’ is a technique which
            employs cryptographic algorithms so that various parties can verify
            the veracity of an item of information without sharing the data that
            compose it." <h3> Teresa Alameda</h3>
          </p>
          <p>
            When the transaction is being packed, every batch includes a
            cryptographic proof called a ZK-SNARK (zero knowledge succinct
            non-interactive argument of knowledge, using the PLONK protocol),
            which proves that the post-state root is the correct result of
            executing the batch. SNARK proves that this series of transactions
            is correctly approved and signed by the users and that the update of
            the account balance is correct from the previous Merkle root to the
            new Merkle root, so it is impossible for the relayer to submit an
            invalid or manipulated batch. As a result, ZK-Rollup is as safe as
            main chain on Ethereum.
          </p>
          <p>
            Besides, ZK-Rollup will greatly reduce the burden of layer1, because
            hundreds of transactions are compressed into one batch, and the only
            thing that the smart contract on the main chain needs to verify is
            the ZK-SNARK. In this way, not only the transaction speed will be
            improved, but also gas fees will be reduced considerably.
          </p>
          <h2 className="hover-dot">
            Advantages of ZK-Rollup
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            ZK-Rollup has absolute dominance in user experience, which can be
            concretely expressed as a high level of security, fast and economic
            transactions.
          </p>
          <p>
            The reason why ZK-Rollup comes as the first choice is its security.
            As mentioned above, every change in state during transaction must be
            verified by a rollup smart contract, before the state can be
            updated. That is to say, no one can manipulate the state of the
            transaction or forge an invalid state. Secondly, other popular
            solutions like Plasma and Validium don’t have the on-chain data
            availability, however, ZK-Rollup not only returns the transaction
            results to the main chain, but also attaches sufficient data
            (necessary transfer information) with the batch to guarantee the
            consistency of account states in both layer1 and layer2. Moreover,
            ZK-Rollup only depends on the censorship-resistance of the main
            chain for its liveness rather than its security, meaning that even
            the censorship attack on layer1 can not manipulate the state on
            layer2, further ensures the security of assets and accounts.
          </p>
          <p>
            In terms of user experience, apart from high TPS, there is no extra
            charge on every move happening on layer2 (for example, yield
            farming); in addition, uesers can share the gas fee when interacting
            with layer1 because the gas fee covers hundreds of transactions and
            is paid only once. More importantly, ZK-Rollup can reach the
            finality within several minutes, while in Optimistic Rollup with is
            based on Fraud Proof, there is a two-week Dispute Time Delay for
            stakeholders to challenge the correctness of the proof, meaning that
            assets need to be locked on the second layer for about two weeks.
            This DTD is replaced by ZK-SNARK in ZR-Rollup solution, which is
            based on validity proof and can guarantee authenticity and
            correctness of transactions and changes in state. Using ZK-Rollup,
            there is no need for users to experience the frustrating DTD, and
            assets can be returned to the layer1 and being withdrawed in
            minutes.
          </p>
          <p>
            Because of its high security, high TPS, low transactions fees, and
            short waiting time, ZK-Rollup is considered the best Layer2 scaling
            solution in the long run.
          </p>
          <h2 className="hover-dot">
            Why are there so few ZK-Rollup projects?
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Despite the fact that ZK-Rollup is well-known by blockchain players,
            there are only few applications which actually land: zkSync, as the
            first project to explore ZK-Rollup, is still waiting for its
            complete application on Layer2; Loopring has released the first
            ZK-Rollup scaling Dex on Ethereum; ZKSwap recently realized the swap
            on a single chain by using ZK-Rollup… It is easy to notice that
            among all the projects using ZK-Rollup technique, the latter is only
            implemented for some specific function points, lacking in a more
            general and thorough application.
          </p>
          <p>
            This is because the development of ZK-Rollup is much more difficult
            and code-intensive than Optimistic Rollup and any other Layer2
            scaling solutions. More advanced cryptographic knowledge, stronger
            coding capability, and longer development time are required to
            support the deployment of EVM. It takes time for ZK-Rollup to be
            fully compatible with EVMs, behind which is a higher standard for
            the team and capital.
          </p>
          <p>
            However, it can be expected that ZK-Rollup, as the safest and the
            most user-friendly scaling solution, will become the mainstream in
            the near future. Those fewer and better teams who can play with
            ZK-Rollup can be trusted to create more attractive applications with
            superior quality and sustainable development ability, firing up the
            second evolution for Ethereum and other public chains.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ZkRollup;
