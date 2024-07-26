"use client";
import SelectedWork from "./SelectedWork/page";
import HomePage from "./home/page";
import HomeAbout from "./homeAbout";
import Noise from "./grainEff";
import Skills from "./skills";
import Footer from "./footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Skillsdata from "./skillsData/Skillsdata";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Noise></Noise>
      <HomePage> </HomePage>
      <HomeAbout> </HomeAbout>
      <SelectedWork></SelectedWork>
      <Skillsdata></Skillsdata>
      <Skills></Skills>
      {/* <Marquee></Marquee> */}
      <Footer></Footer>
    </div>
  );
}
