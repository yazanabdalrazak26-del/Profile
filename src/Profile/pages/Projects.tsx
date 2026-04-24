import { useParams } from "react-router-dom";
import { projects } from "../constants/constants";

function Projects() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return <div className="text-white text-center py-20">Project not found</div>;
  }

  return (
    <section className="bg-black text-white min-h-screen overflow-x-hidden px-4 py-8">
      <div className="max-w-6xl mx-auto">
          
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl">
            {project.description}
          </p>
        </div>

         
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
              <span className="font-semibold">Tech:</span>
              {project.tech.map((item, index) => (
                <span key={item} className="text-gray-300">
                  {item}{index !== project.tech.length - 1 ? ',' : ''}
                </span>
              ))}
          </div>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline break-all"
          >
            GitHub: {project.github}
          </a>
        </div>

          
          <div className={`
            grid gap-4
            ${project.imgs?.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}
            ${project.imgs?.length > 2 ? 'lg:grid-cols-3' : ''}
          `}>

          {project.imgs?.map((item) => (
            <img 
              className="w-full h-auto object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => window.open(item, '_blank')} 
              src={item} 
              key={item} 
              alt={project.title}
            />
          ))}
          </div>
      </div>
    </section>
  );
}

export default Projects;