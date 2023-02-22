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
        <div className='portfolio-intro'>
          <div className='linear-gradient-angle tl'></div>
          <div className='intro-left'>
            <h1>Welcome</h1>
            <h2>Hello, my name is <strong>Ian Lund Stidsen</strong></h2>
            <p>
              I'm a self-taught <strong>Front-end developer</strong> based in Nuuk, Greenland. <br></br>
              I enjoy making programming projects and, <br></br> i find it fun to challenge myself to learn new things.
            </p>
          </div>
          <div className='linear-gradient-angle br'></div>
        </div>

        <div className='portfolio-projects'>
          <h2>Projects</h2>
          <div className='linear-gradient-angle sm'></div>
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
