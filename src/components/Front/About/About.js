import React, { useState, useEffect} from 'react';
import DataService from '../../../Services/DataService';
import { AboutUs } from '../../../Entities/Response';

function About() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [props, setItems] = useState({});
    useEffect(() => {
        //console.log(AboutUs);
        setItems(AboutUs);
        DataService.GetAbout(setItems, setError, setIsLoaded);
    }, []);
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
                                                <img src={props.image} className="img-fluid rounded b-shadow-a" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info">
                                                <p><span className="title-s">Name: </span> <span>{props.name}</span></p>
                                                <p><span className="title-s">Profile: </span> <span>{props.profile}</span></p>
                                                <p><span className="title-s">Email: </span> <span>{props.email}</span></p>
                                                <p><span className="title-s">Phone: </span> <span>{props.phone}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <p className="title-s">Skill</p>
                                        {
                                            props?.skills?.map((skill, index) => {
                                                return <div>
                                                    <span>{skill.skill}</span> <span className="pull-right">{skill.percentage}%</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ 'width': skill.percentage + '%' }}></div>
                                                    </div>
                                                </div>
                                            })}

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        {
                                            props?.aboutMe?.map((about, index) => {
                                                return (<p className="lead">
                                                    {about}
                                                </p>)
                                            })
                                        }
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