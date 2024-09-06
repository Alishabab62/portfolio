import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div className='md:w-5/6 w-full p-10 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg mt-10' id='projects'>
      <h3 className=' text-gray-800 text-4xl font-bold pb-4 mb-6 text-center'>My Projects</h3>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
        <ProjectsCard title={"Food Ordering Website"} />
        <ProjectsCard title={"Movies House"} />
        <ProjectsCard title={"Rock Paper Scissor"} />
        <ProjectsCard title={"Youtube Clone"} />
        <ProjectsCard title={"E-commerce Website"} />
        <ProjectsCard title={"Portfolio Website"} />
        <ProjectsCard title={"Weather App"} />
        <ProjectsCard title={"Blog Platform"} />
      </div>
    </div>
  )
}

export default Projects
