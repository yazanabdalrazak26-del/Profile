import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faServer, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faCss, faGit, faGithub, faHtml5, faReact, faTypescript } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';




function SkillsSection() {

    const {t} = useTranslation();

    const skills = {
        frontend: {
            title: t('skills.categories.frontend'),
            icon: faCode,
            icon_color: 'text-blue-400',
            style: 'from-blue-700/30',
            techs: [
                {title: 'React' , icon: faReact, level: 80}, 
                {title: 'TypeScript' , icon: faTypescript, level: 70}, 
                {title: 'HTML' , icon: faHtml5, level: 90}, 
                {title: 'JavaScript' , icon: faReact, level: 90}, 
                {title: 'Tailwind CSS' , icon: faCss , level: 80},
                {title: 'React Query', level: 75}, 
                {title: 'DnD Kit' , level: 60},
            ]
            
        },

        
        tools: {
            title: t('skills.categories.tools'),
            icon: faTools,
            icon_color: 'text-green-400',
            style: 'from-yellow-700/30',
            techs:[
                {title: 'Git' , icon: faGit, level: 70}, 
                {title: 'GitHub' , icon: faGithub, level: 70}, 
                {title: 'VS Code' , icon: faHtml5, level: 80}, 
                {title: 'Vite' , icon: faReact, level: 80}, 
                {title: 'npm' , icon: faCss , level: 70},
            ]
        },


        backend: {
            title: t('skills.categories.backend'),
            icon: faServer,
            icon_color: 'text-purple-400',
            style: 'from-purple-700/30',
            techs:[
                {title: 'Firebase' , icon: faReact, level: 80}, 
                {title: 'Laravel' , icon: faCss , level: 50},
            ]
        }
    };
    

    return (
        <section className="mb-12 p-4 min-h-screen w-screen h-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b border-dark-20 pb-2">
                <FontAwesomeIcon icon={faLaptopCode} className='text-green-400 pr-3'/>{t("skills.title")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 m-2">
                
                {Object.entries(skills).map(([key , category]) =>(
                    <div key={key} className= {`bg-linear-to-br ${category.style} to-dark-10 rounded-lg p-4 hover:scale-102 duration-300 cursor-pointer`}>
                        <div className="flex items-center gap-2 mb-3">
                            <FontAwesomeIcon icon={category.icon} className={`${category.icon_color} text-blue-400 text-xl`} />
                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            {category.techs.map(skill => (
                                <div key={skill.title} className="flex flex-col text-gray-300 px-4 py-2 rounded-full text-xs sm:text-sm">
                                    <div className='flex justify-between'> 
                                        <span>
                                            <FontAwesomeIcon icon={skill.icon ? skill.icon : faCode}/> {skill.title}
                                        </span>
                                        <span>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div  className={` bg-dark-20 h-1.5 rounded-2xl mt-2 overflow-hidden`}>
                                        <div style={{width: `${skill.level}%`}} className='h-full bg-green-500'></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default SkillsSection;