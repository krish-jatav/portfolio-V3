"use client";
import Noise from "./grainEff";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import HomePage from "./home/page";
import HomeAbout from "./homeAbout/page";
import SelectedWork from "./SelectedWork/page";
import Skillsdata from "./skillsData/page";
import Skills from "./skills/page";
import Footer from "./footer/page";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
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
<HomePage></HomePage>
<HomeAbout></HomeAbout>
<SelectedWork></SelectedWork>
<Skillsdata></Skillsdata>
<Skills></Skills>
      {/* <Marquee></Marquee> */}
      <Footer></Footer>
    </div>
  );
}
