import React from 'react';
import '../styles/App.scss';

const NavBar = () => {

    const handleSelected = () => {

    }
    
    return (

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
        
    );
};

export default NavBar;