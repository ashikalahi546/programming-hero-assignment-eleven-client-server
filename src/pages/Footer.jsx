import React from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-[#0C3330] pt-12">
      <div className="  ">
        <footer className="text-white xl:w-9/12 lg:w-10/12 lg:px-0 px-5 mx-auto grid md:grid-cols-3 sm:grid-cols-2  gap-12 ">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-x-2">
              <img src="images/clip2.png" alt="" />

              <h1 className="text-lg">
                Assiantment <span className="text-[#02C9C9]">.bd</span>
              </h1>
            </div>
            <p className="leading-6 text-base">
              Our platform offers a comprehensive suite of tools and resources
              designed to streamline the assignment process from brainstorming.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-xl font-medium">Contact Us</h1>
            <div className="flex items-center gap-x-1 text-base">
              <span>
                <MdPhoneInTalk />
              </span>
              <p>+1 (000) 999 888 77</p>
            </div>
            <div className="flex items-center gap-x-1 text-base">
              <span>
                <MdEmail />
              </span>
              <p>ashikalahi@gmail.com</p>
            </div>
            <div className="flex  gap-x-1 text-base">
              <span className="pt-1">
                <SlLocationPin />
              </span>
              <p>
                Madhupur 4654, Tangail,
                <span className="block"> Dhaka road 1230</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-medium">Social media</h1>
            <div className="flex items-center gap-x-1 text-base">
              <span>
                <FiFacebook />
              </span>
              <p>Facebook</p>
            </div>
            <div className="flex items-center gap-x-1 text-base">
              <span>
                <FiTwitter />
              </span>
              <p>Twitter</p>
            </div>
          </div>
        </footer>
      </div>
      <div className="border-b  w-full  my-7"></div>
      <p className="text-white pb-4 leading-7 text-center">
        Copyright 2024 Assiantment <span className="text-[#02C9C9]">.bd</span> All Rights Reserved.
      </p>

    </div>
  );
};

export default Footer;
