function SkillsSection() {
    const skills = {
        frontend: ['React', 'TypeScript', 'React Query', 'Tailwind CSS', 'DnD Kit'],
        tools: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm'],
        backend: ['Firebase', 'Node.js (learning)', 'Express (learning)']
    };

    return (
        <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b border-dark-20 pb-2">
                Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-dark-40 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.frontend.map(skill => (
                            <span key={skill} className="bg-dark-20 text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="bg-dark-40 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.tools.map(skill => (
                            <span key={skill} className="bg-dark-20 text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="bg-dark-40 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Backend</h3>
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