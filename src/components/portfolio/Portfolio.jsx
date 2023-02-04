
import './stylesheet/Portfolio.css';

import { Navbar } from './Navbar'
import { Projects } from './Projects'
import { Contact } from './Contact'

export function Portfolio() {
  return (
    <div className="portfolio">
      <Navbar />
      <div className='projects-cards'>
        <h2>Projects</h2>
        <Projects />
      </div>

      <div className='contact-form'>
        <h2>Contact me</h2>
        <Contact />
      </div>
    </div>
  );
}
