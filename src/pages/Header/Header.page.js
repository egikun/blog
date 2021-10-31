import React from 'react'
import "../../styles/Header.css"

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img alt=".." 
                    src={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'}
                />
            </div>
            <div className="navbar-container">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>Services</p>
            </div>
        </div>
    )
}

export default Header
