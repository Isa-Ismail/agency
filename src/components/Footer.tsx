import React from 'react'

interface Props {}

const Footer:React.FC<Props> = () => {
  return (
    <footer className='bg-black md:flex text-center justify-between min-h-[30rem] py-16 px-16'>
          <div className='md:flex flex-1 text-center md:flex-col pr-10'>
              <h1 className='text-5xl text-white pb-6'>WEB LOGO</h1>
              <p className='text-white'>Some footer text about the <br /> Agency. Just a little description to <br /> help people understand you better</p>
                <div className='flex justify-center gap-5 py-10'>
                  <img src="/Group 32.jpg" alt="dw" />
                  <img src="/Group 33.jpg" alt="dw" />
                  <img src="/Group 34.jpg" alt="dw" />
                  <img src="/Frame 20095.jpg" alt="dw" />
                </div>
        </div>
          <div className='flex flex-1 md:pr-[10rem] flex-col text-white'>
              <h1 className='text-3xl'>Quick Links</h1>
              <p className='text-white py-6'>Services</p>
              <p className='text-white py-6'>Portfolio</p>
              <p className='text-white py-6'>About us</p>
              <p className='text-white py-6'>Contact us</p>
        </div>
          <div className='flex flex-col md:pr-[10rem]'>
              <h1 className='text-3xl text-white'>Address</h1>
              <p className='text-white py-3'>Design Agency Head Office</p>
              <p className='text-white py-3'>Airport Road</p>
              <p className='text-white py-3'>United Arab Emirates</p>
          </div>      
    </footer>
  )
}

export default Footer