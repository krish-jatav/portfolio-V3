"use client"
import Link from "next/link";
import { FooterItem } from "../../../constant";

export default function Footer() {
    return (
      <div   className=" bg-[rgb(221,221,216)] rounded-t-[2rem] sm:h-screen   overflow-hidden   w-full flex justify-center items-center      text-[#161614] ">
        <div className=" w-full px-10  ">
          <div className="py-5  ">
            <h1 className="text-2xl">Hey There..............</h1>
          </div>
          <div className=" lg:h-[80vh] h-[50vh] bg-[#131311] rounded-3xl items-center flex flex-col justify-center ">
            <div className=" text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold md:text-5xl lg:text-9xl text-[#DDDDD8] ">
            Let's work  <br /> together

            </h1>
            <h2 className="text-[#757474] text-sm p-6 font-light  lg:text-4xl ">krishjatav246@gmail.com  </h2>
            </div>
          </div>


          <div className="  flex  py-6 justify-between text-sm ">

                        {FooterItem.map((footer, index) => (
                        <div key={index} className="">
                          <Link href={footer.href} className="">
                          {footer.item}
                          </Link>


                        </div>
                    ))}


          </div>
        </div>
      </div>
    );
  }
