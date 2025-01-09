import React from "react"
import { NavLink } from "react-router-dom"

export default function MyProjects() {
    return (
        <div className="part2">
            <div className="menubar">
                    <div className="menubar1">
                        <NavLink className="menubar-btn1" to="/">get to know me</NavLink>
                    </div>
                    <div className="menubar2">
                        <NavLink className="menubar-btn" to="/">HOME</NavLink>
                        <NavLink className="menubar-btn" to="/aboutme">ABOUT ME</NavLink>
                    </div>
                </div>
                <h2 class="animate__animated animate__fadeInRight">My projects</h2>
                <div className="projects">
                    <a href="https://skisnjesko.com/" target="_blanc"><img src="./Pictures/ski.jpg" alt="ski site" /></a>
                </div>
        </div>
    )
}