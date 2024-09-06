import React from 'react'
import Title from './Title'
import profile from "../assests/profile.jpg"

const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-800 text-white md:flex p-6 md:p-10 w-5/6 mx-auto my-8 rounded-lg shadow-lg' id='home'>
      <div className='md:w-2/3 w-full flex flex-col justify-center'>
        <Title text="I am a Full Stack Developer"/>
        <p className='py-4 text-lg md:text-2xl text-gray-300'>
          I'm a self-taught, passionate web developer 💪 creating captivating interfaces and constantly expanding skills 💻. Excited for what lies ahead! 😎
        </p>
        <button className='bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg text-lg font-semibold transition duration-300'>
          Download Resume
        </button>
      </div>
      <div className='md:w-1/3 w-full flex items-center justify-center mt-6 md:mt-0'>
        <img className='rounded-full h-72 md:h-80 border-4 border-yellow-500' src={profile} alt='profile'/>
      </div>
    </div>
  )
}

export default Banner
