import React from 'react';

export default function Portfolio() {
    return (
        <div>
            <div>
                <h3 id="Work">Work</h3>
                <div className="wrap">

                    <div className="work_content">
                    <div className="work" id="work1">
                        <a href="https://guarded-waters-21251.herokuapp.com/" target="_blank" rel="noreferrer" className="projectLink"> </a>
                        <span className="span_work">Tech_Blog
                            <a href='https://github.com/taeyoungP/Tech_Blog' target="_blank" rel="noreferrer"><i className="bi bi-github gitHubLink" ></i></a>
                        </span>        
                    </div>
                        <div className="work" id="work2">
                            <a href="https://taeyoungp.github.io/Weather_Dashboard/" target="_blank" rel="noreferrer" className="projectLink"> </a> 
                            <span className="span_work">Weather_Dashboard
                                <a href='https://github.com/taeyoungP/Weather_Dashboard' target="_blank" rel="noreferrer"><i className="bi bi-github gitHubLink"></i></a>
                                </span>     
                        </div>
                        <div className="work" id="work3">
                            <a href="https://jjsmith32199.github.io/UntitledGooseProject/" target="_blank" rel="noreferrer" className="projectLink"> </a>
                                <span className="span_work">CinEvents
                                <a href='https://github.com/jjsmith32199/UntitledGooseProject' target="_blank" rel="noreferrer"><i className="bi bi-github gitHubLink"></i></a>
                                </span>
                        </div>
                        <div className="work" id="work4">
                            <a href="https://murmuring-escarpment-43025.herokuapp.com/" target="_blank" rel="noreferrer" className="projectLink"> </a>
                                <span className="span_work">TotoroBank
                                <a href='https://github.com/taeyoungP/TotoroBank' target="_blank" rel="noreferrer"><i className="bi bi-github gitHubLink"></i></a>
                                </span>
                        </div>
                        <div className="work" id="work5">
                            <a href="https://frozen-badlands-02331.herokuapp.com/" target="_blank" rel="noreferrer" className="projectLink"> </a>
                                <span className="span_work">Note_Taker
                                <a href='https://github.com/taeyoungP/Note_Taker' target="_blank" rel="noreferrer"><i className="bi bi-github gitHubLink"></i></a>
                                </span>
                        </div>
                        <div className="work" id="work6">
                            <a href="https://warm-peak-56584.herokuapp.com/" target="_blank" rel="noreferrer" className="projectLink"> </a>
                                <span className="span_work">JATE_Text_Editor
                                <a href='https://github.com/taeyoungP/JATE_Text_Editor' target="_blank" rel="noreferrer"><i className="bi bi-github gitHubLink"></i></a>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};