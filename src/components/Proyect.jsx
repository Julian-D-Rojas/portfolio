import './Proyect.css'
import {AirplaneIcon} from './icons/AirplaneIcon'
import { GithubIconBlack } from './icons/GithubIconBlack'
import jardinBarquito from '../assets/img/Jardin Barquito.png'
import { JavascriptIcon } from './icons/JavascriptIcon'
import { SassIcon } from './icons/SassIcon'
export const Proyect = () => {
  return (
    <>
   <div className="div-Proyect--container">
    <div className="div-Proyect--imgContainer">
        <img src={jardinBarquito} alt="" className="img-Proyect" />
    </div>
    <div className="div-Proyect--info">
        <h3 className='h3-Proyect--info'>Jardín Infantil Barquito de Papel</h3>
        <p className='p-Proyect'>El sitio web de Jardín Barquito de Papel está desarrollado con vanilla JavaScript y Sass para lograr una navegación rápida y funcionalidad fluida sin frameworks externos, dicho sitio ofrece un diseño colorido que evoca un ambiente amigable y acogedor.</p>
        <div className="div-Proyect--technologies">
            <JavascriptIcon/>
            <SassIcon/>
        </div>
        <div className="div-Proyect--buttons">
          <a href="https://jardinbarquitodepapel.com/">
            <button className="button-Proyect--first"><div className="div-center"><AirplaneIcon/> Ver Más</div></button></a>
            <a href="https://github.com/Julian-D-Rojas/Barquito_de_Papel">
            <button className="button-Proyect--second"><div className="div-center"><GithubIconBlack/>Código</div></button></a>
        </div>
    </div>
   </div>
    </>
  )
}
