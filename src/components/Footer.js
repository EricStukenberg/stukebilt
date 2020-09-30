


import React from 'react';
import '../styles/App.scss';
import {Link} from 'react-router-dom'


const Footer = () => {

    const handleSelected = () => {

    }
    
    return (
            <div>
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

export default Footer;