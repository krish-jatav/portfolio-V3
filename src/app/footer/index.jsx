"use client"
import { FooterItem } from "../../../constant";

export default function Footer() {
    return (
      <div data-scroll data-scroll-section  className=" bg-[#DDDDD8] rounded-t-[2rem]   text-[#161614] ">
        <div className=" px-12">
          <div className="py-5 border-b-2 border-black ">
            <h1 className="text-2xl">About</h1>
          </div>
          <div className="pt-1">
            <h1 className="text-xl lg:text-4xl pb-10  lg:w-[50vw] ">
            let's create something awesome together
            </h1>
            <img src="https://www.huyng.xyz/_next/static/media/contact.269b257e.svg" alt="footer"/>
          </div>
          <div className=" lg:flex flex-col py-20 justify-between text-sm ">

                        {FooterItem.map((footer, index) => (
                        <div key={index} className="py-3">
                           {footer.item}
                        </div>
                    ))}

          </div>
        </div>
      </div>
    );
  }
