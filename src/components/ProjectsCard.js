import React from 'react'

const ProjectsCard = () => {
  return (
    <div className='text-white mx-2 my-2 shadow-sm rounded-lg shadow-white'>
        <div><img className='hover:scale-105 w-full rounded-lg cursor-pointer' src='https://harshjsx.netlify.app/assets/ecom-391d27ac.png' alt='project'/></div>
        <div className='p-2'>
            <h3>Project Name</h3>
            <div className='flex justify-between '>
                <button>Code</button>
                <button>Demo</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard