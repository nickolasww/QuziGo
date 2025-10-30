import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuBrain } from "react-icons/lu";
import { CiGift } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { CiTrophy } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Why = () => {
  return (
    <div className="bg-black h-screen flex flex-col items-center pt-30 gap-5">
      <div className=" flex gap-2 items-center text-white px-3 py-px rounded-lg bg-[#202022]">
        <FaStar className="text-purple-700" />
        <h1>Features</h1>
      </div>
      <h1 className="text-white text-7xl font-bold">Why QuziGo</h1>
      <h2 className="text-gray-400 text-2xl">
        Discover quizzes across various subjects to test and expand your
        knowledge
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-20">
        <Card className="w-[400px] bg-[#151518] border border-gray-600">
          <CardHeader className="p-5 ">
            <div className=" bg-[#261544] p-3 rounded-full mr-auto">
              <LuBrain className="text-[#5C00FF] text-3xl " />
            </div>
            <div>
              <CardTitle className="text-white text-xl font-bold">
                Personalized Learning
              </CardTitle>
              <CardDescription className="text-white">
                Adaptive quizzes that adjust to your knowledge level and
                learning pace
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600">
          <CardHeader className="p-5 ">
            <div className="bg-[#432521] p-3 rounded-full mr-auto">
              <CiGift className="text-[#F15540] text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-xl font-bold">
                Reward System
              </CardTitle>
              <CardDescription className="text-white">
                Earn points, badges, and real rewards for your achievements
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600">
          <CardHeader className="p-5 ">
            <div className="bg-[#1D2B44] p-3 rounded-full mr-auto">
              <IoPeopleOutline className="text-[#005CFF] text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-xl font-bold">
                Teacher Dashboard
              </CardTitle>
              <CardDescription className="text-white">
                Comprehensive tools for educators to create and manage quizzes
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600">
          <CardHeader className="p-5 ">
            <div className="bg-[#00FF70] p-3 rounded-full mr-auto">
              <GiProgression className="text-[#183826] text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-xl font-bold">
                Progress Tracking
              </CardTitle>
              <CardDescription className="text-white">
                Adaptive quizzes that adjust to your knowledge level and
                learning pace
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600">
          <CardHeader className="p-5 ">
            <div className="bg-[#45321A] p-3 rounded-full mr-auto">
              <CiTrophy className="text-[#FF8E00] text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-xl font-bold">
                Competitive Leaderboards
              </CardTitle>
              <CardDescription className="text-white">
                Compete with peers and climb the ranks in various categories
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600">
          <CardHeader className="p-5 ">
            <div className="bg-[#332244]  p-3 rounded-full mr-auto">
              <CiMobile1 className="text-[#7F00FF] text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-xl font-bold">
                Mobile Friendly
              </CardTitle>
              <CardDescription className="text-white">
                Access quizzes anytime, anywhere on any device
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Why;
