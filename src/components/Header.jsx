import { MenuProvider } from '../context/MenuContext'
import { HamburguerMenu } from './HamburguerMenu'
import { NavMenu } from './NavMenu'

export const Header = () => {
    return (
        <>
            <header className="Header">
                <MenuProvider>
                    <HamburguerMenu></HamburguerMenu>
                    <NavMenu></NavMenu>

                </MenuProvider>

            </header>
        </>
    )
}

