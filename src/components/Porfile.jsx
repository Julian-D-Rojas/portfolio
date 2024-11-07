import './Porfile.css'
import julianImage from '../assets/img/JulianRw.png'
import j from '../assets/img/J.png'
import { ContactIcon } from './icons/ContactIcon'
import {CvIcon} from './icons/CvIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { GithubIcon } from './icons/GithubIcon'

export const Porfile = () => {
    return (
        <>
            <div className="div-Porfile--name">
                <a href="#top" >
                <h1 className='h2-Porfile'><img src={j} className='img-Porfile--h2' alt="Julian Rojas" />ulian<span className='teko'>Rojas</span></h1> </a>
                </div>
            <div className="div-Porfile--container">
                <div className="div-Porfile--coverImage">

                <figure className="figure-Porfile">
                    <img src={julianImage} alt="Julian Rojas" className="img-Porfile" />
                </figure>

                <div className="div-Porfile--info">
                <h3 className="h3-Porfile">Desarrollador <span>Web</span> <span className="blackColor">Frontend</span> </h3>
                <p className="p-Porfile">Ingeniero en Telecomunicaciones con experiencia en diseño web responsivo (HTML, CSS, SASS, JavaScript, ReactDOM), manejo de APIs REST, Java, bases de datos SQL y control de versiones (GIT/GitHub). Destaco por la creatividad, proactividad y capacidad de análisis. Hábil en la comunicación y trabajo en equipo, con un enfoque en la resiliencia y el respeto.</p>
    
<div className="div-Porfile-infoButton">
<a rel="noopener noreferer" href="#" target="_blank" className="a-Porfile--social" title="CV"><div className="Porfile-div-icon"><CvIcon /></div></a>
          <a rel="noopener noreferer" href="mailto:julian.d.rojas16@gmail.com" target="_blank" className=" a-Porfile--social" title="Contacto"><div className="Porfile-div-icon"><ContactIcon   /></div></a>
          <a rel="noopener noreferer" href="https://www.linkedin.com/in/julian-david-rojas-gutierrez-b88160235/" target="_blank" className=" a-Porfile--social" title="Linkedin"> <div className="Porfile-div-icon"><LinkedinIcon/></div></a>
          <a rel="noopener noreferer" href="https://github.com/Julian-D-Rojas/" target="_blank" className="a-Porfile--social"><div className="Porfile-div-icon" title="Github"><GithubIcon /></div></a>
         
</div>
                </div>
                </div>
            </div>
        </>
    )
}
