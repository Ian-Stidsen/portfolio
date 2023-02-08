import { Helmet } from 'react-helmet';
import './stylesheet/Portfolio.css';

import { Navbar } from '../components'
import { Projects } from '../components'
import { Contact } from '../components'

export function Portfolio() {
  return (
    <>
      <Helmet><title>Portfolio</title></Helmet>
      <div className="portfolio">
        <Navbar />
        <div className='portfolio-projects'>
          <h2>Projects</h2>
          <Projects />
        </div>

        <div className='contact-form'>
          <h2>Contact me</h2>
          <Contact />
        </div>
      </div>
    </>
  );
}
