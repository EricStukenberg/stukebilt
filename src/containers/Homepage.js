import React from 'react';
import { Router, Route, Switch } from "react-router";
import { useHistory } from 'react-router-dom';

import '../styles/App.scss';


const Homepage = () => {
    return (
        <div>

            <main>

                <section class="titles-section">
                    <div class="content-wrapper">

                        <div class="titles">
                            <h2>Stukebilt Services</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, itaque.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>

                </section>
                <section class="services-section">
                    <div class="content-wrapper">
                        <div class="services-wrapper">

                            <div class="services">
                                <div class="service-icon-circle">
                                    <div class="service-icon">𝒞<i class="far fa-comment"></i>
                                    </div>
                                </div>
                                <h3>Contacts</h3>
                                <div class="services-paragraph">
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

                            <div class="services">
                                <div class="service-icon-circle">
                                    <div class="service-icon">𝓲<i class="fas fa-code"></i>
                                    </div>
                                </div>
                                <h3>About</h3>
                                <div class="services-paragraph">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum? Nihil aperiam nisi officiis
                                    quidem exercitationem odio? Cum consectetur officia nulla mollitia. Repellendus aspernatur.
                                    </p>
                                </div>
                            </div>

                            <div class="services">
                                <div class="service-icon-circle">
                                    <div class="service-icon">𝒮<i class="far fa-chart-bar"></i>
                                    </div>
                                </div>
                                <h3>Services</h3>
                                <div class="services-paragraph">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio nobis totam harum necessitatibus
                                    explicabo similique odit nemo. Repellendus, similique. Blanditiis voluptatibus iure.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <footer class="footer-section">
                <div class="content-wrapper">
                    <div class="footer-wrapper">

                    <div class="left-footer">
                        <div class="company-information">
                        <h2>Stukebilt LLC.</h2>
                        <address>
                            3836 42nd Ave NE
                            Seattle
                            WA 98105
                            Want a website? Contact me at:
                            ericstukenbergWebDev@outlook.com
                        </address>
                        <p>Copyright &copy; 2020 Stukebilt LLC</p>
                        </div>

                        <nav class="footer-nav">
                            
                            <h3>Links</h3> 
                            <ul>
                                <li><a href="#">Properties</a></li>
                                <li><a href="#">Rent Payment Portal</a></li>

                            </ul>
                        </nav>
                    </div>

                    <div class="contact">
                        <div class="forms">
                            <h3>Tenants</h3>
                            <button>Download Forms</button>
                        </div>
                    </div>

                    </div>
                </div>
            </footer>
         </div>      

    );
};

export default Homepage;
