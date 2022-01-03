import React from 'react'
// IMPORTING STYLESHEET
import "./Header.css"
// IMPORTING IMAGE FILES
import animeLogo from "../assets/header/animeLogo.png"
import searchIcon from "../assets/header/search.png"
import themeSwitchIcon from "../assets/header/theme-switch.png"

// COMPONENT SHORTCUT: RAFCE + TAB 

// 1. CREATE A CONSTANT FOR THE COMPONENT
// 2. ASSIGN IT TO AN ARROW FUNCTION
// 3. RETURN THE COMPONENT
// 4. CREATE A DIV WITH A CLASSNAME OF THE NAME OF THE COMPONENT
// 5. EXPORT THE COMPONENT

const Header = () => {
    return (
        <div className="header">

            <div className="logoContainer">
                <img className="animeLogo" src={animeLogo} alt="logo" />
            </div>

            <div className="searchContainer">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="search"></img> 
                </div>
                <input className="searchInput" type="text" placeholder="Collection, item or user..."></input>
            </div>

            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src={themeSwitchIcon} alt="theme-switch"/>
                </div>
            </div>

            <div className="loginBtn">GET IN</div>

        </div>
    )
}

export default Header




