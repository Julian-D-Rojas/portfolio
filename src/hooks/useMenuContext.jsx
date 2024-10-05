import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

export const useMenuContext = () => {
    const contextMenu = useContext(MenuContext)
if(MenuContext===undefined) throw new Error('Use Menu Context no puede usarse sin un Provider')

  return (
    contextMenu
  )
}
