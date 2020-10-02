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
                            <Link onClick={props.selectItem("home")} className={(props.selected === "home") ? "selected-page" : "link"} to="/" >Home</Link>
                            <Link onClick={props.selectItem("home")} className={(props.selected === "properties") ? "selected-page" : "link"} to="/properties" >Properties</Link>

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