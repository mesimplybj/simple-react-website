import React from 'react';
import PortFolioList from './PortfolioList';
function Portfolio({ props }) {
  return (
    <section id="work" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Portfolio
              </h3>
              <p class="subtitle-a">
                {props.SubTitle}
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <PortFolioList portfolioList={props.PortfolioList} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;