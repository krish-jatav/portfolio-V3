import Image from "next/image";
import { paraItme, SelectedProject } from "../../../constant";
import { useAnimate, stagger, motion } from "framer-motion"

export default function SelectedWork() {
  return (
    <motion.div   className="bg-[#DDDDD8]">
      <div className=" flex w-full justify-between px-10 py-10  ">
        <h1>SELECTED WORK (3)</h1>
        <h1>2024</h1>
      </div>
      <div  className="box  flex  justify-center gap-10 px-10 flex-wrap lg:flex-nowrap">
  <div className="h-[30rem]  shadow-2xl  w-[25rem] rounded-3xl overflow-hidden  hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">
     <img data-scroll   className="h-full w-full  object-cover filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" src="https://cdn.dribbble.com/userupload/4047087/file/original-42ea35b6c6cafaaf64b26cb0d7a537fb.jpg?resize=1200x900&vertical=center"  alt="img1" />

     {/* <Image className="h-[100%] object-cover w-[100%]" src={SelectedProject[0].image1}  alt="mockup1" ></Image> */}
  </div>
  <div className="box h-[30rem] shadow-2xl overflow-hidden w-[25rem] shadow-black-10  rounded-3xl hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">
     <img data-scroll  className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" src="https://cdn.dribbble.com/userupload/5153826/file/original-2e1ef8ee908609add04509255479b491.png?resize=1200x900" alt="img2" />
    {/* <Image className="h-[100%] object-cover w-[100%]" src={SelectedProject[0].image3}  alt="mockup2" ></Image> */}
  </div>
  <div className="box h-[30rem] shadow-2xl overflow-hidden w-[25rem]  rounded-3xl hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">
    <img data-scroll className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" src="https://cdn.dribbble.com/userupload/6211720/file/original-f312fd901219f61e70feea1060398914.png?resize=1200x900" alt="img2" />
  </div>
</div>

    </motion.div>
  );
}
