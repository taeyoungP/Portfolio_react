import React from 'react';
import resume from '../../assets/Taeyoung_Park_Resume.docx';

export default function Resume() {
  return (
    <div className='renderpage'>
      <h3 id="Resume">Resume</h3>
      <div className='wrap'>
        <div className='resumeLink'>
          <a href={resume} id="resumeLink" download>Download My Resume</a>
        </div>
      </div>
      <br />
      <h3 id="front-end">Frond-end<br /> Proficiencies</h3>
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
      <h3 id="back-end">Back-end<br /> Proficiencies</h3>
      <div className='wrap'>
        <ul className='skills'>
          <li>APIs</li>
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