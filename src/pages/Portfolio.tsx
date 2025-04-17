import React from "react";
import PortfolioContainer from "../components/PortfolioContainer";

function Portfolio() {
  return (
    <div className="section-container" id="portfolio">
      <div className="section-header">
        <h2 className="heading-text">Portfolio.</h2>
        <div className="line"></div>
      </div>
      <PortfolioContainer/>

      <div className="btn-view-more-container">
        <a className="btn-view-more" href="https://github.com/yeikol2703?tab=repositories">View More</a>
      </div>
    </div>
  );
}

export default Portfolio;
