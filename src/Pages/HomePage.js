import React from "react"
import { NavLink } from "react-router-dom"
import 'animate.css';

export default function HomePage() {

    const styles = {
        width: "30px",
        height: "30px",
        border: "2px solid white",
        borderRadius: "5px",
    }

    return (
        <div className="homepage">
            <div className="part1">
                <div className="menubar">
                    <div className="menubar1">
                        <NavLink className="menubar-btn1" to="/">get to know me</NavLink>
                    </div>
                    <div className="menubar2">
                        <NavLink className="menubar-btn" to="/aboutme">ABOUT ME</NavLink>
                        <NavLink className="menubar-btn" to="/myprojects">MY PROJECTS</NavLink>
                    </div>
                </div>
                <div className="main">
                    <div className="main-content">
                        <h2 class="animate__animated animate__backInLeft">
                            Hi, I am <span style={{color:"orange"}}>Aleksandar</span>.
                        </h2>
                        <button class="animate__animated animate__fadeInUpBig" >CONTACT ME</button>
                    </div>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D0%B0%D1%80-%D1%81%D0%B0%D0%BD%D1%82%D1%80%D0%B0%D1%87-422b2a333/" target="_blanc"><img class="animate__animated animate__fadeInDownBig" style={styles} src="./Pictures/linkedin.png" /></a>
                        <a href="https://www.upwork.com/freelancers/~01bf6cab701172f0de" target="_blanc"><img class="animate__animated animate__fadeInDownBig" style={styles} src="./Pictures/upwork.png" /></a>
                        <a href="https://www.fiverr.com/aleksandar_san/buying?source=avatar_menu_profile" target="_blanc"><img class="animate__animated animate__fadeInDownBig" style={styles} src="./Pictures/fiverr.png" /></a>
                        <a href="https://github.com/Lupus93v" target="_blanc"><img class="animate__animated animate__fadeInDownBig" style={styles} src="./Pictures/github.png" /></a>
                    </div>
                </div>
            </div>
            <div className="part2">

            </div>
        </div>
    )
}