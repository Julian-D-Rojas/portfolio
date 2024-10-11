import './Porfile.css'
import julianImage from '../assets/img/Julian Rojas.jpg'
export const Porfile = () => {
  return (
    <>
    <div className="div-Porfile--container">
        <h2 className="h2-Porfile">Julian Rojas</h2>
        <figure className="figure-Porfile">
            <img src={julianImage} alt="Julian Rojas" className="img-Porfile" />
        </figure>
        <h3 className="h3-Porfile">Ingeniero en Telecomunicaciones</h3>
        <p className="p-Porfile">Ingeniero con conocimientos en diseño responsivo de
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
        <button className="button-Porfile">Contacto</button>
    </div>
    </>
  )
}
