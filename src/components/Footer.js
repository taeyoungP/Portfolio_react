import React from 'react';
import gitHubIcon from '../images/github_icon.png';
import linkedInIcon from '../images/linkedin_icon.png';

export default function Footer() {
    return (
      <div>
        <div>
          <ul className='footer'>
              <li><a href='https://github.com/taeyoungP'><img src={gitHubIcon} alt='github_icon.png' className='icon'/></a></li>
              <li><a href='https://www.linkedin.com/in/taeyoung-park-935ba4196/'><img src={linkedInIcon} alt='linkedIn_icon.png' className='icon'/></a></li>
          </ul>
        </div>
      </div>
    );
  }