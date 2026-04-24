import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const skills = {
    frontend: ['React', 'TypeScript', 'React Query', 'Tailwind CSS', 'DnD Kit' , 'React Redux' ,'Zustand'],
    tools: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm'],
    backend: ['Firebase', 'php' ,'Laravel']
};

function SkillsSection() {
  return (
    <section className="mb-12 w-full">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-dark-20 pb-2">
            Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6 m-6">
            <div className="bg-dark-40 rounded-lg p-4 hover:-translate-y-1 duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-blue-400" />
                    Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                    {skills.frontend.map(skill => (
                        <span key={skill} className="bg-dark-20  px-3 py-1 rounded-full text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <div className="bg-dark-40 rounded-lg p-4 hover:-translate-y-1 duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-green-400" />
                    Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                    {skills.tools.map(skill => (
                        <span key={skill} className="bg-dark-20  px-3 py-1 rounded-full text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <div className="bg-dark-40 rounded-lg p-4 hover:-translate-y-1 duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-purple-400" />
                    Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                    {skills.backend.map(skill => (
                        <span key={skill} className="bg-dark-20  px-3 py-1 rounded-full text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default SkillsSection