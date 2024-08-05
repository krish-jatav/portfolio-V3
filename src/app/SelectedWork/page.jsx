"use client";

import Image from "next/image";

import {  SelectedProject } from "../../../constant";
import { motion } from "framer-motion"

export default function SelectedWork() {
  return (
    <motion.div   className="bg-[#DDDDD8]">
      <div className=" flex w-full justify-between px-10 py-10  ">
        <h1>SELECTED WORK (3)</h1>
        <h1>2024</h1>
      </div>
      <div  className="box  flex  justify-center gap-5 px-10  flex-wrap lg:flex-nowrap">
  <div className="h-[35rem] w-full   shadow-2xl  lg:w-[30rem] rounded-3xl overflow-hidden  lg:hover:w-[40rem] transition-all duration-1000 ease-in-out">
  {/* <h1 className="absolute text-white mt-[70vh] text-xl ml-10">The art century</h1> */}
     <Image className="h-[100%] object-cover w-[100%]" src={SelectedProject.image1}  alt="mockup1" >

     </Image>


  </div>
  <div className="box h-[35rem] w-full lg:w-[30rem]   shadow-2xl overflow-hidden  shadow-black-10  rounded-3xl  lg:hover:w-[40rem] transition-all duration-1000 ease-in-out">
  {/* <h1 className="absolute text-black mt-[70vh] text-xl ml-10">Red Bull</h1> */}
    <Image className="h-[100%] object-cover w-[100%]" src={SelectedProject.image2}  alt="mockup2" ></Image>
  </div>
  <div className="box h-[35rem] w-full  lg:w-[30rem]   shadow-2xl overflow-hidden   rounded-3xl lg:hover:w-[40rem] transition-all duration-1000 ease-in-out">
  {/* <h1 className="absolute text-white mt-[70vh] text-xl ml-10">Re designe</h1> */}
  <Image className="h-[100%] object-cover w-[100%]" src={SelectedProject.image3}  alt="mockup2" ></Image>
  </div>
</div>

    </motion.div>
  );
}
