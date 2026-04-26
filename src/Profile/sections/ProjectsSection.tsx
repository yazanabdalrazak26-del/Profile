import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../layout/Footer';


type Projects = {
    id: number;
    title: string;
    tech: string[];
    imgs: string[];
    description:string;
    github: string;

}

function ProjectsSection() {
    const { t } = useTranslation();

    const projects = t('projectsSection.projects', { returnObjects: true }) as Projects[];

    return (
        <>
            <section className="text-white flex flex-col items-center mt-15 w-full px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                    {t('projectsSection.title')}
                </h2>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl'>
                    {projects?.map((item) => (
                        <Link 
                            key={item.id} 
                            to={`/projects/${item.id}`} 
                            className='flex flex-col bg-[rgb(20,20,20)] rounded-2xl cursor-pointer hover:-translate-y-1 transition-transform duration-300 overflow-hidden h-full'
                        >
                            <h1 className='text-center p-3 text-lg sm:text-xl font-semibold text-white line-clamp-1'>
                                {item.title}
                            </h1>

                            <div className="w-full px-3">
                                <div className="w-full aspect-[16/9] bg-dark-20 rounded-lg overflow-hidden">
                                    <img 
                                        className='w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300' 
                                        src={item.imgs?.[0]} 
                                        alt={item.title}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://placehold.co/400x225?text=No+Image';
                                        }}
                                    />
                                </div>
                            </div>

                            <p className='text-center px-3 py-3 text-sm text-gray-300 flex-1 mb-3'>
                                {item.description}
                            </p>

                            <div className='flex flex-wrap gap-1 px-3 pb-5'>
                                {item.tech?.slice(0, 3).map((tech) => (
                                    <span key={tech} className='text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300'>
                                        {tech}
                                    </span>
                                ))}
                                {item.tech?.length > 3 && (
                                    <span className='text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300'>
                                        +{item.tech.length - 3}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default ProjectsSection;