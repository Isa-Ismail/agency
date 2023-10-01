import React from 'react'

interface Props {}

const Navbar:React.FC<Props> = () => {
    return (
        <nav className="bg-[#D7F5DC] w-full h-[80px]">
            <div className='flex mx-10 justify-between'>
                <h1 className='py-6 px-6 font-extrabold text-2xl'>Design<span className='text-red-500'>AGENCY</span></h1>
                <div className='hidden lg:flex'>
                    <ul className='flex'>
                        <li className='py-6 px-6 text-xl'>Home</li>
                        <li className='py-6 px-6 text-xl'>Team</li>
                        <li className='py-6 px-6 text-xl'>Services</li>
                        <li className='py-6 px-6 text-xl'>Projects</li>
                        <li className='py-6 px-6 text-xl'>Testimonials</li>
                        <li className='py-6 px-6 text-xl'><span className='border-solid border-2 py-2 px-3 border-green-500 rounded-md'>Login</span></li>
                        <li className='py-6 px-6 text-xl'><span className='py-3 px-3 text-white bg-green-500 rounded-md'>Register</span></li>
                    </ul>
                </div>
                <div className='lg:hidden'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="" className='cursor-pointer h-10 mt-6 mr-6'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar