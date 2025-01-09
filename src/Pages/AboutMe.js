import React from "react"
import { NavLink } from "react-router-dom"
import 'animate.css';

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
            <h2 class="animate__animated animate__fadeInRight">About me</h2>
            <div className="main-about">
                <div className="about1">
                    <img class="animate__animated animate__fadeInLeft" src="./Pictures/me.jpg" alt="me" />
                    <p>I am a highly adaptable and motivated professional with a diverse background in law enforcement, martial arts, and programming. I completed my education in Novi Grad, including high school with a focus on general studies, followed by two years of law studies at the University of Banja Luka. In 2017, I graduated from the Police Academy and began my career as a police officer in Prijedor.

                        Although I am satisfied with my current job, I have always wanted to explore my full potential and challenge myself in new areas. Programming, which was once just a distant aspiration, has now become an exciting challenge where I am determined to excel.
                        In March of 2024 year, I started a programming course on the SCRIMBA platform and successfully completed it in October. During the course, I became proficient in working with JavaScript, HTML, CSS, React, as well as using tools such as Figma and GitHub. This course provided me with a solid foundation in front-end development and allowed me to apply the acquired knowledge through various projects.

                        In addition to programming, I have been practicing karate since 2005, earning my black belt in 2013, and working as a seasonal ski instructor since 2016. I also maintain my fitness through running and strength training. My ability to quickly adapt and learn is one of my key strengths, both in my professional life and in personal development.

                        My personal qualities include quick problem-solving, adaptability, and persistence. I am approachable, communicative, and eager to take on new challenges and learn new skills.</p>
                </div>
                <div className="about2">
                    <div>
                        <p>What You Get If You Hire</p><br />
                        <p><span>Me A Fast Learner:</span> My adaptability and determination allow me to quickly learn and master new skills, tools, and technologies, ensuring I stay up-to-date in the fast-evolving tech industry.</p>
                        <p><span>Problem-Solving Expertise</span>: With my experience in law enforcement and programming, I have honed a keen ability to analyze challenges, think critically, and develop effective solutions under pressure.</p>
                        <p><span>Collaboration and Communication:</span> My approachable and communicative nature makes me a great team player who can collaborate effectively, contribute ideas, and maintain a positive work environment.</p>
                        <p><span>Diverse Skill Set:</span> My unique combination of technical skills (JavaScript, React, HTML, CSS, GitHub, Figma) and discipline from martial arts and law enforcement allows me to bring a well-rounded, results-driven approach to projects.</p>
                        <p><span>Reliability and Work Ethic:</span> Whether as a police officer, a seasonal ski instructor, or a developer, I always deliver my best, balancing attention to detail with a strong commitment to deadlines and goals.</p>
                        <p><span>A Drive for Excellence:</span> I am constantly striving to exceed expectations, refine my skills, and grow both professionally and personally, ensuring I deliver high-quality results in every task I undertake.</p>
                </div>
                <img class="animate__animated animate__fadeInRight" src="./Pictures/coding.jpg" alt="descritive pic" />
            </div>
        </div >
        </div >
    )
}