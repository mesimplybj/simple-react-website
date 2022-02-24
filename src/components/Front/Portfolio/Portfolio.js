import React, { useState, useEffect } from 'react';
import DataService  from '../../../Services/DataService';
import {Constants} from '../../../Entities/Constants';
import PortFolioList from './PortfolioList';

//Constants

function Portfolio() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [props, setItems] = useState([]); 
  useEffect(() => {
      DataService.GetGenericCall(setItems,setError,setIsLoaded,Constants.Section_Portfolio);
    }, []);


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
                {props?.subTitle}
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <PortFolioList portfolioList={props?.portfolioList} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;