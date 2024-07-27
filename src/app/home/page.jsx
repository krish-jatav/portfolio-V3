"use client";
import Image from "next/image";
import { paraItme, HomePageData } from "../../../constant";
import { motion } from "framer-motion";
import ButtonCmp from "../button";
import Circle from "../../../animation/Circle";
export default function HomePage() {
  return (
    <motion.div className=" bg-[#DDDDD8] ">
      <motion.div className="flex  text-center justify-center px-1  w-full relative items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-[5rem] text-[#131311] w-full tracking-[0.5rem] lg:tracking-[rem] mt-16 sm:text-9xl px-1 lg:text-[11rem] font-bold "
        >
          Hey I'm KRISH
        </motion.h1>
      </motion.div>

      <div className=" px-10 items-center   lg:flex justify-between   sm:w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="  text-sm text-[#79736D] lg:text-xl py-10 w-full md:w-96"
        >
          {paraItme.para}
          <div className="text-lg">
          <ButtonCmp>Get in Touch</ButtonCmp>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className=" h-[23rem] w-[19rem] shadow-2xl rounded-lg overflow-hidden  my-10"
        >
          <Image
            className="h-full  w-full object-cover "
            src={HomePageData[0].image1}
            alt="image1"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl text-center flex  justify-center items-center h-40 w-full md:w-96 "
        >
{paraItme.para2}
          <div className="w-[40rem]"><Circle></Circle></div>

        </motion.div>
      </div>
    </motion.div>
  );
}
