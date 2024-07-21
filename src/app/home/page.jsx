import Image from "next/image"
import { paraItme } from "../../../constant"
import {gsap} from "gsap"
export default function HomePage(){
    return(
        <div   className="">
            <div  className="flex justify-center px-10  w-full relative items-center">
            <h1 className="text-[4rem] mt-16 sm:text-9xl px-4 lg:text-[11rem] font-semibold ">KR1SH <span className="font-thin">ジャタヴ</span></h1>
            </div>

         <div className="container  items-center   lg:flex justify-between mx-auto px-16 sm:w-full">

         <div className="text-6xl tracking-wider h-20 w-full md:w-96">
        {paraItme.para2}
    </div>
    <div className="bg-black h-80 w-64 my-4">
        <img className="h-full  w-full filter grayscale hover:grayscale-0 transition duration-300 ease-in-out " src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={100} width={100} alt="myimg" />
    </div>
    <div className="h-20 w-full md:w-96">
        {paraItme.para}
    </div>


</div>

        </div>
    )
}