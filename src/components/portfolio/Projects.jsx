import { Link } from 'react-router-dom';

import './stylesheet/Projects.css';

export function Projects() {
  return (
      <div className='projects'>

        <ul className='projects-list'>
          <li>
            <a href='https://llregnskab.gl/' target='_blank' rel='noreferrer'>LL Regnskab ApS</a>
          </li>
          <li>
            <Link to='/currency-converter/' target='_blank' rel='noreferrer'>Converter</Link>
          </li>
          <li>
            <Link to='/react-todo/' target='_blank' rel='noreferrer'>Todo List</Link>
          </li>
          <li>
            <Link to='/weather-forecast/' target='_blank' rel='noreferrer'>Weather Forecast</Link>
          </li>
        </ul>
        
        <div className='contact-links'>
          <h2>Contacts</h2>
          <ul className='contact-list'>
            <li>
              <a href='https://github.com/Ian-Stidsen' target='_blank' rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="navbar-icons" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ian-stidsen/' target='_blank' rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="navbar-icons" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href='mailto:ianstidsendev@gmail.com'>
                <svg xmlns="http://www.w3.org/2000/svg" className="navbar-icons" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
};