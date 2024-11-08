import './Proyect.css'
import {AirplaneIcon} from './icons/AirplaneIcon'
import { GithubIconBlack } from './icons/GithubIconBlack'
import jardinBarquito from '../assets/img/Jardin Barquito.png'
export const Proyect = () => {
  return (
    <>
   <div className="div-Proyect--container">
    <div className="div-Proyect--imgContainer">
        <h2 className="h2-Proyect--title">Jardín Infantil Barquito de Papel</h2>
        <img src={jardinBarquito} alt="" className="img-Proyect" />
    </div>
    <div className="div-Proyect--info">
        <h3 className='h3-Proyect--info'>Jardín Infantil Barquito de Papel</h3>
        <p className='p-Proyect'>Lorem explicabo recusandae? Obcaecati corporis veniam alias eum. Iste impedit perferendis quas provident quasi nisi quia distinctio consequatur?</p>
        <div className="div-Proyect--technologies">
            <AirplaneIcon/>
            <GithubIconBlack/>
            <AirplaneIcon/>
            <GithubIconBlack/>
        </div>
        <div className="div-Proyect--buttons">
            <button className="button-Proyect--first"><div className="div-center"><AirplaneIcon/> Ver Más</div></button>
            <button className="button-Proyect--second"><div className="div-center"><GithubIconBlack/>Código</div></button>
        </div>
    </div>
   </div>
    </>
  )
}
