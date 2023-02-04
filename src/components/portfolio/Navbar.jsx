
import './stylesheet/Navbar.css';

export function Navbar() {

  

  return (
    <nav className='portfolio-navbar'>
      <h1>Ian Lund Stidsen</h1>
      <ul className='portfolio-navbar-scroll-buttons'>
        <li><button>Intro</button></li>
        <li><button>Projects</button></li>
        <li><button>Contact</button></li>
      </ul>
      <ul className='portfolio-navbar-links'>
        <li><a href='https://github.com/Ian-Stidsen' target='_blank' rel='noreferrer'>Github</a></li>
        <li><a href='https://github.com/Ian-Stidsen' target='_blank' rel='noreferrer'>LinkedIn</a></li>
        <li><a href='mailto:ianstidsen@gmail.com'>Email</a></li>
      </ul>
    </nav>
  )
};