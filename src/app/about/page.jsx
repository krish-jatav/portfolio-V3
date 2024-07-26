"use client"

import React from 'react'
import { AboutData, HomePageData } from '../../../constant'
import Image from 'next/image'
import Marquee from '../morque'
import Footer from '../footer'



export default function index() {
  return (
    <div className='border-b-2 relative bottom-[5rem]  bg-[#131311] text-[#CECEC4]'>

<div className="flex flex-col lg:flex-row h-[100vh] w-full">
  <div className="h-[50vh] lg:h-[100vh] flex justify-center items-center lg:w-[50vw] ">
    <div className=' px-20'>
      <h1 className='text-5xl md:text-5xl lg:text-7xl'>{AboutData.para1}</h1>
    </div>
  </div>
  <div className="h-[30rem] lg:h-full p-0 flex justify-center items-center lg:w-[50vw]  bg-[#131311]">
  <div className=' h-[60vh] w-[20rem] rounded-lg overflow-hidden bg-black'>
    <Image src={HomePageData[0].image1} height={100} width={100} alt='aboutIMG' className='h-full w-full object-cover'></Image>
    </div>
  </div>
</div>

   <div className='h-full w-full px-10 mt-10 '>
    <div className=''>
      <h1 className='lg:text-6xl text-[5rem] font-bold'>What I Do</h1>
    </div>
    <div className='  mt-10'>
      <h2 className=' font-semibold text-3xl'>As a frontend developer, I specialize in:</h2>
    </div>
    <div className='pb-20'>
      <ul className='text-2xl'>
        <li className='mt-10'>Web Development: Building responsive and dynamic websites using the latest web technologies.</li>
        <li className='mt-10'>UI/UX Design: Creating intuitive and visually appealing user interfaces that enhance the user experience.</li>
        <li className='mt-10'>JavaScript Frameworks: Expertise in ReactJS and Angular for developing interactive and efficient single-page applications.</li>
        <li className='mt-10'>Collaboration: Working closely with designers, backend developers, and other stakeholders to ensure seamless project delivery.</li>
      </ul>
    </div>

   </div>
   <Footer></Footer>
    </div>
  )
}
