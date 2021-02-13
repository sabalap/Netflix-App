import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
    const [show, setShow] = useState(false)
    function navShow() {
        if (window.scrollY > 100) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", navShow)
    }, [])
    return (
        <div className={`nav ${show && "showBlack"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix avatar"
            />
        </div>
    )
}
export default Nav;