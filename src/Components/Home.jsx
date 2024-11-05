import { useEffect } from "react";
import "./Components.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "Portfolio | Home";
    document.getElementsByTagName("META")[3].content =
      "I am a frontend | AI | Blockchain Developer";
  }, []);

  return (
    <div className="home-pan">
      <div>
        <div style={{ paddingBottom: "28px" }}>
          <h2 className="glitch-title">
            <img src="/assets/blockchain brand.webp" alt="blockchain" />
          </h2>
          <div className="glitch-lines"></div>
          <p>
            Blockchain and decentralized tech are changing how we handle data and trust.
          </p>
          <p>
            They put control back in people's hands by removing the third party.
          </p>
          <p>These technologies make everything more transparent and secure.</p>
          <p>I'm excited to see how they shape our future.</p>
        </div>
        <div className="home-grp">
          <h2 className="home-subtitle home-rust-subttl">
            <div>
              <img
                src="/assets/green-dot.svg"
                style={{ width: "12px" }}
                alt="green-dot"
              />{" "}
              Rust & Substrate
            </div>
            <div>
              <img
                src="/assets/rust.webp"
                alt="rust logo"
                style={{
                  width: "56px",
                  height: "auto",
                  borderRadius: "100%",
                  marginRight: "10px",
                }}
              />
              <img
                src="/assets/substrate.webp"
                alt="substrate logo"
                style={{
                  width: "56px",
                  height: "auto",
                  borderRadius: "100%",
                  marginRight: "10px",
                }}
              />
            </div>
          </h2>
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
              src="/assets/react.webp"
              alt="react logo"
              style={{
                width: "56px",
                height: "auto",
                borderRadius: "100%",
                marginRight: "10px",
              }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
