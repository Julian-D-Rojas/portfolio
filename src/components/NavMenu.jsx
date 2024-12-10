import './NavMenu.css'
import { ProyectIcon } from './icons/ProyectIcon'
import { ContactIcon } from './icons/ContactIcon'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import j from '../assets/img/J.png'
import { useMenuContext } from '../hooks/useMenuContext'
import { CvIcon } from './icons/CvIcon'
import { FormIcon } from './icons/FormIcon'


export const NavMenu = () => {
  let proyects = 'Proyectos'
  let contact = 'Contacto'

  const { isOpen, handleMenu } = useMenuContext()

  return (
    <>
      <nav className={`Nav ${isOpen ? 'Nav--open' : ''}`}>
        <div className="Nav-div--container">

          <div className="Nav-div--h1">
            <a href="#top" onClick={handleMenu} className="Nav-a a">
              <h1 className='h1'><img src={j} className='img-Porfile--h2' alt="Julian Rojas" />ulian<span className='teko'>Rojas</span></h1>
            </a>

          </div>
          <ul className="Nav-ul">

            <li className="Nav-li">
              <a href="#proyects" onClick={handleMenu} className="Nav-a a"><div className="Nav-div-icon"><ProyectIcon /></div>{proyects}</a></li>

            <li className="Nav-li">
              <a href="#contact" onClick={handleMenu} className="Nav-a a"><div className="Nav-div-icon"><FormIcon /></div>{contact}</a></li>
          </ul>
          <div className="Nav-div--social">
            <a onClick={handleMenu} rel="noopener noreferer" href="/documents/HV Julian Rojas.pdf" target="_blank" className="a-Porfile--social" title="JULIAN ROJAS CV"><div className="Porfile-div-icon"><CvIcon /></div></a>
            <a onClick={handleMenu} rel="noopener noreferer" href="mailto:julian.d.rojas16@gmail.com" target="_blank" className=" a-Porfile--social" title="Julian.d.rojas16@gmail.com"><div className="Porfile-div-icon"><ContactIcon /></div></a>
            <a onClick={handleMenu} rel="noopener noreferer" href="https://www.linkedin.com/in/julian-david-rojas-gutierrez-b88160235/" target="_blank" className=" a-Porfile--social" title="Linkedin"> <div className="Porfile-div-icon"><LinkedinIcon /></div></a>
            <a onClick={handleMenu} rel="noopener noreferer" href="https://github.com/Julian-D-Rojas/" target="_blank" className="a-Porfile--social"><div className="Porfile-div-icon" title="Github"><GithubIcon /></div></a>

          </div>
        </div>

      </nav>

    </>
  )
}
