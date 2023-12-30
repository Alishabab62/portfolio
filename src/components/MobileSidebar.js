import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'


export const MobileSidebar = ({val}) => {
  return (
    <div className='absolute z-10 bg-black w-full md:hidden py-2 top-[61px]' style={{ left: val ? "0px" : "-600px", transition: "left 0.5s ease-in-out" }}>
        <div className={`text-white  flex flex-col `} style={{ width: val ? "100%" : "0%", transition: "width 0.7s ease-in-out" }}>
            <ScrollIntoView selector='#home' className='w-full flex justify-center'>
                <button className='my-1 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'>Home</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#about' className='w-full flex justify-center'>
              <button className='my-1 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'>About</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#skills' className='w-full flex justify-center'>
              <button className='my-1 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'>Skills</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#projects' className='w-full flex justify-center'>
              <button className='my-1 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'>Projects</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#experience' className='w-full flex justify-center'>
              <button className='my-1 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'>Experience</button>
            </ScrollIntoView>
            <ScrollIntoView selector='#contact' className='w-full flex justify-center'>
              <button className='my-1 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'>Contact</button>
            </ScrollIntoView>
        </div>
</div>
  )
}
