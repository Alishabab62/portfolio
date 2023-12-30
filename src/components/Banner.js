import React from 'react'
import Title from './Title'

const Banner = () => {
  return (
    <div className='text-white md:flex p-4 w-5/6 ' id='home'>
        <div className='md:w-2/3 w-full md:p-10 p-2'>
            <Title text="I am a Full Stack Developer"/>
            <p className='py-2 text-2xl'>I'm a self-taught, passionate web developer 💪 creating captivating interfaces and constantly expanding skills 💻. Excited for what lies ahead! 😎</p>
            <button className='bg-white text-black px-4 py-2 rounded-lg text-lg'>Download Resume</button>
        </div>
        <div className='md:w-1/3 w-full mt-4 md:mt-0'><img className='rounded-full h-80' src='https://harshjsx.netlify.app/assets/HeroImage-2cc19cdf.jpg' alt='profile'/></div>
    </div>
  )
}

export default Banner