import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div id="wholeNav">
      <div className='name-background'>
        <h2 id="name"><i className="bi bi-star"></i> Taeyoung Park <i className="bi bi-star"></i></h2>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}

            className={currentPage === 'About' ? 'nav-link btn active' : 'nav-link btn'}
          >
            <svg width="277" height="50" viewBox="10 0 200 50">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#FF8282" />
                  <stop offset="100%" stop-color="#E178ED" />
                </linearGradient>
              </defs>
              <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="200" height="35"></rect>
            </svg>
            <span>About Me</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link btn active' : 'nav-link btn'}
          >
            <svg width="277" height="50" viewBox="10 0 200 50">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#FF8282" />
                  <stop offset="100%" stop-color="#E178ED" />
                </linearGradient>
              </defs>
              <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="200" height="35"></rect>
            </svg>
            <span>Portfolio</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link btn active' : 'nav-link btn'}
          >
            <svg width="277" height="50" viewBox="10 0 200 50">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#FF8282" />
                  <stop offset="100%" stop-color="#E178ED" />
                </linearGradient>
              </defs>
              <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="200" height="35"></rect>
            </svg>
            <span>Contact</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link btn active' : 'nav-link btn'}
          >
            <svg width="277" height="50" viewBox="10 0 200 50">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#FF8282" />
                  <stop offset="100%" stop-color="#E178ED" />
                </linearGradient>
              </defs>
              <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="200" height="35"></rect>
            </svg>
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
