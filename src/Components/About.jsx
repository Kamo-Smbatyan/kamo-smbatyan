import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Hylcore | About";
    document.getElementsByTagName("META")[3].content = "about me";
  }, []);
  return (
    <div className="about-pan">
      <div className="about-main">
        <h1>
          🌟{" "}
          <span className="gradient-text">
            {" "}
            Shaping the Future, One Line of Code at a Time
          </span>
        </h1>
        <p>
          I’m{" "}
          <strong style={{ fontSize: "24px", color: "var(--black)" }}>
            {" "}
           Kamo Smbatyan
          </strong>{" "}
          with a passion for precision, constantly pushing the limits of full-stack and blockchain tech.</p> 
        <p>
          <strong style={{ fontSize: "24px", color: "var(--black)" }}>
           <img src="./assets/rust.webp" className="about-logo" alt="rust" /> Rust
          </strong>{" "}
          and{" "}
          <strong style={{ fontSize: "24px", color: "var(--black)" }}>
           <img src="/assets/substrate.webp" className="about-logo" alt="substrate" /> Substrate
          </strong>{" "}
          have reshaped how I see blockchain, revealing the power of
          decentralized systems. <br /> I’m focused on building secure, scalable
          solutions that are ready for tomorrow.
        </p>

        <p> My craft is all about creating
          dynamic user experiences with{" "}
          <strong style={{ fontSize: "24px", color: "#00d8ff" }}> <img src="./assets/react.webp" className="about-logo" alt="React logo" /> React</strong>
          —a tool that’s second nature to me.
        </p>   
      
        <p>
          Blockchain is the key to the next era of innovation, and I’m here to
          lead that charge. <br /> Every line of code I write is a step toward a
          smarter, more connected future.
        </p>
      </div>
    </div>
  );
}

export default About;
