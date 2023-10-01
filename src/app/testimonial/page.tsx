import React from 'react'

interface Props {}

const page = async() => {

  const res = await fetch('https://agency.teamrabbil.com/api/TestimonialList')
  const data = await res.json()

  return (
    <div className='py-20 px-10 space-y-8' >
      <div className='space-y-8'>
        <h1 className='text-5xl font-bold'>TESTIMONIAL LIST</h1>
        <p>Home {">"} <span className='text-green-500'>TestimonialList</span></p>
      </div>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold text-green-500'>TESTIMONIAL LIST</h1>
        <p className='font-bold'>Better Agency/SEO Solution At Your Fingertips</p>
        <div className='flex pt-20 justify-center flex-wrap gap-8'>
          {data.slice(0,4).map((item: any) => (
            <div className='flex shadow-xl rounded-lg p-10 flex-col space-y-4 items-center pt-10'>
                <img className='w-[5rem] h-[5rem] rounded-md' alt='' src={item.image} />
                <p className='break-words w-[240px]'>{item.msg}</p>
                <p className='text-2xl font-bold'>{item.name}</p>
                <p className=''>{ item.designation }</p>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default page