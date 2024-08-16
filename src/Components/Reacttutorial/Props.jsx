import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Tutorialinside.css'


function Props() {
    useEffect(()=>{
        document.title="Portfolio | Block Explorer"
      document.getElementsByTagName("META")[3].content="React is a component based Javascript library for building user interfaces.";
    
      document.documentElement.scrollTop = 0;
    
    }, [])

      const navigate = useNavigate()
      function myfun1(){
        navigate("/portfolio/state-in-react")
      }
      function myfun2(){
        navigate("/portfolio/component-life-cycle")
      }
      function toDetailPage(domain) {
        navigate(`${domain}`);
      }
     return(
<div>
  <div className="projects-grp">
  <div
        className="projects-overview"
        onClick={() => toDetailPage("/portfolio/acria-scan-explorer")}
      >
        <img
          src="/assets/acria.png"
          className="portfolio-fv"
          alt="AcriaScan Explorer"
        />
        <div className="project-overview-sub">
          <h2>AcriaScan Explorer</h2>
          <p>
            Real-time multi-chain Explorer for Polkadot, Kusama, Rococo
            networks.
          </p>
        </div>
      </div>
  </div>
</div>
     );
}

export default Props;