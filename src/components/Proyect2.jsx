import './Proyect.css'
import { AirplaneIcon } from './icons/AirplaneIcon'
import { GithubIconBlack } from './icons/GithubIconBlack'
import TDT from '../assets/img/TDT.png'
import { TailwindIcon } from './icons/TailwindIcon'
import { ReactIcon } from './icons/ReactIcon'
export const Proyect2 = () => {
  return (
    <>
      <div className='div-Proyect--container'>
        <div className='div-Proyect--imgContainer'>
          <img src={TDT} alt='' className='img-Proyect' />
        </div>
        <div className='div-Proyect--info'>
          <h3 className='h3-Proyect--info'>
            Administración de espacios en Blanco TDT
          </h3>
          <p className='p-Proyect'>
            El sitio web de Administración de espacios en Blanco TDT está
            desarrollado con ReactJs y Tailwind para lograr una navegación
            rápida y funcionalidad fluida.
          </p>
          <div className='div-Proyect--technologies'>
            <ReactIcon />
            <TailwindIcon />
          </div>
          <div className='div-Proyect--buttons'>
            <a
              href='https://dtt-manager-frontend.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='button-Proyect--first'>
                <div className='div-center'>
                  <AirplaneIcon /> Ver Más
                </div>
              </button>
            </a>
            <a
              href='https://github.com/Julian-D-Rojas/DTTManagerFrontend'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='button-Proyect--second'>
                <div className='div-center'>
                  <GithubIconBlack />
                  Código
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
