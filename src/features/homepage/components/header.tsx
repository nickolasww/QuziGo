import React from "react";
import { Button } from "@/shared/components/ui/button";
import Atas from "../../../assets/Atas.svg";
import Bawah from "../../../assets/Bawah.svg";
import { BsStars } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen bg-black px-4 sm:px-8 md:px-12 lg:px-20 py-5">
      <div className="relative w-screen">
        <img src={Atas} alt="QuziGo Logo" className="absolute -bottom-19 hidden md:block" />
      </div>
      <div className="flex gap-2 items-center text-white px-3 py-1 rounded-lg bg-[#202022] mb-3 text-xs sm:text-sm">
        <BsStars className="text-purple-700 text-sm sm:text-base" />
        <h1>The ultimate quiz experience</h1>
      </div>
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-9 text-center leading-tight">
        Learn, Quiz,{" "}
        <span className="bg-linear-to-r from-[#5813C1] to-[#C45037] bg-clip-text text-transparent">
          Earn Rewards
        </span>
      </h1>
      <h2 className="text-white text-center text-sm sm:text-base md:text-lg font-normal px-4 sm:px-8 md:px-16 lg:px-32 mb-6 md:mb-9 max-w-3xl">
        Join thousands of students and teachers on the ultimate quiz platform.
        Test your knowledge, compete with peers, and win exciting rewards
      </h2>
      <div className="mb-8 md:mb-0">
        <Button
          variant={"gradient"}
          className="text-sm sm:text-base md:text-md cursor-pointer text-white"
          size={"lg"}
        >
          Get Started
        </Button>
      </div>
      <div className="relative w-screen">
        <img src={Bawah} alt="QuziGo Logo" className="absolute -top-19 hidden md:block" />
      </div>
    </div>
  );
};

export default Header;
