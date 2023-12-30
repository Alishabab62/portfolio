import React from 'react'
import { FaBars } from "react-icons/fa";
import ScrollIntoView from 'react-scroll-into-view'

const Header = ({fun}) => {
  return (
    <div className='flex justify-end items-center shadow-md shadow-white w-full'>
        <div className='text-white p-6 hidden md:flex '>
            <ScrollIntoView selector='#home'>
              <button className='mx-2 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200'>Home</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#about'>
              <button className='mx-2 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200'>About</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#skills'>
              <button className='mx-2 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200'>Skills</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#projects'>
              <button className='mx-2 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200'>Projects</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#experience'>
              <button className='mx-2 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200'>Experience</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#contact'>
              <button className='mx-2 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200'>Contact</button>
            </ScrollIntoView>
        </div>
        <div className='p-4 md:hidden'>
            <FaBars className='text-white text-3xl cursor-pointer ' onClick={()=>fun()}/>
        </div>
    </div>
  )
}

export default Header