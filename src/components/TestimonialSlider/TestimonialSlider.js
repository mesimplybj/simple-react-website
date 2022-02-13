import React from 'react';


function TestimonialSlider({ props }) {
    return (
        <div class="testimonials paralax-mf bg-image" style={{ backgroundImage: "url(" + props.BG + ")" }}>
            <div class="overlay-mf"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                            <div class="swiper-wrapper">
                                {
                                    props.Items.map((testimonial, index) =>
                                        <div class="swiper-slide">
                                            <div class="testimonial-box">
                                                <div class="author-test">
                                                    <img src={testimonial.Image} alt="" class="rounded-circle b-shadow-a" />
                                                    <span class="author">{testimonial.Name}</span>
                                                </div>
                                                <div class="content-test">
                                                    <p class="description lead">
                                                        {testimonial.Testimonial}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )                                }
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSlider;