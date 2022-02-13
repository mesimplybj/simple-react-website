import React from 'react';
import  ServicesList from './ServicesList'
function Services({props}) {
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
                                {props.Subtitle}
                            </p>
                            <div class="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <ServicesList services={props.Services} />
                </div>
            </div>
        </section>
    );
}

export default Services;