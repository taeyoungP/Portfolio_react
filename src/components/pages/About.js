import React from "react";
import profileImage from '../../images/profile.jpg';


export default function About() {
    return (
        <div>
            <h3 id="About-Me">About Me</h3>
            <div className="wrap renderpage">
                <div id="wrap_profile">
                    <img id="profile" src={profileImage} alt="profile.jpg"/>
                    <p>
                        <span id="hello">Hello! My name is Taeyoung Park.</span><br/>
                        &emsp;I graduated from Uconn in 2020. I studied computer science and have learned
                        (python, java, c++, c, and etc). <br/><br/>
                        &emsp;I transitioned from a role as a technology analyst to 
                        pursue a more creative career path, where I discovered my passion for web development. 
                        With a strong interest in both front-end and back-end development, 
                        I started learning and acquiring skills in web development, 
                        and I am committed to continuously improving my abilities in this field while staying up-to-date with the latest technologies.<br/><br/>

                        &emsp;In my idle time, I like to draw, cook, game, and build or fix things.
                        <br/><br/>
                    </p>
                </div>
            </div>
        </div>
    );
}