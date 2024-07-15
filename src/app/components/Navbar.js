"use client"
 import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (

<div>
<div className='bg-white  flex text-black  justify-between px-9 h-16 items-center'>
       <h1>krish</h1>
       <div className='hidden md:flex justify-between w-80 '>
        <Link href="/"> <h1>about</h1></Link>
        <Link href="/"> <h1>project</h1></Link>
        <Link href="/">   <h1>awards</h1></Link>
        <Link href="/"><h1>faq</h1></Link>
       </div>
    </div>
</div>
  );
}
