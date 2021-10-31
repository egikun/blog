import React from 'react'
import "../../styles/Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="menu-container">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>Services</p>
            </div>
            <div className="socmed-container">
                <img alt=".." className="socmed" src={"http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"} />
                <img alt=".." className="socmed" src={'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'} />
                <img alt=".." className="socmed" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"} />
            </div>
        </div>
    )
}

export default Footer
