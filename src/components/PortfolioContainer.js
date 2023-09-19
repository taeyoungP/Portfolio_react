import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/reset.css';
//import '../styles/background.css';
import '../styles/style.css';
import '../styles/background_v_2.css';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  // Default page is 'About Me' page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Lato|Roboto:400,900' rel='stylesheet' type='text/css'></link>
      <div className="background">

        <div className='stars'></div>
        <div className='twinkling'></div>
        {/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="moon" />*/}
        <div className='clouds'></div>

      </div>
      <div id="wholepage">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className='container'>
          {renderPage()}
        </div>

        <br /><br />
        <Footer id='footer' />
      </div>
    </div>

  );
}
