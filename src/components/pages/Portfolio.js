import React from 'react';
import Works from './Works';

export default function Portfolio() {
    return (
        <div>
            <div>
                <h3 id="Work">Work</h3>
                <div className="wrap renderpage">
                    <div className="work_content">
                        <Works workNum={0} workTitle="U-Fit" workLink="https://pure-savannah-65137.herokuapp.com" gitHubLink='https://github.com/sampaul10/Fitness-Tracker' />
                        <Works workNum={1} workTitle="Tech_Blog" workLink="https://guarded-waters-21251.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/Tech_Blog' />
                        <Works workNum={2} workTitle="Weather_Dashboard" workLink="https://taeyoungp.github.io/Weather_Dashboard/" gitHubLink='https://github.com/taeyoungP/Weather_Dashboard' />
                        <Works workNum={3} workTitle="CinEvents" workLink="https://jjsmith32199.github.io/UntitledGooseProject/" gitHubLink='https://github.com/jjsmith32199/UntitledGooseProject' />
                        <Works workNum={4} workTitle="TotoroBank" workLink="https://murmuring-escarpment-43025.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/TotoroBank' />
                        <Works workNum={5} workTitle="Note_Taker" workLink="https://frozen-badlands-02331.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/Note_Taker' />
                        <Works workNum={6} workTitle="JATE_Text_Editor" workLink="https://warm-peak-56584.herokuapp.com/" gitHubLink='https://github.com/taeyoungP/JATE_Text_Editor' />
                    </div>
                </div>
            </div>
        </div>
    );
};