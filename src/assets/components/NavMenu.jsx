import './NavMenu.css'
import { PersonIcon } from './icons/PersonIcon'
import { ProyectIcon } from './icons/ProyectIcon'
import { ContactIcon } from './icons/ContactIcon'
export const NavMenu = () => {
  let proyects = 'Proyectos'
  let contact = 'Contacto'
  return (
    <>
      <nav className="Nav">
        <ul className="Nav-ul">
          <li className="Nav-li"><div className="Nav-div-icon">
            </div><a href="#top" className="Nav-a"><PersonIcon/><h1>Julian Rojas</h1>
          
            </a></li>

          <li className="Nav-li"><div className="Nav-div-icon">
          </div><a href="#proyects" className="Nav-a"><ProyectIcon/>{proyects}</a></li>
          
          <li className="Nav-li"><div className="Nav-div-icon">

            </div><a href="#contact" className="Nav-a"><ContactIcon/>{contact}</a></li>
        </ul>
      </nav>

    </>
  )
}
