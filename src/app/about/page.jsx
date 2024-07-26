import React from 'react'
import { HomePageData, image1 } from '../../../constant'
import Image from 'next/image'



export default function index() {
  return (
    <div className='border-b-2 relative bottom-[5rem]  bg-[#131311] text-[#CECEC4]'>

     <div className=' flex px-10 h-screen w-full bg-slate-500'>
      <div  className='  lg:flex flex-col justify-center items-center  '>
        <div className='h-[50vh] w-[50vw] bg-slate-50 '>
        <h1 className='lg:text-8xl pl-10'>Some interesting facts about me —</h1>

        </div>

      </div>
      <div className=' h-screen w-[50vw]  flex justify-center items-center'>
        <div className='h-[50vh] w-[50vw] lg:h-[90vh] lg:w-[35vw] bg-white'>
        {/* <Image
            className="h-full  w-full object-cover "
            src={HomePageData[0].image1}

            alt="image1"
          /> */}
        </div>
      </div>
     </div>
     <div className='h-screen flex justify-center items-center bg-[#131311] text-[#CECEC4]'>
       <div className='w-[85vw] flex justify-center items-center h-[70vh] rounded-xl bg-[#C0C0C0]'>
       <p className='text-black lg:p-20 p-6 text-sm'>
                        "Hello, I'm Krish, a passionate Frontend web developer with a background in software engineering. My journey in web development has been fueled by a deep love for crafting seamless digital experiences. Recently, <br /><br /> I've
                        embarked on the exciting challenge of expanding my skill set to encompass Fullstack web development, driven by a desire to explore the intricate workings of both frontend and backend technologies. Leveraging my solid foundation
                        in software engineering, I am committed to creating clean and intuitive user interfaces that enhance user experiences. <br /><br /> Each project is an opportunity for me to push boundaries, solve problems, and innovate in the ever-evolving
                        landscape of technology. I'm Krish, a dedicated individual, eager to carve my path and make meaningful contributions in the dynamic world of web development."
                    </p>
       </div>
     </div>
    </div>
  )
}
