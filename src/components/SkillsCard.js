import React from 'react'

const SkillsCard = ({ title, shadow, url }) => {
  return (
    <div className={`bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-${shadow} rounded-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out my-6`}>
      <div className='flex flex-col items-center'>
        <img className='w-32 h-32 object-cover rounded-full border-4 border-white' src={url} alt={title} />
        <h3 className='text-white text-center text-2xl font-semibold py-4'>{title}</h3>
      </div>
    </div>
  )
}

export default SkillsCard
