import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faServer } from '@fortawesome/free-solid-svg-icons';

function SkillsSection() {
    const skills = {
        frontend: ['React', 'TypeScript', 'React Query', 'Tailwind CSS', 'DnD Kit'],
        tools: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm'],
        backend: ['Firebase', 'Laravel']
    };

    return (
        <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b border-dark-20 pb-2">
                Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                
                
                <div className="bg-dark-40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <FontAwesomeIcon icon={faCode} className="text-blue-400 text-xl" />
                        <h3 className="text-lg font-semibold text-white">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.frontend.map(skill => (
                            <span key={skill} className="bg-dark-20 text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                
                <div className="bg-dark-40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <FontAwesomeIcon icon={faTools} className="text-green-400 text-xl" />
                        <h3 className="text-lg font-semibold text-white">Tools</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.tools.map(skill => (
                            <span key={skill} className="bg-dark-20 text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                
                <div className="bg-dark-40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <FontAwesomeIcon icon={faServer} className="text-purple-400 text-xl" />
                        <h3 className="text-lg font-semibold text-white">Backend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.backend.map(skill => (
                            <span key={skill} className="bg-dark-20 text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SkillsSection;