import React, { useState, useEffect } from 'react';
import DataService from '../../Services/DataService';
import { Constants } from '../../Entities/Constants';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


function TestimonialSlider() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [props, setItems] = useState([]);
    useEffect(() => {
        DataService.GetGenericCall(setItems, setError, setIsLoaded, Constants.Section_Testimonial);
    }, []);

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        arrows: false,
        indicators: true
    };

    return (
        <div class="testimonials paralax-mf bg-image" style={{ backgroundImage: "url(" + props?.bg + ")" }}>
            <div class="overlay-mf"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                            <div class="swiper-wrapper">
                                {
                                   props?.items?.length > 0 ? 
                                    <Slide  {...properties}>
                                        {
                                            props?.items?.map((testimonial, index) => (
                                                <div data-index={index} key={index} className="swiper-slide">
                                                    <div className="testimonial-box">
                                                        <div class="author-test">

                                                            <img src={testimonial.image} alt="" class="rounded-circle b-shadow-a" />
                                                            <span className="author">{testimonial.name}</span>

                                                        </div>
                                                        <div className="content-test">
                                                            <p className="description lead">
                                                                {testimonial.testimonial}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </Slide> :null
                                }
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default TestimonialSlider;