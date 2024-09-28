import './NavMenu.css'
import { ProyectIcon } from './icons/ProyectIcon'
import { ContactIcon } from './icons/ContactIcon'
import { GithubIcon } from './icons/GithubIcon'
import{LinkedinIcon} from './icons/LinkedinIcon'

export const NavMenu = () => {
  let proyects = 'Proyectos'
  let contact = 'Contacto'
  return (
    <>
      <nav className="Nav">
        <div className="Nav-div--container">

        <div className="Nav-div--h1">
            <a href="#top" className="Nav-a">
      <h1 className='h1'>Julian Rojas</h1>
            </a>

        </div>
        <ul className="Nav-ul">

          <li className="Nav-li">
          <a href="#proyects" className="Nav-a"><div className="Nav-div-icon"><ProyectIcon/></div>{proyects}</a></li>
          
          <li className="Nav-li">
          <a href="#proyects" className="Nav-a"><div className="Nav-div-icon"><ContactIcon/></div>{contact}</a></li>
        </ul>
        </div>
        <div className="Nav-div--social">
          <LinkedinIcon/>
          <GithubIcon />
        </div>
      </nav>
      
    </>
  )
}
