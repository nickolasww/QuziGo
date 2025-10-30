import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaBookOpen } from "react-icons/fa";

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
        <Card className="w-[400px] bg-[#241F20] ">
          <CardHeader>
            <CardTitle className="text-white ">Card Title</CardTitle>
            <CardDescription className="text-white">
              Card Description
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20]">
          <CardHeader>
            <CardTitle className="text-white ">Card Title</CardTitle>
            <CardDescription className="text-white">
              Card Description
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20]">
          <CardHeader>
            <CardTitle className="text-white ">Card Title</CardTitle>
            <CardDescription className="text-white">
              Card Description
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20]">
          <CardHeader>
            <CardTitle className="text-white ">Card Title</CardTitle>
            <CardDescription className="text-white">
              Card Description
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20]">
          <CardHeader>
            <CardTitle className="text-white ">Card Title</CardTitle>
            <CardDescription className="text-white">
              Card Description
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#241F20]">
          <CardHeader>
            <CardTitle className="text-white ">Card Title</CardTitle>
            <CardDescription className="text-white">
              Card Description
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Category;
