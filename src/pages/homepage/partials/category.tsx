import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaBookOpen } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { TbMath } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { PiBiohazard } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { PiNewspaperClippingLight } from "react-icons/pi";

const Category = () => {
  return (
    <div className="  bg-[#0F0F11] w-full flex flex-col items-center gap-5 py-10">
        <div className=" flex gap-2 items-center text-white px-3 py-px rounded-lg bg-[#202022]"> 
            <FaBookOpen className="text-purple-700"/>
            <h1>Categories</h1>
        </div>
      <h2 className="text-white text-7xl font-bold text-center">
        Explore Quiz Categories
      </h2>
      <h3 className="text-gray-200 text-2xl ">
        Discover quizzes across various subjects to test and expand your
        knowledge
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-20">
        <Card className="w-[400px] bg-[#241F20] border-0 border-t-4 border-blue-700 ">
          <CardHeader className="p-5 flex">
          <div className=" bg-blue-700 p-2 rounded-full mr-2"> 
          <GiMaterialsScience className="text-white text-4xl " />
          </div> 
          <div>
            <CardTitle className="text-white text-xl font-bold">Science & Tech</CardTitle>
            <CardDescription className="text-white">
              Test your knowledge in science & tech with our challenging quizzes
            </CardDescription>  
          </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-green-700">
          <CardHeader className="p-5 flex">
            <div className="bg-green-700 p-2 rounded-full mr-2">
            <TbMath className="text-white text-4xl" />
            </div> 
            <div> 
            <CardTitle className="text-white text-xl font-bold">Mathematics</CardTitle>
            <CardDescription className="text-white">
              Test your knowledge in mathematics with our challenging quizzes
            </CardDescription>
            </div> 
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-purple-700">
          <CardHeader className="p-5 flex">
            <div className="bg-purple-700 p-2 rounded-full mr-2"> 
              <SlChemistry className="text-white text-4xl"/>
            </div>
            <div> 
            <CardTitle className="text-white text-xl font-bold">Chemistry</CardTitle>
            <CardDescription className="text-white">
              Test your knowledge in general knowledge with our challenging quizzes
            </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-red-700">
          <CardHeader className="p-5 flex">
            <div className="bg-red-700 p-2 rounded-full mr-2">
              <PiBiohazard className="text-white text-4xl" />
            </div>
            <div>
              <CardTitle className="text-white text-xl font-bold">Biology</CardTitle>
              <CardDescription className="text-white">
                Test your knowledge in history with our challenging quizzes
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-yellow-700">
          <CardHeader className="p-5 flex">
            <div className="bg-yellow-700 p-2 rounded-full mr-2">
              <CiGlobe className="text-white text-4xl" />
            </div>
            <div> 
            <CardTitle className="text-white text-xl font-bold">General Knowledge</CardTitle>
            <CardDescription className="text-white">
              Test your knowledge in general knowledge with our challenging quizzes
            </CardDescription>
            </div> 
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20] border-0 border-t-4 border-orange-700">
          <CardHeader className="p-5 flex">
            <div className="bg-orange-700 p-2 rounded-full mr-2">
              <PiNewspaperClippingLight className="text-white text-4xl" />
            </div>
            <div> 
            <CardTitle className="text-white text-xl font-bold">Current Affairs</CardTitle>
            <CardDescription className="text-white">
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
