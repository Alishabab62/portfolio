import React from 'react'

const About = () => {
  return (
    <div className='md:w-5/6 w-full p-10 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg' id='about'>
      <h3 className=' text-4xl text-gray-800 font-bold pb-4 mb-6 text-center'>About Me</h3>
      <div className='flex flex-col items-center md:flex-row'>
        <div className=''>
          <p className='text-gray-700 text-lg leading-relaxed'>
            As a front-end developer 🚀 who embarked on this exciting journey just 10 months ago, 
            I have already experienced transformative growth in my skills and passion for creating 
            captivating and user-friendly web interfaces. With each passing day, I dive deeper into 
            the realm of web development, driven by a thirst for knowledge and a desire to craft exceptional 
            digital experiences.
          </p>
          <p className='text-gray-700 text-lg leading-relaxed mt-4'>
            As I continue on this exhilarating journey, I am eager to tackle new challenges, embrace emerging 
            technologies, and contribute to the ever-evolving landscape of web development. With an insatiable 
            curiosity, a relentless drive for growth, and a genuine passion for crafting remarkable digital 
            experiences, I am excited to see where the next months and years will take me as a web developer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
