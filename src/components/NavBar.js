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
                            <Link to="/" onClick={() =>props.selectItem("home")} className={(props.selected === "home") ? "selected-page" : "link"} >Home</Link>
                            <Link to="/properties" onClick={() => props.selectItem("properties")} className={(props.selected === "properties") ? "selected-page" : "link"} >Properties</Link>
                            <Link onClick={() =>props.selectItem("rent")} className={(props.selected === "rent") ? "selected-page" : "link"}>Rent Payment Portal</Link>
                        </ul>
                        </nav>
                    </div>

                </div>

            </div>
        </header>
        
    );
};

export default NavBar;