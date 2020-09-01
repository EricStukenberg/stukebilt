import React from 'react';
import '../App.scss';

const Homepage = () => {
    return (
        <div>
            <header class="header-section">
                <div class="content-wrapper">

                    <div class="header-wrapper">

                        <div class="header-left">
                            <h1>Stukebilt</h1>
                        </div>

                        <div class="header-right">
                            <nav class="header-nav">
                            <ul>
                                <li><a href="#" class="selected-page">Home</a></li>
                                <li><a href="#">Properties</a></li>

                                <li><a href="#">Rent Payment Portal</a></li>
                            </ul>
                            </nav>
                        </div>

                    </div>

                </div>
            </header>

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
                                    <div class="service-icon"><i class="far fa-comment"></i>
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
                                    <div class="service-icon"><i class="fas fa-code"></i>
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
                                    <div class="service-icon"><i class="far fa-chart-bar"></i>
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
                            Seattle View
                            WA 94043
                            00-000-0000
                            sunrise@sunrise.io
                        </address>
                        <p>Copyright &copy; 2020 Stukebilt LLC</p>
                        </div>

                        <nav class="footer-nav">
                            <ul>
                                <li><a href="#" class="selected-page">Links</a></li>
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
