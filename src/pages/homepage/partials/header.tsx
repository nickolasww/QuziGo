import React from "react";
import { Button } from "@/components/ui/button";
import Orange from "../../../assets/Orange.svg";
import Atas from "../../../assets/Atas.svg";
import Bawah from "../../../assets/Bawah.svg";
import { BsStars } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center h-screen bg-black px-20 py-5">
      <div className="relative w-screen">
        <img src={Atas} alt="QuziGo Logo" className="absolute  -bottom-17" />
      </div>
      <div className=" flex gap-2 items-center text-white px-3 py-px rounded-lg bg-[#202022] mb-3">
        <BsStars className="text-purple-700" />
        <h1>The ultimate quiz experience</h1>
      </div>
      <h1 className="text-white text-7xl font-bold mb-9">
        Learn, Quiz,{" "}
        <span className="bg-linear-to-r from-[#5813C1] to-[#C45037] bg-clip-text text-transparent">
          Earn Rewards
        </span>
      </h1>
      <h2 className="text-white text-center text-lg font-normal px-132 mb-9">
        Join thousands of students and teachers on the ultimate quiz platform.
        Test your knowledge, compete with peers, and win exciting rewards
      </h2>
      <div>
        <Button
          variant={"gradient"}
          className="text-md cursor-pointer text-white"
          size={"lg"}
        >
          Get Started
        </Button>
      </div>
      <div className="relative w-screen">
        <img src={Bawah} alt="QuziGo Logo" className="absolute -top-17" />
      </div>
    </div>
  );
};

export default Header;
