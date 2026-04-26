import { faTools, faUser, faBriefcase, faCalendarAlt, faCheckCircle, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function ExperienceSection() {

    const {t} = useTranslation();

    const experiences = [
        {
            id: 1,
            style:'from-purple-500/30',
            title: t('experience.items.item1.title'),
            company: t('experience.items.item1.company'),
            period: t('experience.items.item1.period'),
            description: [
                t('experience.items.item1.description', { returnObjects: true })as string[]
            ],
            tech: ['React', 'TypeScript', 'React Query', 'Tailwind CSS']
        },
        {
            id: 2,
            style:'from-green-500/30',
            title: t('experience.items.item2.title'),
            company: t('experience.items.item2.company'),
            period: t('experience.items.item2.period'),
            description: [
                t('experience.items.item2.description', { returnObjects: true })as string[]
            ],
            tech: ['React', 'TypeScript', 'React Query', 'Tailwind CSS']
        },
        {
            id: 3,
            style:'from-blue-500/30' ,
            title: t('experience.items.item3.title'),
            company: t('experience.items.item3.company'),
            period: t('experience.items.item3.period'),
            description: [
                t('experience.items.item3.description', { returnObjects: true })as string[]
            ],
            tech: ['React', 'Firebase', 'Tailwind CSS']
        }
    ];

    return (
        <section className='mb-12 mt-5 px-6 py-3 w-screen h-full text-white'>
            <div className="=">
                <h2 className="font-bold text-white mb-8 border-b border-dark-20 pb-3 text-3xl sm:text-4xl flex items-center gap-3">
                    <FontAwesomeIcon icon={faBriefcase} className="text-blue-400 text-3xl" />
                    {t('experience.title')}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {experiences.map((item) => (
                        <div key={item.id} className={`bg-linear-to-br ${item.style} to-dark-10 rounded-xl p-5 hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-800 hover:border-blue-500`}>
                            
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <FontAwesomeIcon icon={faUser} className="text-blue-400 text-sm" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                                </div>
                            </div>

                            
                            <div className="flex items-center gap-2 ml-10 mb-2">
                                <FontAwesomeIcon icon={faBuilding} className="text-gray-300 text-xs" />
                                <span className="text-blue-400 text-sm">{item.company}</span>
                            </div>

                            
                            <div className="flex items-center gap-2 ml-10 mb-4">
                                <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-300 text-xs" />
                                <span className="text-gray-400 text-sm bg-dark-20 px-2 py-0.5 rounded-full">
                                    {item.period}
                                </span>
                            </div>

                            
                            <div className="mt-4 mb-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                                    <h4 className="text-sm font-semibold text-gray-300">Key Responsibilities</h4>
                                </div>
                                <ul className="space-y-2">
                                    {item.description.map((p, index) => (
                                        <li key={index} className="text-gray-400 text-sm flex items-start gap-2 ml-6 leading-relaxed">
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            
                            <div className="mt-4 pt-3 border-t border-gray-800">
                                <div className="flex items-center gap-2 mb-3">
                                    <FontAwesomeIcon icon={faTools} className="text-yellow-500 text-sm" />
                                    <span className="text-sm font-semibold text-gray-300">Tech Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2 ml-6">
                                    {item.tech.map((tech, index) => (
                                        <span key={index} className="bg-dark-20 text-gray-300 text-xs px-2 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default ExperienceSection;