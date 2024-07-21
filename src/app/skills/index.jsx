"use client"
export default function Skills(){
    const skillsItem = ["WEBSITE DESIGN", "WEBSITE DEVELOPMENT", "REDESIGN", "E-COMMERCE", ];
    const toolsItem = ["HTML", "CSS", "TAILWIND CSS", "BOOTSTRAP", "JAVASCRIPT","REACT.JS" , "NEXT.JS","NODE.JS", "EXPRESS.JS" ,"GITHUB"];
return(
    <div>
        <div className="lg:mt-4 lg:p-28 p-10 ">
            <h1 className=" text-4xl lg:text-[10rem]">SKILLS</h1>
            <h1 className="text-4xl lg:text-[10rem] lg:ml-[13rem] lg:mt-40">&{" "}FREELANCE</h1>
        </div>
        <div className="lg:flex">
            <div className="text-slate-50 lg:w-[50vw] ">
                <div className="  lg:w-[40vw] mt-20 ml-10">
                <h1 className=" lg:text-7xl text-4xl py-5 px-10  ">SKILLS</h1>
                <p className=" font-thin">I can help if you have a digital product you want to design, or already have one, and want to make it look better, more interactive, and easier to use.</p>
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
                <p className=" font-thin">I then bring your online vision to life with coding or CMS, depending on your needs. If you don't know what's better for your business, hit me up, I'll be happy to guide you.</p>
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