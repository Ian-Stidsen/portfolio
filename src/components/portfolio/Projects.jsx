import { Link } from 'react-router-dom';

import './stylesheet/Projects.css';

export function Projects() {
  return (
      <div className='card-container'>

        <div className='project-card'>
          <div className='card-hover'>
            <h2>LL Regnskab</h2>
            <p>I made this website for my mothers company, using jQuery. 
              But then later moved it to react.</p>
            <a className='github-link' href='https://github.com/Ian-Stidsen/react-ll-regnskab' target='_blank' rel='noreferrer'>
              <i>Github</i>
            </a>
            <a className='page-link' href='https://llregnskab.gl' target='_blank' rel='noreferrer'>Page</a>
          </div>
        </div>

        <div className='project-card'>
          <div className='card-hover'>
            <h2>Converter</h2>
            <p>I made this project using React, bootstrap and a currency API.</p>
            <a className='github-link' href='https://github.com/Ian-Stidsen/currency-converter' target='_blank' rel='noreferrer'>
              <i>Github</i>
            </a>
            <Link className='page-link' to='/converter' target='_blank' rel='noreferrer'>Page</Link>
          </div>
        </div>

        <div className='project-card'>
          <div className='card-hover'>
            <h2>Todo List</h2>
            <p>I made this mini project using React to learn more about useState hook.</p>
            <a className='github-link' href='https://github.com/Ian-Stidsen/react-todo' target='_blank' rel='noreferrer'>
              <i>Github</i>
            </a>
            <Link className='page-link' to='/todolist' target='_blank' rel='noreferrer'>Page</Link>
          </div>
        </div>

        <div className='project-card'>
          <div className='card-hover'>
            <h2>Speedtype</h2>
            <p>This project was one of my first projects made it using vanilla Javascript.</p>
            <a className='github-link' href='https://github.com/Ian-Stidsen/speedtype-game' target='_blank' rel='noreferrer'>
              <i>Github</i>
            </a>
            <Link className='page-link' to='/speedtype' target='_blank' rel='noreferrer'>Page</Link>
          </div>
        </div>

      </div>
  )
};