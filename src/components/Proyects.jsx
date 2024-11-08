import './Proyects.css'
import iconWindowBar from '../assets/img/IconWindowBar.png'
import { Proyect } from './Proyect'
export const Proyects = () => {
  return (
    <>
    <div id="proyects" className="div-Proyects--container">
      <div className="div-Proyects--window">
        <div className="div-Proyects--windowBar">
<img src={iconWindowBar} className="img-Proyects" />
        </div>
        <div className="div-Proyects-container">

        <h3 className='h3-Proyects'>Proyectos</h3>
        <div className="div-Proyects--grid">

<Proyect></Proyect>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
