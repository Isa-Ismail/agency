import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <section className='bg-[#D7F5DC] px-20 min-h-screen md:flex py-10 justify-between items-center'>
      <div className='space-y-10'>
        <h1 className='text-5xl font-bold'>
        Increase Your <br/> Customers Loyalty <br /> and Satisfaction
        </h1>
        <p className='text-2xl'> We help business like yours earn more customers, <br />
          standout from competitors, make more money
        </p>
        <button className='bg-green-500 text-white px-6 py-4 rounded-lg'>Get Started</button>
        </div>
        <div className='md:block hidden'>
          <div className='flex p-2'>
            <img className='p-2' alt='' src='/1.jpg' />
            <img className='p-2' alt='' src='/2.jpg' />
          </div>
          <div className='flex p-2'>
            <img className='p-2' alt='' src='/3.jpg' />
            <img className='p-2' alt='' src='/4.jpg' />
          </div>
        </div>
      </section>
      <div className='bg-[#F8FFF9] h-[120px] flex justify-center'><img src="Our Partners.jpg" alt="" /></div>
      <div className='px-20 py-20'>
        <h1 className='font-bold text-2xl text-green-500'>WORK LIST</h1>
      </div>
    </div>
  )
}
