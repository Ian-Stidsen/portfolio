import { Helmet } from 'react-helmet';
import './stylesheet/Portfolio.css';
import './stylesheet/gradient-corners.css';

import { Projects } from '../components'
import { Contact } from '../components'

import { useWindowSize } from '../hooks/useWindowSize';

export function Portfolio() {
  const size = useWindowSize();

  const brMorethan500 = size.width < 500? null : <br></br>;
  const brLessthan450 = size.width > 450? null : <br></br>;
  return (
    <>
      <Helmet><title>Portfolio</title></Helmet>
      <div className="portfolio">

        <div className='portfolio-intro'>
          <span className='linear-gradient-angle tl'></span>
          <div className='intro-left'>
            <h1>Welcome</h1>
            <h2>Hello, my name is {brLessthan450} <strong>Ian Lund Stidsen</strong></h2>
            <p>
              I'm a self-taught Front-end developer based in Nuuk, {brMorethan500} Greenland. 
              I enjoy making programming projects and, {brMorethan500} i find it fun to challenge myself to learn new things.
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
