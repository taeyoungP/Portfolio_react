import React, { useEffect } from 'react';
import '../../styles/work.css';
import hover from '../../js/work.js';

function Works({ workNum, workTitle, workLink, gitHubLink, img }) {
    useEffect(() => {
        // Call the addHoverListener function when the component mounts
        hover();

        return () => {
          // Cleanup code (if necessary)
        };
      }, []);
    return (
        /*<div className="work" id={`work${workNum}`}>
            <a href={workLink} target="_blank" rel="noreferrer" className="projectLink"> 
            <span className="span_work">{workTitle}
                <a href={gitHubLink} target="_blank" rel="noreferrer"><i className="bi bi-github gitHubLink" ></i></a>
            </span>
            </a>
            
        </div>*/
        <div>
            <figure className="snip1193 hover" id={workNum}>
                <img src={img} alt="project_image" />
                <figcaption>
                    <h4 className="workTitle">{workTitle}</h4>
                    <a href={workLink} class="bottom-left"><i class="ion-ios-browsers"></i></a><a href={gitHubLink} class="bottom-right"><i class="ion-social-github"></i></a>
                    <div className="desc">description</div>
                </figcaption>
            </figure>
        </div>

    );
}

export default Works;
