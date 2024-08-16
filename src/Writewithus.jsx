import React, { useState, useEffect } from "react";

function Writewithus() {
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
            Shaping the Future, <br /> One Line of Code at a Time
          </span>
        </h1>
        <p>
          I’m{" "}
          <strong style={{ fontSize: "24px", color: "var(--black)" }}>
            {" "}
         <img src="/logo192.png" className="about-logo" alt="hylcore" />   Hylcore
          </strong>{" "}
          with a passion for precision, constantly pushing the limits of
          front-end and blockchain tech. <br /> My craft is all about creating
          dynamic user experiences with{" "}
          <strong style={{ fontSize: "24px", color: "#00d8ff" }}> <img src="./assets/react.png" className="about-logo" alt="" /> React</strong>
          —a tool that’s second nature to me.
        </p>
        <p>
          <strong style={{ fontSize: "24px", color: "var(--pink)" }}>
           <img src="./assets/polkadot.png" className="about-logo" alt="polkadot" /> Polkadot
          </strong>{" "}
          and{" "}
          <strong style={{ fontSize: "24px", color: "var(--black)" }}>
           <img src="/assets/substrate.png" className="about-logo" alt="substrate" /> Substrate
          </strong>{" "}
          have reshaped how I see blockchain, revealing the power of
          decentralized systems. <br /> I’m focused on building secure, scalable
          solutions that are ready for tomorrow.
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

export default Writewithus;
