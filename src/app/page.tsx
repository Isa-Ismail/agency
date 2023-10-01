export default async function Home() {

  const res = await fetch('https://agency.teamrabbil.com/api/BrandList')
  const data = await res.json()

  const res2 = await fetch('https://agency.teamrabbil.com/api/HeroList')
  const data2 = await res2.json()
  console.log(data2)

  const res3 = await fetch('https://agency.teamrabbil.com/api/WorkList')
  const data3 = await res3.json()
  console.log(data3)
  
  const res4 = await fetch('https://agency.teamrabbil.com/api/HeroList')
  const data4 = await res4.json()
  console.log(data4)

  const res5 = await fetch('https://agency.teamrabbil.com/api/HeroList')
  const data5 = await res5.json()
  console.log(data5)

  return (
    <div className=''>
      <section className='bg-[#D7F5DC] px-20 min-h-screen md:flex py-10 justify-between items-center'>
      <div className='space-y-10'>
        <h1 className='text-5xl font-bold break-words w-[500px]'>
        {data2.title}
        </h1>
        <p className='text-2xl break-words w-[500px]'>
          {data2.description}
        </p>
        <button className='bg-green-500 text-white px-6 py-4 rounded-lg'>Get Started</button>
        </div>
        <div className='md:block hidden rounded-md'>
          <div className='flex p-2'>
            <img className='p-2 w-[20rem] h-[20rem]' alt='' src={data2.image1} />
            <img className='p-2 w-[28rem]  h-[20rem]' alt='' src={data2.image2} />
          </div>
          <div className='flex p-2'>
            <img className='p-2 w-[20rem]  h-[20rem]' alt='' src={data2.image3} />
            <img className='p-2 w-[28rem]  h-[20rem]' alt='' src={data2.image4}/>
          </div>
        </div>
      </section>
      <div className='bg-[#F8FFF9] h-[120px] flex justify-evenly px-10 items-center'>
        {/* <img src="Our Partners.jpg" alt="" /> */}
        {data.map((item: any) => (
          <img className='p-2 w-[10rem] h-[3.5rem]' alt='' src={item.image} />
        ))} 
      </div>
      <div className='px-20 py-20 space-y-4'>
        <h1 className='font-bold text-2xl text-green-500'>WORK LIST</h1>
        <p className="text-4xl font-bold">We provide the Perfect Solution to your business growth</p>
      </div>
    </div>
  )
}
