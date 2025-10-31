import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { FaBookOpen } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { TbMath } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { PiBiohazard } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { PiNewspaperClippingLight } from "react-icons/pi";

const Category = () => {
  return (
    <div className="bg-[#0F0F11] w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-5 py-8 sm:py-10 px-4 sm:px-6 md:px-8">
        <div className="flex gap-2 items-center text-white px-3 py-1 rounded-lg bg-[#202022] text-xs sm:text-sm"> 
            <FaBookOpen className="text-purple-700 text-sm sm:text-base"/>
            <h1>Categories</h1>
        </div>
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center px-2">
        Explore Quiz Categories
      </h2>
      <h3 className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-2xl text-center px-4 sm:px-8 md:px-12 max-w-4xl">
        Discover quizzes across various subjects to test and expand your
        knowledge
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20 w-full max-w-7xl">
        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-blue-700 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5 flex flex-row items-start gap-3 sm:gap-4">
          <div className="bg-blue-700 p-2 sm:p-2.5 rounded-full shrink-0"> 
          <GiMaterialsScience className="text-white text-2xl sm:text-3xl md:text-4xl" />
          </div> 
          <div className="flex-1 min-w-0">
            <CardTitle className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Science & Tech</CardTitle>
            <CardDescription className="text-gray-400 text-xs sm:text-sm">
              Test your knowledge in science & tech with our challenging quizzes
            </CardDescription>  
          </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-green-700 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5 flex flex-row items-start gap-3 sm:gap-4">
            <div className="bg-green-700 p-2 sm:p-2.5 rounded-full shrink-0">
            <TbMath className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </div> 
            <div className="flex-1 min-w-0"> 
            <CardTitle className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Mathematics</CardTitle>
            <CardDescription className="text-gray-400 text-xs sm:text-sm">
              Test your knowledge in mathematics with our challenging quizzes
            </CardDescription>
            </div> 
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-purple-700 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5 flex flex-row items-start gap-3 sm:gap-4">
            <div className="bg-purple-700 p-2 sm:p-2.5 rounded-full shrink-0"> 
              <SlChemistry className="text-white text-2xl sm:text-3xl md:text-4xl"/>
            </div>
            <div className="flex-1 min-w-0"> 
            <CardTitle className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Chemistry</CardTitle>
            <CardDescription className="text-gray-400 text-xs sm:text-sm">
              Test your knowledge in general knowledge with our challenging quizzes
            </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-red-700 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5 flex flex-row items-start gap-3 sm:gap-4">
            <div className="bg-red-700 p-2 sm:p-2.5 rounded-full shrink-0">
              <PiBiohazard className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Biology</CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Test your knowledge in history with our challenging quizzes
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-yellow-700 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5 flex flex-row items-start gap-3 sm:gap-4">
            <div className="bg-yellow-700 p-2 sm:p-2.5 rounded-full shrink-0">
              <CiGlobe className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </div>
            <div className="flex-1 min-w-0"> 
            <CardTitle className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">General Knowledge</CardTitle>
            <CardDescription className="text-gray-400 text-xs sm:text-sm">
              Test your knowledge in general knowledge with our challenging quizzes
            </CardDescription>
            </div> 
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-orange-700 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5 flex flex-row items-start gap-3 sm:gap-4">
            <div className="bg-orange-700 p-2 sm:p-2.5 rounded-full shrink-0">
              <PiNewspaperClippingLight className="text-white text-2xl sm:text-3xl md:text-4xl" />
            </div>
            <div className="flex-1 min-w-0"> 
            <CardTitle className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Current Affairs</CardTitle>
            <CardDescription className="text-gray-400 text-xs sm:text-sm">
              Test your knowledge in current affairs with our challenging quizzes
            </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Category;
