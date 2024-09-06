import React from 'react'
import SkillsCard from './SkillsCard'
import c from "../assests/c-logo.png"
import ex from "../assests/ex-removebg-preview.png"
import boot from "../assests/boot-removebg-preview.png"
import flutter from '../assests/icon_flutter.png'
import mongoDb from '../assests/MongoDB_SpringGreen.png'

const Skills = () => {
  return (
    <div className='md:w-5/6 w-full p-10 bg-gray-300 my-10 rounded-lg' id='skills'>
      <h3 className='underline text-white text-4xl pb-4 font-bold'>Skills</h3>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8'>
        <SkillsCard title="HTML" shadow="orange-600" url="https://harshjsx.netlify.app/assets/html-d20c9482.png" />
        <SkillsCard title="CSS" shadow="cyan-400" url="https://harshjsx.netlify.app/assets/css-4040bdba.png" />
        <SkillsCard title="JavaScript" shadow="amber-300" url="https://harshjsx.netlify.app/assets/javascript-d04a05c4.png" />
        <SkillsCard title="Flutter" shadow="sky-600" url={flutter} />
        <SkillsCard title="React" shadow="cyan-400" url="https://harshjsx.netlify.app/assets/react-e00184ba.png" />
        <SkillsCard title="Node Js" shadow="lime-400" url="https://harshjsx.netlify.app/assets/node-f467a70a.png" />
        <SkillsCard title="Express" shadow="lime-400" url={ex} />
        <SkillsCard title="Mongo DB" shadow="sky-600" url={mongoDb} />
        <SkillsCard title="Tailwind" shadow="sky-600" url="https://harshjsx.netlify.app/assets/tailwind-47f3710a.png" />
        <SkillsCard title="Bootstrap" shadow="cyan-400" url={boot} />
        <SkillsCard title="C++" shadow="sky-600" url={c} />
      </div>
    </div>
  )
}

export default Skills
