import { motion } from "framer-motion";

export default function Marquee() {


  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full  bg-[#131311]  '>
    <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden text-[#cecec451]">
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity, duration:12}} className='text-[20vw] tracking-tighter leading-none  font-semibold uppercase  pr-16 pt-1 italic'>hey そこには </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity, duration:12}} className='text-[20vw] tracking-tighter leading-none  font-semibold uppercase  pr-16  pt-1 italic'>hey そこには</motion.h1>
    </div>
</div>
  );
}
