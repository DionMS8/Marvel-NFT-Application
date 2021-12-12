import React from 'react'
// IMPORTING STYLESHEET
import "./Header.css"
// IMPORTING IMAGE FILES
import animeLogo from "../assets/header/animeLogo.png"
import searchIcon from "../assets/header/search.png"

// HEADER SHORTCUT: RAFCE + TAB 

// 1. CREATE A CONSTANT FOR THE COMPONENT
// 2. ASSIGN IT TO AN ARROW FUNCTION
// 3. RETURN THE COMPONENT
// 4. EXPORT THE COMPONENT

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
                <input className="searchInput" type="text" placeholder="Search"></input>
            </div>

        </div>
    )
}

export default Header






