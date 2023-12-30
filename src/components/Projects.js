import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div className='md:w-5/6 w-full p-10' id='projects'>
        <h3 className='underline text-white text-3xl pb-2 mb-2'>Projects</h3>
        <div className='grid md:grid-cols-4 md:gap-4 grid-cols-1'>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
        </div>
    </div>
  )
}

export default Projects