"use client"

import Image from "next/image";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero"

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <Footer></Footer>
   </div>
  );
}
