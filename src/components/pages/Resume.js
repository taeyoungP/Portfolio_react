import React from 'react';
import resume from '../../assets/Taeyoung_Park_Resume.docx';

export default function Resume() {
  return (
    <div className='renderpage'>
      <h3 id="Resume"><span className="material-symbols-outlined">psychiatry</span>Resume</h3>
      <div className='wrap'>
        <div className='resumeLink'>
          <a href={resume} id="resumeLink" download>Download My Resume <i className='ion-ios-download-outline'></i></a>
        </div>
      </div>
      <br />
      <h3 id="front-end"><span className="material-symbols-outlined">psychiatry</span>Frond-end<br /> Proficiencies</h3>
      <div className='wrap'>
        <ul className='skills'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Boostrap</li>
          <li>Handlebars.js</li>
        </ul>
      </div>
      <br />
      <h3 id="back-end"><span className="material-symbols-outlined">psychiatry</span>Back-end<br /> Proficiencies</h3>
      <div className='wrap'>
        <ul className='skills'>
          <li>Third-Party APIs / RESTful API</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>Express.js</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}