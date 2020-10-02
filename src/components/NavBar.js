import React from 'react';
import '../styles/App.scss';
import {Link} from 'react-router-dom'


const NavBar = (props) => {
    console.log(props)
    // const handleSelected = () => {

    // }
    
    return (

        <header className="header-section">
            <div className="content-wrapper">

                <div className="header-wrapper">

                    <div className="header-left">
                        <h1>Stukebilt</h1>
                    </div>

                    <div className="header-right">
                        <nav className="header-nav">
                        <ul>
                            <li><Link  to="/" onClick={props.selectItem("home")} className={(props.selected === "home") ? "selected-page" : ""}>Home</Link></li>
                            <li><Link to="/properties" onClick={props.selectItem("home")} className={(props.selected === "properties") ? "selected-page" : ""}>Properties</Link></li>

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