import { useRef, useEffect } from 'react'
import './HamburguerMenu.css'
import { useMenuContext } from '../hooks/useMenuContext'
export const HamburguerMenu = () => {


  const {isOpen, handleMenu} = useMenuContext()
  const $svgRef = useRef(null)

  const toggleMenu = () => {
    handleMenu()
  }

  useEffect(() => {
    if ($svgRef.current) {
      if (isOpen) {
        $svgRef.current.classList.add("hamburguer--open")
      }
      else {
        $svgRef.current.classList.remove("hamburguer--open")
      }
    }
  }, [isOpen])

  return (
    <>
      <div className="menu">
        <button className='button' onClick={toggleMenu}>
          <svg ref={$svgRef} className='Menu-svg' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" />
            <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className="line--2" d="M0 50h70" />
            <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </button>

      </div>
    </>

  )
}
