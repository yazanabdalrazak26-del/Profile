
import { faBars, faBriefcase, faCode, faEnvelope, faFolderOpen, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function SideBar() {

    const [show , setShow] = useState(false);
    const {t} = useTranslation();

    const links = [
        {url: '/' , icon: faFolderOpen , title: t('nav.projects') , style: 'text-orange-400'},
        {url: 'about' , icon: faUser , title: t('nav.about') , style: 'text-blue-600'},
        {url: 'skills' , icon: faCode , title: t('nav.skills') , style: 'text-green-500'},
        {url: 'experience' , icon: faBriefcase , title: t('nav.experience') , style: 'text-amber-900'},
        {url: 'contact' , icon: faEnvelope , title: t('nav.contact') , style: 'text-red-500'},
    ]

  return (
    <header className='fixed top-4 right-4 z-50'>
        <button 
            onClick={() => setShow(!show)} 
            className=' p-2 rounded-lg shadow-lg transition'
        >
            <FontAwesomeIcon icon={show ? faTimes : faBars} className='text-white w-5 h-5 text-2xl cursor-pointer' />
        </button>

        {show && (
            <div className='absolute top-12 right-0 text-white border-2 border-gray-800 bg-black font-semibold shadow-xl overflow-hidden mr-2 text-sm w-35 sm:w-30 sm:text-sm md:w-50 md:text-md lg:w-60 lg:text-md'>
                <ul className='flex flex-col gap-2 p-2'>

                    {links?.map(item =>(
                        <li key={item.title}>
                            <Link 
                                to={item.url} 
                                onClick={() => setShow(false)}
                                className="px-1 py-2 lg:px-4 lg:py-3 hover:bg-dark-50 duration-300 flex flex-row items-center"
                            >
                                <FontAwesomeIcon icon={item.icon} className={`pr-2 ${item.style} text-md`}/>{item.title}
                            </Link>
                        </li>
                    ))}
                    
                </ul>
            </div>
        )}
    </header>
  )
}

export default SideBar