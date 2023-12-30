import React from 'react'

const Contact = () => {
  return (
    <div className='md:w-5/6 w-full p-10  bg-black mb-20' id='contact'>
        <h3 className='underline text-white text-3xl pb-2 text-left'>Contact</h3>
        <div className='flex flex-col items-center'>
            <form className='flex flex-col bg-black md:w-2/5 w-full'>
              <input type="text" placeholder='Name' className=' bg-black my-2 p-2 shadow-sm rounded-lg shadow-white'/>
              <input type="email" placeholder='Email' className='bg-black my-2 p-2 shadow-sm rounded-lg shadow-white'/>
              <textarea rows={5} cols={20} className='bg-black shadow-sm rounded-lg p-2 shadow-white my-2' placeholder='Message'></textarea>
              <button className='bg-white text-black px-4 py-2 rounded-lg text-lg'>Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default Contact