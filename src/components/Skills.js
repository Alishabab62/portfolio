import React from 'react'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className='md:w-5/6 w-full p-10' id='skills'>
        <h3 className='underline text-white text-3xl pb-2'>Experience</h3>
        <div className='grid md:grid-cols-4 md:gap-4 grid-cols-1 mt-2'>
          <SkillsCard/>
          <SkillsCard/>
          <SkillsCard/>
          <SkillsCard/>
          <SkillsCard/>
          <SkillsCard/>
        </div>
    </div>
  )
}

export default Skills