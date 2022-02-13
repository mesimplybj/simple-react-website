import React from 'react';
function About({ props }) {
    const skills = props.Skills.map((skill, index) =>
        <>
            <span>{skill.Skill}</span> <span className="pull-right">{skill.Percentage}%</span>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ 'width': skill.Percentage +'%' }}></div>
            </div>
        </>
    )
    const aboutme = props.AboutMe.map((about, index) =>
            <p className="lead">
                {about}
            </p>
    )
    return (
        <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src={props.Image} className="img-fluid rounded b-shadow-a" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info">
                                                <p><span className="title-s">Name: </span> <span>{props.Name}</span></p>
                                                <p><span className="title-s">Profile: </span> <span>{props.Profile}</span></p>
                                                <p><span className="title-s">Email: </span> <span>{props.Email}</span></p>
                                                <p><span className="title-s">Phone: </span> <span>{props.Phone}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <p className="title-s">Skill</p>
                                        {skills}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        {aboutme}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;