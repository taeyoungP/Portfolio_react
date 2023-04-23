import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/reset.css';
import '../styles/style.css';

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
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <figure className="background_image" alt="background_image"></figure>
        {renderPage()}
        <br/><br/>
        <Footer id='footer'/>
      </div>
    );
  }
  