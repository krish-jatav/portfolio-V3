"use client";

import Link from "next/link";
import ButtonCmp from "../button/page";
import { homeAboutdata } from "../../../constant";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function HomeAbout() {
  const [showCustomWebInterfaces, setShowCustomWebInterfaces] = useState(false);
  const [showCustomWebInterfaces1, setShowCustomWebInterfaces1] = useState(false);
  const [showCustomWebInterfaces2, setShowCustomWebInterfaces2] = useState(false);
  return (
    <div className=" mt-10  bg-[#DDDDD8]  bg text-[#151513] ">
      <div className=" px-10">
        <div className="py-5 border-b-2 border-black">
          <h1 className="text-2xl">About</h1>
        </div>
        <div className=" py-10">
          <h1 className="text-xl text-[#3c3c3a] font-normal  lg:text-3xl pb-20 border-b-2 border-[#3c3c3a]  lg:w-[50vw] ">
            {homeAboutdata.para1}
            <Link className="text-xl" href="/about">
              <ButtonCmp>Read more</ButtonCmp>
            </Link>
          </h1>
        </div>
      </div>
      <div>
        <div>
          <div className=" w-full lg:flex flex-col justify-between">
            <div className="lg:w-[80vw]  w-full px-3">
            <h1 className="ml-10 lg:text-6xl text-3xl mt-5 lg:mt-20 font-bold">Web Development</h1>
            <p className="ml-10 lg:text-xl text-xl mt-5 lg:mt-10 ">As a passionate frontend developer, I specialize in creating stunning and responsive web interfaces. Here’s how I can help you achieve your digital goals:</p>
            </div>

            <div className=" px-10">
            <ul className="text-2xl  w-[80vw] lg:ml-[15rem] ">
            <div className="lg:px-10  ">
                  <li className="mt-10 text-lg flex justify-between items-center border-t border-b py-5 border-[#171715]">
                    <span className="font-bold lg:text-4xl text-[#171715]">Custom Web Interfaces</span>
                    <Plus onClick={() => setShowCustomWebInterfaces(!showCustomWebInterfaces)} className="cursor-pointer size-10" />
                  </li>
                  <div
                    className={` text-lg overflow-hidden transition-all duration-1000  linear ${
                      showCustomWebInterfaces ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="py-5">
                      {homeAboutdata.customWebPara}
                    </p>
                  </div>
                </div>
                <div className="lg:px-10">
                  <li className=" text-lg flex justify-between items-center border-t border-b py-5 border-[#171715]">
                    <span className="font-bold lg:text-4xl ">Modern Frameworks</span>
                    <Plus onClick={() => setShowCustomWebInterfaces1(!showCustomWebInterfaces1)} className="cursor-pointer size-10" />
                  </li>
                  <div
                    className={` text-lg overflow-hidden transition-all duration-1000  linear ${
                      showCustomWebInterfaces1 ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="py-5">
     {homeAboutdata.modernFrameWorkpara}
                    </p>
                  </div>
                </div>
                <div className="lg:px-10">
                  <li className=" text-lg flex justify-between items-center border-b border-t  py-5 border-[#171715]">
                    <span className="font-bold lg:text-4xl">Responsive Design</span>
                    <Plus onClick={() => setShowCustomWebInterfaces2(!showCustomWebInterfaces2)} className="cursor-pointer size-10" />
                  </li>
                  <div
                    className={`mt-2 text-lg overflow-hidden transition-all duration-1000  linear ${
                      showCustomWebInterfaces2 ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="py-5">
                     {homeAboutdata.ResponsiveDesignPara}
                    </p>
                  </div>
                </div>

                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
