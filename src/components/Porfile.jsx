import './Porfile.css'
import julianImage from '../assets/img/Julian Rojas.jpg'
import { ContactIcon } from './icons/ContactIcon'
import {CvIcon} from './icons/CvIcon'
export const Porfile = () => {
    return (
        <>
            <div className="div-Porfile--name">
                <a href="#top"  className="Nav-a">
                <h2 className="h2-Porfile">Julian Rojas</h2> </a>
                </div>
            <div className="div-Porfile--container">
                <div className="div-Porfile--coverImage">

                    <img src='https://i.pinimg.com/originals/8d/0b/88/8d0b883ff3b1abbf1dc7369f6b895443.gif
' alt="Julian Rojas" className="img-Porfile--coverImage" />
                </div>
              
                <figure className="figure-Porfile">
                    <img src={julianImage} alt="Julian Rojas" className="img-Porfile" />
                </figure>

                <div className="div-Porfile--info">
                <h3 className="h3-Porfile">Desarrollador <span className='greenColor'>Web</span> <span className="blueColor">Frontend</span> </h3>
                <p className="p-Porfile">Ingeniero en Telecomunicaciones con conocimientos en diseño responsivo de
                    páginas web con HTML, CSS, SASS , JavaScript y
                    ReactDOM; API REST, java, manejo de base de datos SQL,
                    GIT y GitHub, me caracterizo por:</p>
                <ul className="ul-Porfile">
                    <li className="li-Porfile">
                        Creatividad, proactividad, análisis y perseverancia
                        para cumplir objetivos.

                    </li>
                    <li className="li-Porfile">

                        Trabajo en equipo.
                    </li>
                    <li className="li-Porfile">

                        Facilidad para la escucha, el habla, la escritura y la
                        lectura.
                    </li>
                    <li className="li-Porfile">

                        Respeto, tolerancia y resiliencia ante las dificultades.
                    </li>
                </ul>
<div className="div-Porfile-infoButton">
                <a href="#contact">
                    <button className="button-Porfile greenColorBackgorund"><CvIcon/></button>
                </a>
                <a href="#contact">
                    <button className="button-Porfile blackColorBackgorund"><ContactIcon/></button>
                </a>
</div>
                </div>
                
            </div>
        </>
    )
}
