"use client";

import LocomotiveScroll from "locomotive-scroll";
import SelectedWork from "./SelectedWork/page";
import HomePage from "./home/page";
import HomeAbout from "./homeAbout";
import Noise from "./grainEff";
import Skills from "./skills";
import Marquee from "./morque";
import Footer from "./footer";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
<Noise></Noise>
      <HomePage> </HomePage> <SelectedWork></SelectedWork>
      <HomeAbout> </HomeAbout>
      <Marquee></Marquee>
      <Skills></Skills>
      <Footer></Footer>




    </div>
  );
}
