import Logo from '../ressources/logos_linux-tux.svg'
import Drop from './Drop'
import NavItem from './NavItem'

const Nav = () => {

    return  <header className="flex items-center justify-between py-5">
            <div>
                <div className="flex items-center justify-between">
                    <div className="mr-3">
                        <img src={Logo}  />
                    </div>
                    <div className="hidden h-6 text-3xl text-white text-center  Kontes-Compressed sm:block">Why not <span className='color-yellow-sea'>Linux</span></div>
                </div>
            </div>
            <div className='flex items-center space-x-6 leading-5 sm:space-x-10'>
                <NavItem>À propos</NavItem>
                <Drop/>
                <NavItem>Archive</NavItem>
                <NavItem>FaQ</NavItem>
                <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">inscription</button>

            </div>
        </header>
}
export default Nav
