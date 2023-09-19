import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <div id="wholeNav">

      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 25 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.1)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.7)" />
        </g>
      </svg>

        <div className='name-background'>
          <h2 id="name">Portfolio</h2>
          {/*<i className="bi bi-star"></i>*/}
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
    </div>
  );
}

export default NavTabs;
