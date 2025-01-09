import React from "react"
import { NavLink } from "react-router-dom"

export default function AboutMe() {
    return (
        <div className="part2">
            <div className="menubar">
                    <div className="menubar1">
                        <NavLink className="menubar-btn1" to="/">get to know me</NavLink>
                    </div>
                    <div className="menubar2">
                        <NavLink className="menubar-btn" to="/">HOME</NavLink>
                        <NavLink className="menubar-btn" to="/myprojects">MY PROJECTS</NavLink>
                    </div>
                </div>
                <div className="main-about">
                    <div className="about1">
                        <img src="./Pictures/me.jpg" alt="me"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi in urna faucibus consectetur sit amet non leo. Pellentesque pretium, ligula sit amet vulputate vulputate, nulla orci tempor diam, tristique iaculis neque justo sit amet diam. Vestibulum id interdum mauris. Sed vel mauris eget enim feugiat rutrum. Vivamus lectus turpis, lacinia vitae enim non, ultricies vehicula ante. Nullam gravida, augue vel auctor vulputate, nulla nibh condimentum lacus, sit amet laoreet leo massa sit amet est. Fusce tincidunt urna ac est malesuada gravida. Sed facilisis eu libero quis tempus.</p>
                    </div>
                    <div className="about2">

                    </div>
                </div>
        </div>
    )
}