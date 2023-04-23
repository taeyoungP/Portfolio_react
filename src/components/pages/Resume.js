import React from 'react';

export default function Resume() {
  return (
    <div>
      <h3 id="Resume">Resume</h3>
      <div className='wrap'>
        <a href='#' id="resumeLink">Download My Resume</a>
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
        </ul>
      </div>
      <br />
      <h3 id="back-end">Back-end<br /> Proficiencies</h3>
      <div className='wrap'>
        <ul className='skills'>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>Express.js</li>
          <li>NoSQL</li>
        </ul>
      </div>
    </div>
  );
}