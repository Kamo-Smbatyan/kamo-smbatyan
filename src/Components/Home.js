import { useEffect } from "react";
import "./Components.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "Hylcore | Home";
    document.getElementsByTagName("META")[3].content =
      "I am a frontend | Blockchain Developer";
  }, []);

  return (
    <div className="home-pan">
      <div>
        <div className="home-grp">
          <h2 className="home-subtitle">
            <img
              src="/assets/gavin wood.jpg"
              alt="gavin wood picture"
              style={{
                width: "56px",
                height: "auto",
                borderRadius: "100%",
                marginRight: "10px",
                border: "2px solid #24cc85",
              }}
            />
            <div>
              Gavin Wood's Quote,
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  paddingLeft: "12px",
                }}
              >
                co-founder and former CTO of Ethereum, founder of Polkadot and
                Parity Technologies
              </span>
            </div>
          </h2>
          <h3 className="home-quote">
            "In software, we’re not constrained by physical reality; the only
            limits are the limits of our own imagination."
          </h3>
          <h3 className="home-quote">
            "The pace of innovation in the blockchain space is unlike anything
            we’ve seen before"
          </h3>
        </div>
        <div className="home-grp">
          <h2 className="home-subtitle">
            <img
              src="/assets/green-dot.svg"
              style={{ width: "12px" }}
              alt="green-dot"
            />{" "}
            React.JS
            <img
              src="/assets/react.png"
              alt="react logo"
              style={{
                width: "56px",
                height: "auto",
                borderRadius: "100%",
                marginRight: "10px",
              }}
            />
          </h2>
          <h3>The Secret Sauce for Awesome Web Apps</h3>
          <p>
            {" "}
            Reusability - Why reinvent the wheel when you can just copy-paste a
            component?
          </p>
          <p>
            Speed - React’s virtual DOM is so fast, it might as well have a
            cape.{" "}
          </p>
          <p>
            Flexibility - React bends, but never breaks—like a coding yoga
            master.{" "}
          </p>
          <p>
            {" "}
            Ecosystem - With React, there's a package for everything—because who
            doesn’t love a shortcut?
          </p>
          <p>
            React.JS is the superhero of web development, offering reusable
            components, lightning-fast performance, flexibility, and a vast
            ecosystem that makes building awesome web apps a breeze.
          </p>
        </div>
        <div className="home-grp">
          <h2 className="home-subtitle">
            <img
              src="/assets/green-dot.svg"
              style={{ width: "12px" }}
              alt="green-dot"
            />{" "}
            Rust & Substrate
            <img
              src="/assets/rust.png"
              alt="rust logo"
              style={{
                width: "56px",
                height: "auto",
                borderRadius: "100%",
                marginRight: "10px",
              }}
            />
            <img
              src="/assets/substrate.png"
              alt="substrate logo"
              style={{
                width: "56px",
                height: "auto",
                borderRadius: "100%",
                marginRight: "10px",
              }}
            />
          </h2>
          <h3>The Dream Team of Blockchain Development</h3>
          <p>
            Memory Safety - Rust keeps bugs at bay so you can code stress-free.
          </p>
          <p>Speed - Rust’s performance is lightning-fast—no compromises.</p>
          <p>
            Modularity - Substrate is your customizable blockchain LEGO set.
          </p>
          <p>
            Scalability - Substrate grows with your project, no matter the size.
          </p>
          <p>
            Rust and Substrate make blockchain development fast, safe, and fun,
            turning complex projects into scalable, bug-free, and customizable
            creations.
          </p>
        </div>

        {/* <p>
          You can check my Github account @{" "}
          <a href="https://github.com/khuramhaf">Github</a>
        </p>
        <p>
          Here is the link to my youtube channel{" "}
          <a href="https://www.youtube.com/channel/UCq11-ZWOpdxefM637LElxDg">
            YouTube
          </a>
        </p>

        <p style={{ fontSize: 20 }}>
          Contact me <br />
          Email: contact@musk-technology.com
          <br />
          Mob & whatsapp: +92 310 4864308
        </p> */}
      </div>
    </div>
  );
}

export default Home;
