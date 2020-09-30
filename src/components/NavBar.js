import React from 'react';
import '../styles/App.scss';
import {Link} from 'react-router-dom'


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
                            <li><Link  to="/" class="selected-page">Home</Link></li>
                            <li><Link to="/properties">Properties</Link></li>

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