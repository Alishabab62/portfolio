import React from 'react'

const SkillsCard = ({title,shadow,url}) => {
  return (
    <div className={`shadow-sm rounded-lg shadow-${shadow} p-2 hover:scale-105 delay-150 my-2`}>
        <div className='flex flex-col items-center'>
            <img className='w-28 h-28' src={url} alt='html'/>
            <h3 className='text-white text-center text-xl font-bold py-2 '>{title}</h3>
        </div>
    </div>
  )
}

export default SkillsCard