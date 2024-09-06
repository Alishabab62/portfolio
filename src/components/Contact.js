import React from 'react'

const Contact = () => {
  return (
    <div className='md:w-5/6 w-full p-10 mb-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg' id='contact'>
        <h3 className=' text-white text-4xl pb-4 text-center font-bold'>Contact</h3>
        <div className='flex flex-col items-center'>
            <form className='flex flex-col md:w-2/5 w-full bg-white p-6 rounded-lg shadow-2xl'>
              <input type="text" placeholder='Name' className='my-3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400'/>
              <input type="email" placeholder='Email' className='my-3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400'/>
              <textarea rows={5} cols={20} className='my-3 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400' placeholder='Message'></textarea>
              <button className='bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-600 transition duration-300 ease-in-out'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
