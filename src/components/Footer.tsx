import React from 'react'

interface Props {}

const Footer:React.FC<Props> = () => {
  return (
    <footer className='bg-black md:flex text-center justify-evenly min-h-[30rem] items-start p-20'>
          <div className='flex text-center flex-col items-center'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-5xl text-white pb-6'>WEB LOGO</h1>
              <p className='text-white break-words w-[300px] py-4'>Some footer text about the Agency. Just a little description to help people understand you better</p>
            </div>
            <div className='flex justify-center gap-5 py-16'>
              <img className='rounded-full' src="/Group 32.jpg" alt="dw" />
              <img className='rounded-full' src="/Group 33.jpg" alt="dw" />
              <img className='rounded-full' src="/Group 34.jpg" alt="dw" />
              <img className='rounded-full' src="/Frame 20095.jpg" alt="dw" />
            </div>
          </div>
          <div className='flex flex-1 flex-col text-white'>
              <h1 className='text-3xl pb-10'>Quick Links</h1>
              <p className='text-white py-4'>Services</p>
              <p className='text-white py-4'>Portfolio</p>
              <p className='text-white py-4'>About us</p>
              <p className='text-white py-4'>Contact us</p>
          </div>
          <div className='flex flex-col'>
              <h1 className='text-3xl pb-10 text-white'>Address</h1>
              <p className='text-white py-3'>Design Agency Head Office</p>
              <p className='text-white py-3'>Airport Road</p>
              <p className='text-white py-3'>United Arab Emirates</p>
          </div>      
    </footer>
  )
}

export default Footer