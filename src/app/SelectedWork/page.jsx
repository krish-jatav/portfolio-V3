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
      <div  className="box  flex  justify-center gap-10 px-10 flex-wrap lg:flex-nowrap">
  <div className="h-[30rem]  shadow-2xl  w-[25rem] rounded-3xl overflow-hidden  hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">

     <Image className="h-[100%] object-cover w-[100%]" src={SelectedProject.image1}  alt="mockup1" ></Image>
  </div>
  <div className="box h-[30rem] shadow-2xl overflow-hidden w-[25rem] shadow-black-10  rounded-3xl hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">
    <Image className="h-[100%] object-cover w-[100%]" src={SelectedProject.image3}  alt="mockup2" ></Image>
  </div>
  <div className="box h-[30rem] shadow-2xl overflow-hidden w-[25rem]  rounded-3xl hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">
  <Image className="h-[100%] object-cover w-[100%]" src={SelectedProject.image3}  alt="mockup2" ></Image>
  </div>
</div>

    </motion.div>
  );
}
