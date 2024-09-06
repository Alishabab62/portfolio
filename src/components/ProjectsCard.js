import React from 'react'

const ProjectsCard = ({ title }) => {
  return (
    <div className='bg-gray-800 text-white mx-2 my-4 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
      <div className='relative'>
        <img 
          className='w-full h-48 object-cover cursor-pointer transition-transform transform hover:scale-110 duration-300' 
          src='https://harshjsx.netlify.app/assets/ecom-391d27ac.png' 
          alt={title || 'project'}
        />
        <div className='absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition-opacity duration-300'></div>
      </div>
      <div className='p-4 text-center'>
        <h3 className='text-xl font-semibold mb-4'>{title || 'Project Title'}</h3>
        <div className='flex justify-around'>
          <button className='bg-blue-500 px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300'>Code</button>
          <button className='bg-green-500 px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors duration-300'>Demo</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
