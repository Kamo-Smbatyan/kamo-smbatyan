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
        <h3> Search by Technology Tags</h3>
        <div className="tag-grp">
          <span className="blog-tag">React.JS</span>
          <span className="blog-tag">Rust</span>
          <span className="blog-tag">SEO</span>
          <span className="blog-tag">Substrate</span>
          <span className="blog-tag">Solidity</span>
          <span className="blog-tag">EVM</span>
          <span className="blog-tag">ink</span>
          <span className="blog-tag">Tailwind CSS</span>
          <span className="blog-tag">Polkadot</span>
        </div>
      </div>
    </div>
  );
}

export default Blogindex;
