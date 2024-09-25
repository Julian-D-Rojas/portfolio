import './NavMenu.css'
export const NavMenu = () => {
  let proyects = 'Proyectos'
  let contact = 'Contacto'
  return (
    <>
      <nav className="Nav">
        <ul className="Nav-ul">
          <li className="Nav-li"><a href="#top" className="Nav-a"><h1>Julian Rojas</h1></a></li>
          <li className="Nav-li"><a href="#proyects" className="Nav-a">{proyects}</a></li>
          <li className="Nav-li"><a href="#contact" className="Nav-a">{contact}</a></li>
        </ul>
      </nav>

    </>
  )
}
