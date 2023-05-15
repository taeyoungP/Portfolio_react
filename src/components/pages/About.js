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
                        &emsp;I graduated from Uconn in 2020. I studied computer science and have some coding background
                        (python, java, c++, c, and etc) but this is my first time learning web development.
                        I had worked as a technology analyst before but I decided to take Uconn Coding Boot Camp to have some
                        changes in my career path and to become a web developer.
                        In my idle time, I like to draw, cook, game, and build/fix things.
                        <br/><br/>
                        &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}