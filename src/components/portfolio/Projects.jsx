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
              <i className='fab fa-github'>Github</i>
            </a>
            <a className='page-link' href='https://llregnskab.gl' target='_blank' rel='noreferrer'>Page</a>
          </div>
        </div>

        <div className='project-card'>
          <div className='card-hover'>
            <h2>project name</h2>
            <p>project description Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a className='github-link' href='https://github.com/Ian-Stidsen/react-ll-regnskab' target='_blank' rel='noreferrer'>
              <i className='fab fa-github'>Github</i>
            </a>
            <Link className='page-link' to='/'>Page</Link>
          </div>
        </div>

        <div className='project-card'>
          <div className='card-hover'>
            <h2>project name</h2>
            <p>project description Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a className='github-link' href='https://github.com/Ian-Stidsen/react-ll-regnskab' target='_blank' rel='noreferrer'>
              <i className='fab fa-github'>Github</i>
            </a>
            <Link className='page-link' to='/'>Page</Link>
          </div>
        </div>

        <div className='project-card'>
          <div className='card-hover'>
            <h2>project name</h2>
            <p>project description Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a className='github-link' href='https://github.com/Ian-Stidsen/react-ll-regnskab' target='_blank' rel='noreferrer'>
              <i className='fab fa-github'>Github</i>
            </a>
            <Link className='page-link' to='/'>Page</Link>
          </div>
        </div>

      </div>
  )
};