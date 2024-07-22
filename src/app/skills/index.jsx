"use client"
import { skillsPara } from "../../../constant";
export default function Skills(){
    const skillsItem = ["WEBSITE DESIGN", "WEBSITE DEVELOPMENT", "REDESIGN", "E-COMMERCE", ];
    const toolsItem = ["HTML", "CSS", "TAILWIND CSS", "BOOTSTRAP", "JAVASCRIPT","REACT.JS" , "NEXT.JS","NODE.JS", "EXPRESS.JS" ,"GITHUB"];
return(
    <div className="bg-[#131311] text-[#CECEC4] rounded-t-[2rem]">
        <div className="lg:mt-4 lg:p-28 p-10  ">
            <h1 className=" text-4xl lg:text-[10rem]">SKILLS</h1>
            <h1 className="text-4xl lg:text-[10rem] lg:ml-[13rem] lg:mt-40">&{" "}FREELANCE</h1>
        </div>
        <div className="lg:flex">
            <div className=" lg:w-[50vw] ">
                <div className="  lg:w-[40vw] mt-20 ml-10">
                <h1 className=" lg:text-7xl text-4xl py-5   ">SKILLS</h1>
                <p className=" font-thin pr-10">{skillsPara.para1}</p>
                </div>
            </div>
            <div className="border-l-2 border-b-2 ">
                <div className="text-2xl lg:text-5xl lg:mt-24 mt-10 mb-10 px-10">
                {skillsItem.map((skill, index) => (
                        <div key={index} className="py-3">
                            <ul>
                                <li>{skill}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="lg:flex">
            <div className="text-slate-50 lg:w-[50vw] ">
                <div className="  lg:w-[40vw] mt-20 ml-10">
                <h1 className=" lg:text-7xl text-4xl py-5  ">TOOLS</h1>
                <p className=" pr-10 font-thin">I then bring your online vision to life with coding or CMS, depending on your needs. </p>
                </div>
            </div>
            <div className="lg:border-l-2  ">
                <div className="text-2xl lg:text-5xl mb-10 mt-24 px-10">
                {toolsItem.map((tool, index) => (
                        <div key={index} className="py-3">
                            <ul>
                                <li>{tool}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)
}