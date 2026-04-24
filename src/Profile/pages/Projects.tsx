import { useParams } from "react-router-dom"
import { projects } from "../constants/constants"

function Projects() {

  const {id} = useParams()
  const project =  projects.find((item) => item.id === Number(id))

  return (
    <section className="bg-black text-white flex flex-col min-h-screen overflow-x-hidden">
      <div className="ml-2 p-4 w-full h-full flex flex-col gap-4">
        <div className="flex flex-col ">
          <div className="h-full p-2">
            <h1 className="text-4xl font-semibold">{project?.title}</h1>

            <p className="mt-2 w-2/3">{project?.description}</p>
          </div>

          <div className=" h-full w-full flex flex-col gap-2 p-2 mt-5">
            <ul className="flex gap-2">
              Tech:
              {project?.tech.map(item =>(
                <li key={item}>{item},</li>
              ))}
            </ul>

            <a href={project?.github} target="_blank" className="flex gap-2">Link: <p className="hover:underline hover:text-blue-700">{project?.github}</p></a>
          </div>
          
        </div>

        <div className={`w-full md:w-[80%] h-fit grid ${project?.imgs?.length as number > 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'} gap-4 mt-5 self-center justify-self-center`}>
          {project?.imgs?.map((item) =>(
            
            <img className="bg-dark-50 w-full h-full object-center object-contain cursor-pointer hover:-translate-y-1 duration-300" 
              onClick={() => window.open(`${item}`, '_blank')} 
              src={item} key={item} 
            />
            
          )) }
        </div>
      </div>
    </section>

  )
}

export default Projects