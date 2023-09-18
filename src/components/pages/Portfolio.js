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

export default function Portfolio() {
    useEffect(() => {
        // Call the show() function from show.js
        console.log('useEffect is called');
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
                    <h3 id="Work"><span class="material-symbols-outlined">psychiatry</span>Work</h3>
                    <div className="wrap renderpage">
                        <div className="work_content">

                            <div className="box">
                                <div className="section">
                                    <div className="div reveal active">
                                        <Works workNum={0} workTitle="U-Fit" workLink="https://pure-savannah-65137.herokuapp.com" gitHubLink='https://github.com/sampaul10/Fitness-Tracker' img={IMAGE00} />
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={1} workTitle="Tech_Blog" workLink="https://guarded-waters-21251.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/Tech_Blog' img={IMAGE01}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={2} workTitle="Weather_Dashboard" workLink="https://taeyoungp.github.io/Weather_Dashboard/" gitHubLink='https://github.com/taeyoungP/Weather_Dashboard' img={IMAGE02}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={3} workTitle="CinEvents" workLink="https://jjsmith32199.github.io/UntitledGooseProject/" gitHubLink='https://github.com/jjsmith32199/UntitledGooseProject' img={IMAGE03}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={4} workTitle="TotoroBank" workLink="https://murmuring-escarpment-43025.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/TotoroBank' img={IMAGE04}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={5} workTitle="Note_Taker" workLink="https://frozen-badlands-02331.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/Note_Taker' img={IMAGE05}/>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="div reveal">
                                        <Works workNum={6} workTitle="JATE_Text_Editor" workLink="https://warm-peak-56584.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/JATE_Text_Editor' img={IMAGE06}/>
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