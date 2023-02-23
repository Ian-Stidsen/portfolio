import { Helmet } from 'react-helmet';
import './stylesheet/Portfolio.css';
import './stylesheet/gradient.css';

import { Projects } from '../components'
import { Contact } from '../components'

import { useWindowSize } from '../hooks/useWindowSize';

export function Portfolio() {
  const size = useWindowSize();


  return (
    <>
      <Helmet><title>Portfolio</title></Helmet>
      <div className="portfolio">

        <div className='portfolio-intro'>
          <span className='linear-gradient-angle tl'></span>
          <div className='intro-left'>
            <h1>Welcome</h1>
            <h2>Hello, my name is <strong>Ian Lund Stidsen</strong></h2>
            <p>
              I'm a self-taught <strong>Front-end developer</strong> based in Nuuk, Greenland. <br></br>
              I enjoy making programming projects and, <br></br> i find it fun to challenge myself to learn new things.
            </p>
          </div>
          <span className='linear-gradient-angle br'></span>
        </div>

        <div style={{left: '150px'}} className='portfolio-projects'>
          <h2>Projects</h2>
          <span className='linear-gradient-angle sm'></span>
          <Projects />
          <span className='linear-gradient-angle smb'></span>
        </div>


        <div className='contact-form'>
          <h2>Contact me</h2>
          <Contact />
        </div>
      </div>
    </>
  );
}
