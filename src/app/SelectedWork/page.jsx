import Image from "next/image";
import { paraItme } from "../../../constant";

export default function SelectedWork() {
  return (
    <div className="bg-[#DDDDD8]">
      <div className=" flex w-full justify-between px-10 py-10 mt-10 ">
        <h1>SELECTED WORK (3)</h1>
        <h1>2024</h1>
      </div>
      <div  className="  flex  justify-center gap-4 px-10 flex-wrap">
  <div className="h-[30rem]  shadow-2xl  w-[25rem] rounded-3xl overflow-hidden  hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">
    <img data-scroll   className="h-full w-full  object-cover filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" src="https://cdn.dribbble.com/userupload/7743180/file/original-35d560e1df6e1f0bbd57e147052de1a1.png?resize=1200x900"  alt="img1" />
  </div>
  <div className="h-[30rem] shadow-2xl overflow-hidden w-[25rem] shadow-black-10  rounded-3xl hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">
    <img data-scroll  className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" src="https://cdn.dribbble.com/userupload/7317089/file/original-3323c6e6b03d4c9a4cab0c67d6237a40.png?resize=1200x900 " alt="img2" />
  </div>
  <div className="h-[30rem] shadow-2xl overflow-hidden w-[25rem]  rounded-3xl hover:w-[35rem] lg:hover:w-[35rem] transition-all duration-1000 ease-in-out">
    <img data-scroll className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" src="https://cdn.dribbble.com/userupload/6211720/file/original-f312fd901219f61e70feea1060398914.png?resize=1200x900" alt="img2" />
  </div>
</div>

    </div>
  );
}
