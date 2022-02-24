import React from 'react';
function ServicesList({ services }) {
    return (
        <>
            {
                services?.map((service, index) =>
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className={service.icon}></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">{service.title}</h2>
                                <p className="s-description text-center">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
        </>

    );
}

export default ServicesList;