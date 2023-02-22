import { Link } from 'react-router-dom';

import './stylesheet/Projects.css';

export function Projects() {
  return (
      <div className='projects'>

        <ul className='projects-list'>
          <li>
            <a href='https://llregnskab.gl/'>LL Regnskab ApS</a>
          </li>
          <li>
            <Link to='/currency-converter/'>Converter</Link>
          </li>
          <li>
            <Link to='/react-todo/'>Todo List</Link>
          </li>
          <li>
            <Link to='/speedtype-game/'>Speedtype</Link>
          </li>
        </ul>

      </div>
  )
};