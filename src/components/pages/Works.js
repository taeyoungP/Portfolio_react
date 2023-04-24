import React from 'react';

function Works({ workNum, workTitle, workLink, gitHubLink }) {
    return (
        <div className="work" id={`work${workNum}`}>
            <a href={workLink} target="_blank" rel="noreferrer" className="projectLink"> </a>
            <span className="span_work">{workTitle}
                <a href={gitHubLink} target="_blank" rel="noreferrer"><i className="bi bi-github gitHubLink" ></i></a>
            </span>
        </div>
    );
}

export default Works;
