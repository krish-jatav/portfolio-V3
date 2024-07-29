"use client";
import React from "react";
import { AboutData, AboutData2, HomePageData, HomePageData2 } from "../../../constant";
import Footer from "../footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="border-b-2 relative bottom-[5rem] bg-[#131311] text-[#CECEC4]">
      <div className="flex flex-col lg:flex-row h-[100vh] w-full">
        <div className="h-[50vh] lg:h-[100vh] flex justify-center items-center lg:w-[50vw]">
          <div className="px-20">
            <h1 className="text-5xl md:text-5xl lg:text-7xl">{AboutData.para1}</h1>
          </div>
        </div>
        <div className="h-[30rem] lg:h-full p-0 flex justify-center items-center lg:w-[50vw] bg-[#131311]">
          <div className="h-[60vh] w-[20rem] rounded-lg bg-black">
            <Image
              src={HomePageData.image1} // Ensure this path is correct and accessible
              alt="aboutIMG"
              layout="responsive"
              width={500}
              height={750}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-full w-full flex lg:justify-end flex-col lg:flex-row px-10">
        <div className="lg:w-[50vw] flex flex-col justify-center pb-20 items-center mt-10">
          <div className="hidden lg:block w-full px-10 lg:h-[80vh] rounded-lg overflow-hidden">
            <Image
              src={HomePageData2.image2} // Ensure this path is correct and accessible
              alt="aboutimage2"
              layout="responsive"
              width={500}
              height={750}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="lg:w-[50vw] lg:px-10">
          <ul className="text-sm">
            {[
              { title: "01 Lifelong Learner:", content: AboutData2.para2 },
              { title: "02 World Traveler:", content: AboutData2.para3 },
              { title: "03 Self-Taught Videographer:", content: AboutData2.para4 },
              { title: "04 Music Lover:", content: AboutData2.para5 },
              { title: "05 Culinary Adventurer:", content: AboutData2.para6 },
            ].map((item, index) => (
              <li key={index} className="mt-5 text-lg border-b py-5 border-fuchsia-50">
                <span className="font-bold text-2xl">{item.title}</span> {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
