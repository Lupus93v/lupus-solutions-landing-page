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
            <h1>MY PROJECTS</h1>
        </div>
    )
}