import React from "react";
import { useEffect } from "react";

function GemforgeTool() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="project-detail-header">
        <h1 className="dot-ttl">
         Gemforge Command Line Tool
          <img
            src="/assets/green-dot.svg"
            style={{ width: "12px" }}
            alt="green dot"
          />
        </h1>

        <img
          src="/assets/gemforge.webp"
          alt="Gemforge command line tool"
          className="project-detail-fv"
        />
        <div className="project-link-grp">
          <div className="project-link">
            <img src="/assets/icons/website.webp" alt="website" />
            <a className="doc-link" href="https://acria.network/">
              Website
            </a>
          </div>
          <div className="project-link">
            <img src="/assets/icons/github.webp" alt="github" />
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/polkadot-substrate-block-explorer"
            >
              Github
            </a>
          </div>
        </div>
        <p className="project-ttl-comment">
          Real-time multi-chain Explorer for Polkadot, Kusama, Rococo networks.
        </p>
        <div className="project-tag-grp tag-grp">
          <span className="blog-tag">Blockchain</span>
          <span className="blog-tag">Polkadot</span>
          <span className="blog-tag">Typescript</span>
        </div>
      </div>

      <div className="project-detail-description">
        <div>
          <h2 className="hover-dot">
            Project Overview
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <div className="subsocial-img-grp">
            <img src="/assets/polkadot.webp" alt="polkadot" />
            <img src="/assets/icons/kusama.svg" alt="kusama" />
          </div>
          <p>
            AcriaScan Explorer is a cutting-edge real-time multi-chain explorer
            designed specifically for the{" "}
            <a className="doc-link" href="https://docs.substrate.io/">
              {" "}
              Polkadot
            </a>
            ,{" "}
            <a className="doc-link" href="https://guide.kusama.network/">
              {" "}
              Kusama
            </a>
            , and{" "}
            <a
              className="doc-link"
              href="https://docs.rs/crate/rococo-runtime/latest"
            >
              {" "}
              Rococo
            </a>{" "}
            networks. Unlike traditional blockchain explorers, AcriaScan is the
            first of its kind to fully support Polkadot networks, providing
            users with a robust platform to monitor and analyze blockchain data
            across multiple networks.
          </p>
          <p>
            This project leverages a Python backend to fetch and process
            real-time blockchain data, ensuring that users have access to the
            most up-to-date information. The frontend is built using AngularJS,
            making AcriaScan a highly responsive and interactive platform.
            Additionally, Docker is utilized to streamline the deployment
            process, allowing for easy setup and scalability.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Key Features and Technologies
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            AcriaScan Explorer is built using a combination of powerful
            technologies that ensure its efficiency and reliability:
          </p>
          <ul>
            <li>
              <strong>Python Backend:</strong> Handles real-time data
              processing, fetching blockchain data from Polkadot, Kusama, and
              Rococo networks.
            </li>
            <li>
              <strong>AngularJS Frontend:</strong> Provides a dynamic and
              responsive user interface, allowing users to interact with
              blockchain data seamlessly.
            </li>
            <li>
              <strong>Docker:</strong> Simplifies the deployment process,
              enabling the application to run consistently across different
              environments.
            </li>
          </ul>
          <p>
            The explorer supports a wide range of functionalities, including
            searching for blocks and transactions, and retrieving detailed
            information from the supported networks. This makes AcriaScan an
            invaluable tool for developers, researchers, and anyone interested
            in monitoring the Polkadot ecosystem.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Setting Up the Project
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Setting up AcriaScan Explorer is straightforward, thanks to its use
            of Docker and Node.js. The following steps outline the process:
          </p>
          <h3>Prerequisites</h3>
          <p>
            Before deploying AcriaScan Explorer, ensure that the following
            packages are installed on your server:
          </p>
          <ul>
            <li>
              <strong>Docker:</strong>{" "}
              <code>sudo apt-get install docker.io</code>
            </li>
            <li>
              <strong>Node.js:</strong> <code>sudo apt-get install nodejs</code>
            </li>
            <li>
              <strong>Angular CLI:</strong>{" "}
              <code>sudo npm install -g @angular/cli</code>
            </li>
          </ul>
          <h3>Installation</h3>
          <p>Follow these steps to install and run the AcriaScan Explorer:</p>
          <ul>
            <li>
              <strong>Clone the Repository:</strong>{" "}
              <code>
                git clone https://github.com/Acria-Network/xplorerdot.git
              </code>
            </li>
            <li>
              <strong>Run Harvester:</strong>{" "}
              <code>cd harvester && docker-compose up --build</code>
            </li>
            <li>
              <strong>Run Explorer API:</strong>{" "}
              <code>cd explorer-api && docker-compose up --build</code>
            </li>
            <li>
              <strong>Run Explorer GUI:</strong>{" "}
              <code>cd explorer-gui && npm install && npm start</code>
            </li>
            <li>
              <strong>Build Docker Image for GUI:</strong>{" "}
              <code>docker build -t appui .</code>
            </li>
            <li>
              <strong>Run the GUI:</strong>{" "}
              <code>docker run -d --name appui -p 80:80 appui</code>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="hover-dot">
            Usage and Roadmap
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            AcriaScan Explorer can be used for searching blocks, transactions,
            and other critical data within the Polkadot, Kusama, and Rococo
            networks. Its real-time data processing capabilities make it an
            essential tool for anyone looking to gain insights into these
            blockchain networks.
          </p>
          <p>
            The project is continuously evolving, with a roadmap that includes
            new features and improvements. Users and developers are encouraged
            to contribute to the project by suggesting features or reporting
            issues on the GitHub repository.
          </p>
          <p>
            The open-source nature of AcriaScan Explorer makes it an excellent
            platform for collaboration, learning, and innovation within the
            blockchain community.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Contributing and License
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            Contributions are highly welcomed and appreciated. Developers can
            contribute by forking the project, creating feature branches, and
            submitting pull requests. The collaborative spirit of the
            open-source community drives the continued improvement and
            innovation of the AcriaScan Explorer.
          </p>
          <p>
            AcriaScan Explorer is distributed under the MIT License, which
            allows for extensive use, modification, and distribution while
            ensuring that the original creators are credited for their work.
          </p>
        </div>

        <div>
          <h2 className="hover-dot">
            Contact and Acknowledgements
            <img
              src="/assets/green-dot.svg"
              className="hover-dot-image"
              alt="green dot"
            />
          </h2>
          <p>
            For more information, visit the project repository:{" "}
            <a
              className="doc-link"
              href="https://github.com/hylcore-V/polkadot-substrate-block-explorer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default GemforgeTool;
