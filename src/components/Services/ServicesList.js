import React from 'react';
function ServicesList({ services }) {
    return (
        <>
            {
                services.map((service, index) =>
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className={service.Icon}></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">{service.Title}</h2>
                                <p className="s-description text-center">
                                    {service.Description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
        </>

    );
}

export default ServicesList;