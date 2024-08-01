"use client"

import Link from "next/link";
import ButtonCmp from "../button/page";


export default function HomeAbout() {
  return (
    <div     className=" mt-10  bg-[#DDDDD8]  text-[#171715] ">
      <div className=" px-10">
        <div className="py-5 border-b-2 border-black">
          <h1 className="text-2xl">About</h1>
        </div>
        <div className=" py-10">
          <h1 className="text-xl text-[#3c3c3a] font-normal  lg:text-3xl pb-20 border-b-2 border-[#3c3c3a]  lg:w-[50vw] ">
          Hi, I'm Krish, a passionate and dedicated freelance Frontend Developer with expertise in building engaging and responsive user interfaces. With a background in Computer Science and a specialization in Web Development .
          <Link className="text-xl" href="/about">
<ButtonCmp>Read more</ButtonCmp>
      </Link>
          </h1>


        </div>
      </div>
    </div>
  );
}
