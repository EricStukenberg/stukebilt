import React from 'react';
import { Router, Route, Switch } from "react-router";
import { useHistory } from 'react-router-dom';

import '../styles/App.scss';


const Homepage = () => {
    return (
        <div>

            <main>

                <section className="titles-section">
                    <div className="content-wrapper">

                        <div className="titles">
                            <h2>Stukebilt Services</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, itaque.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>

                </section>
                <section className="services-section">
                    <div className="content-wrapper">
                        <div className="services-wrapper">

                            <div className="services">
                                <div className="service-icon-circle">
                                    <div className="service-icon">𝒞<i className="far fa-comment"></i>
                                    </div>
                                </div>
                                <h3>Contacts</h3>
                                <div className="services-paragraph">
                                    <p>
                                    <ul>
                                        <li>JohnSmith@email</li>
                                        <br></br>
                                        <li>(123) 456-7890</li>
                                        <br></br>
                                        <li>1234 P.O. Box 123 </li>
                                    </ul>
                                    </p>
                            
                                </div>
                            </div>

                            <div className="services">
                                <div className="service-icon-circle">
                                    <div className="service-icon">𝓲<i className="fas fa-code"></i>
                                    </div>
                                </div>
                                <h3>About</h3>
                                <div className="services-paragraph">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum? Nihil aperiam nisi officiis
                                    quidem exercitationem odio? Cum consectetur officia nulla mollitia. Repellendus aspernatur.
                                    </p>
                                </div>
                            </div>

                            <div className="services">
                                <div className="service-icon-circle">
                                    <div className="service-icon">𝒮<i className="far fa-chart-bar"></i>
                                    </div>
                                </div>
                                <h3>Services</h3>
                                <div className="services-paragraph">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio nobis totam harum necessitatibus
                                    explicabo similique odit nemo. Repellendus, similique. Blanditiis voluptatibus iure.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
         </div>      

    );
};

export default Homepage;
