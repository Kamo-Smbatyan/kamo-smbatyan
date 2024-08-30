import React from "react";

function Blogindex() {
  return (
    <div className="blog-main">
        <div className="blog-ttl">
      <h1>
        👋<span className="gradient-text"> Welcome To My Blog!</span>
      </h1>
      <h3 style={{ fontWeight: "400" }}>
        <span style={{ fontSize: "28px" }}> A space</span> where innovation
        meets inspiration. <br /> <br />
        Here, we explore the cutting-edge trends, creative ideas, and expert
        insights that shape our industry.
        <br /> <br />
        Whether you're looking for fresh perspectives or deep dives into the
        latest developments, you'll find it all right here. <br /> <br />
        Join us as we share stories that spark curiosity and drive success.
        <br />
      </h3>
      </div>
      <div>
        <h3> Technology Tags</h3>
        <div className="tag-grp">
          <span className="frontend-tag blog-tag">React.JS</span>
          <span className="rust-tag blog-tag">Rust</span>
          <span className="frontend-tag blog-tag">SEO</span>
          <span className="substrate-tag blog-tag">Substrate</span>
          <span className="eth-tag blog-tag">Solidity</span>
          <span className="eth-tag blog-tag">EVM</span>
          <span className="blog-tag">ink</span>
          <span className="blog-tag">ZK-rollup</span>
          <span className="blog-tag">Bridge</span>
          <span className="frontend-tag blog-tag">Tailwind CSS</span>
          <span className="blog-tag">Layer2</span>
          <span className="polkadot-tag blog-tag">Polkadot</span>
          <span className="blog-tag">Offchain</span>
        </div>
      </div>
    </div>
  );
}

export default Blogindex;
