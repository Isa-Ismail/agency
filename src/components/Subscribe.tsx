import React from 'react'

interface Props {}

const Subscribe = () => {
    return (
        <div className='flex py-20 flex-col justify-center items-center min-h-20 space-y-4'>
            <h1 className='text-3xl font-bold text-green-500'>Subscribe</h1>
            <p className='font-bold text-3xl text-center'>Subscribe To Get The Latest News About Us</p>
            <p>Please drop your email below to get daily update</p>
            <div className=' border-solid border-2 flex justify-between w-[28rem] border-black p-1 rounded-md'>
                <input className='outline-none border-none text-lg' type="text" placeholder='Enter your Email Address' />
                <button className='bg-orange-500 p-2 rounded-md'>Submit</button>
            </div>
        </div>
    )
}

export default Subscribe