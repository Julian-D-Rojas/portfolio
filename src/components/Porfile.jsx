import './Porfile.css'
import julianImage from '../assets/img/JulianRw.png'
import j from '../assets/img/J.png'
import { ContactIcon } from './icons/ContactIcon'
import { CvIcon } from './icons/CvIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { GithubIcon } from './icons/GithubIcon'
import pdfFile from '../assets/documents/HV-Julian-Rojas.pdf'
import { ProyectIcon } from './icons/ProyectIcon'
import { FormIcon } from './icons/FormIcon'

export const Porfile = () => {
  let proyects = 'Proyectos'
  let contact = 'Contacto'
  return (
    <>
      <div className='div-Porfile--name'>
        <div className='div-Porfile--nameContainer'>
          <a href='#top'>
            <h1 className='h2-Porfile'>
              <img src={j} className='img-Porfile--h2' alt='Julian Rojas' />
              ulian<span className='teko'>Rojas</span>
            </h1>{' '}
          </a>
          <div className='div-Porfile--menuContainer'>
            <ul className='Porfile-ul'>
              <li className='Porfile-li'>
                <a href='#proyects' className='Porfile-a'>
                  <div className='Porfile-div--icon'>
                    <ProyectIcon />
                  </div>
                  {proyects}
                </a>
              </li>

              <li className='Porfile-li'>
                <a href='#contact' className='Porfile-a'>
                  <div className='Porfile-div--icon'>
                    <FormIcon />
                  </div>
                  {contact}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='div-Porfile--container'>
        <div className='div-Porfile--coverImage'>
          <div className='div-Porfile--info'>
            <figure className='figure-Porfile'>
              <img
                src={julianImage}
                alt='Julian Rojas'
                className='img-Porfile'
              />
            </figure>
            <div className='div-Porfile--flex'>
              <h3 className='h3-Porfile'>
                Desarrollador <span>Web</span>{' '}
                <span className='blackColor'>Frontend</span>{' '}
              </h3>
              <p className='p-Porfile'>
                Ingeniero en Telecomunicaciones con experiencia en diseño web
                responsivo, APIs REST, Python, SQL y GIT. Creativo, proactivo,
                analítico, con habilidades en comunicación, trabajo en equipo,
                resiliencia y respeto.
              </p>

              <div className='div-Porfile-infoButton'>
                <a
                  rel='noopener noreferer'
                  href={pdfFile}
                  target='_blank'
                  className='a-Porfile--social'
                  title='JULIAN ROJAS CV'
                >
                  <div className='Porfile-div-icon'>
                    <CvIcon />
                  </div>
                </a>
                <a
                  rel='noopener noreferer'
                  href='mailto:julian.d.rojas16@gmail.com'
                  target='_blank'
                  className=' a-Porfile--social'
                  title='Julian.d.rojas16@gmail.com'
                >
                  <div className='Porfile-div-icon'>
                    <ContactIcon />
                  </div>
                </a>
                <a
                  rel='noopener noreferer'
                  href='https://www.linkedin.com/in/julian-david-rojas-gutierrez-b88160235/'
                  target='_blank'
                  className=' a-Porfile--social'
                  title='Linkedin'
                >
                  {' '}
                  <div className='Porfile-div-icon'>
                    <LinkedinIcon />
                  </div>
                </a>
                <a
                  rel='noopener noreferer'
                  href='https://github.com/Julian-D-Rojas/'
                  target='_blank'
                  className='a-Porfile--social'
                >
                  <div className='Porfile-div-icon' title='Github'>
                    <GithubIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
