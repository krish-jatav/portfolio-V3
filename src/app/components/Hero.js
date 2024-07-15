import { motion } from "framer-motion";

export default function Hero() {
	const phrases1 = ["Creative"];
	const phrases2 = ["Designer &"];
	const phrases4 = ["developer"];
	return (
		<div className="w-full h-screen bg-slate-500 flex flex-col  items-center">
            <div className="w-full flex justify-center items-center h-3/4 bg-black">
                <div className="w-full text-white items-center text-6xl md:text-9xl px-8">
                    <h1 className="  ">{phrases1}</h1>
                    <h1 className=" md:ml-[30rem] sm:ml-[0rem]">{phrases2}</h1>
                    <h1 className=" sm:ml-[0rem] md:ml-[50rem]">{phrases4}</h1>
                </div>
            </div>
        </div>
	);
}
