import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {


    const [show , setShow] = useState(false);
  return (
    <section className='bg-black p-0 m-0 overflow-hidden pb-20 relative'>
        <header className='fixed top-4 right-4 z-50'>
            <button 
                onClick={() => setShow(!show)} 
                className=' p-2 rounded-lg shadow-lg transition'
            >
                <FontAwesomeIcon icon={show ? faTimes : faBars} className='text-white w-5 h-5 text-2xl cursor-pointer' />
            </button>

            {show && (
                <div className='absolute top-12 right-0 bg-white/20 text-white font-semibold text-md rounded-lg shadow-xl overflow-hidden w-50'>
                    <ul className='flex flex-col'>
                        <li>
                            <Link 
                                to='/' 
                                onClick={() => setShow(false)}
                                className='block px-4 py-2 hover:bg-gray-100 transition hover:text-black'
                            >
                                Profile
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to='/about' 
                                onClick={() => setShow(false)}
                                className='block px-4 py-2 hover:bg-gray-100 transition hover:text-black'
                            >
                                About & Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>

        <Outlet/>

    </section>
  )
}

export default Layout