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
                
            </main>

         </div>      

    );



};

export default Homepage;
