import './Proyects.css'
import iconWindowBar from '../assets/img/IconWindowBar.png'
import { Proyect } from './Proyect'
import { Proyect2 } from './Proyect2'

export const Proyects = () => {
  return (
    <>
      <div id="proyects" className="div-Proyects--container">
        <div className="div-Proyects--window">
          <div className="div-Proyects--windowBar">
            <img src={iconWindowBar} className="img-Proyects" />
          </div>
          <div className="div-Proyects--content">

            <h3 className='h3-Proyects'>Proyectos</h3>
            <div className="div-Proyects--grid">

              <Proyect></Proyect>
              <Proyect2></Proyect2>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
