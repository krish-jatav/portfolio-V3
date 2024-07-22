import Image from "next/image";
import { paraItme, HomePageData } from "../../../constant";
import { motion } from "framer-motion";
import ButtonCmp from "../button";
export default function HomePage() {
  return (
    <motion.div className=" bg-[#DDDDD8]">
      <motion.div className="flex  text-center justify-center px-10  w-full relative items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-[4rem] tracking-[2rem] lg:tracking-normal mt-16 sm:text-9xl px-4 lg:text-[11rem] font-semibold "
        >
          KR1SH <span className="font-thin">ジャタヴ</span>
        </motion.h1>
      </motion.div>

      <div className=" p-10 items-center   lg:flex justify-between   sm:w-full">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 10 }}
          className="  text-sm lg:text-xl py-10 w-full md:w-96"
        >
          {paraItme.para}
          <ButtonCmp></ButtonCmp>
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
          className="text-3xl text-center  h-20 w-full md:w-96 "
        >
          {paraItme.para2}
        </motion.div>
      </div>
    </motion.div>
  );
}
