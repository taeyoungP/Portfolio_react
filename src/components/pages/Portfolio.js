import React, { useEffect } from 'react';
import Works from './Works';
import '../../styles/scroll.css';
import { show } from '../../js/scroll.js';
//images
import IMAGE00 from '../../images/work0.PNG';
import IMAGE01 from '../../images/work1.PNG';
import IMAGE02 from '../../images/work2.PNG';
import IMAGE03 from '../../images/work3.PNG';
import IMAGE04 from '../../images/work4.PNG';
import IMAGE05 from '../../images/work5.PNG';
import IMAGE06 from '../../images/work6.PNG';

var work00DESC = "U-Fit is an fitness tracker web application that helps the user to track their workouts and provides guides on exercises.";
var work01DESC = "Tech Blog is a CMS-style blog site where user can publish their blog posts and comment on other user’s posts as well.";
var work02DESC = "Weather Dashboard is a weather forecast site where user can check today's date and 5 days forecast by searching the city name.";
var work03DESC = "CinEvents is a website to provide contemporaneous context for movies a user plans to watch.";
var work04DESC = "TotoroBank is a simulated bank website that appeals to the younger demographic, and provides a user friendly interface with ease of use that is both fun and easily navigable.";
var work05DESC = "Note Taker is a web application that can be used to write and save notes.";
var work06DESC = "J.A.T.E Text Editor is an application where user can create notes or code snippets with or without an internet connection with using Progressive Web Applications (PWA)";

export default function Portfolio() {
    useEffect(() => {
        // Call the show() function from show.js
        //console.log('useEffect is called');
        show();

        // Add an event listener for scroll
        window.addEventListener("scroll", show);

        // Optionally, return a cleanup function if needed
        return () => {
            // Cleanup code (if necessary)
            window.removeEventListener("scroll", show);
        };
    }, []);

    return (
        <div >
            <div>
                <div>
                    <h3 id="Work"><span className="material-symbols-outlined">psychiatry</span>Work</h3>
                    <div className="wrap renderpage">
                        <div className="work_content">

                            <div className="box">
                                <div className="section">
                                    <div className="div reveal active">
                                        <Works workNum={0} workTitle="U-Fit" workLink="https://pure-savannah-65137.herokuapp.com" gitHubLink='https://github.com/sampaul10/Fitness-Tracker' 
                                        img={IMAGE00} workDesc={work00DESC}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={1} workTitle="Tech_Blog" workLink="https://guarded-waters-21251.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/Tech_Blog' 
                                        img={IMAGE01} workDesc={work01DESC}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={2} workTitle="Weather_Dashboard" workLink="https://taeyoungp.github.io/Weather_Dashboard/" gitHubLink='https://github.com/taeyoungP/Weather_Dashboard' 
                                        img={IMAGE02} workDesc={work02DESC}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={3} workTitle="CinEvents" workLink="https://jjsmith32199.github.io/UntitledGooseProject/" gitHubLink='https://github.com/jjsmith32199/UntitledGooseProject' 
                                        img={IMAGE03} workDesc={work03DESC}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={4} workTitle="TotoroBank" workLink="https://murmuring-escarpment-43025.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/TotoroBank' 
                                        img={IMAGE04} workDesc={work04DESC}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={5} workTitle="Note_Taker" workLink="https://frozen-badlands-02331.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/Note_Taker' 
                                        img={IMAGE05} workDesc={work05DESC}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={6} workTitle="JATE_Text_Editor" workLink="https://warm-peak-56584.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/JATE_Text_Editor' 
                                        img={IMAGE06} workDesc={work06DESC}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>

    );
};