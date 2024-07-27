"use client"

import React from 'react'
import { AboutData, AboutData2, HomePageData } from '../../../constant'
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
  <div className="h-[30rem] lg:h-full  p-0 flex justify-center items-center lg:w-[50vw]  bg-[#131311]">
  <div className=' h-[60vh] w-[20rem] rounded-lg overflow-hidden bg-black'>
    <Image src={HomePageData[0].image1}  width={1000} alt='aboutIMG' className='h-full w-full object-cover'></Image>
    </div>
  </div>
</div>


   <div className='h-full w-full flex lg:justify-end   flex-col lg:flex-row  px-10  '>


    <div className=' lg:w-[50vw] flex flex-col justify-center pb-20  items-center mt-10'>

      <div className='  hidden lg:block w-full px-10      lg:h-[80vh] rounded-lg overflow-hidden '>
    <Image src={HomePageData[0].image1} height={500} width={500} alt='aboutIMG' className='h-full w-full rounded-2xl object-cover'></Image>
    </div>
    </div>
    <div className=' lg:w-[50vw] lg:px-10'>
      <ul className='text-sm'>
        <li className='mt-5 text-lg border-b py-5 border-fuchsia-50'> <span className='font-bold text-2xl'>01{" "}Lifelong Learner:</span>{" "}{AboutData2.para2}</li>
        <li className='mt-5 text-lg border-b py-5 border-fuchsia-50'> <span className='font-bold text-2xl'>02{" "}World Traveler:</span>{" "}{AboutData2.para3}</li>
        <li className='mt-5 text-lg border-b py-5 border-fuchsia-50'> <span className='font-bold text-2xl'>03{" "}Self-Taught Videographer:</span>{" "}{AboutData2.para4}</li>
        <li className='mt-5 text-lg border-b py-5 border-fuchsia-50'> <span className='font-bold text-2xl'>04{" "}Music Lover:</span>{" "}{AboutData2.para5}</li>
        <li className='mt-5 text-lg border-b py-5 border-fuchsia-50'> <span className='font-bold text-2xl'>05{" "}Culinary Adventurer:</span>{" "}{AboutData2.para6}</li>


      </ul>
    </div>

   </div>
   <Footer></Footer>
    </div>
  )
}
