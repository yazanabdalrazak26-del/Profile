
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import LanguageSwitcher from '../sections/LanguageSwitcher'

function Layout() {


    
  return (
    <section className='bg-black p-0 m-0 overflow-hidden pb-20 relative'>
        <SideBar/>
        <LanguageSwitcher/>

        <Outlet/>

    </section>
  )
}

export default Layout