import React, { useState, useEffect } from 'react';
import { Constants } from '../../Entities/Constants';
import DataService  from '../../Services/DataService';
import  ServicesList from './ServicesList'

function Services() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [props, setItems] = useState([]); 
    useEffect(() => {
        DataService.GetGenericCall(setItems,setError,setIsLoaded, Constants.Section_Service);
      }, []);
    return (
        <section id="services" class="services-mf pt-5 route">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title-box text-center">
                            <h3 class="title-a">
                                Services
                            </h3>
                            <p class="subtitle-a">
                                {props.subtitle}
                            </p>
                            <div class="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <ServicesList services={props.services} />
                </div>
            </div>
        </section>
    );
}

export default Services;