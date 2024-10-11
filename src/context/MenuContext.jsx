import { createContext, useState } from "react";

export const MenuContext = createContext()
// eslint-disable-next-line react/prop-types
export const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <MenuContext.Provider value={
            {
                isOpen,
                handleMenu,

            }
        }>
            {children}
        </MenuContext.Provider>
    )
}

