import React from 'react'
import { ContactData } from '../../../constant'
import { ArrowDown } from 'lucide-react'
import Footer from '../footer'



export default function index() {
  return (
    <div className='border-b-2 relative bottom-[5rem] bg-[#131311] text-[#CECEC4] border-black'>
      <div className=' relative top-9 '>
        <h1 className='text-3xl pt-20   md:text-5xl lg:text-8xl  font-bold px-10'>{ContactData.para1}</h1>
      </div>
      <div className='mt-36 mb-[3.5rem] flex justify-between px-10  '>
        <div>
        <h2 className=' font-semibold text-2xl  md:text-2xl'>{ContactData.para2}</h2>
        <h4 className='mt-5 font-light text-neutral-500  text-sm  md:text-xl lg
         lg:w-[40vw] w-full  '>{ContactData.para3}</h4>
        </div>

         <div className='mt-20 hidden lg:block'>
          <ArrowDown className='size-16 text-neutral-700' ></ArrowDown>
         </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}
