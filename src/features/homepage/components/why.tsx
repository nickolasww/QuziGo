import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { LuBrain } from "react-icons/lu";
import { CiGift } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { CiTrophy } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Why = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center pt-16 sm:pt-20 md:pt-24 lg:pt-30 gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
      <div className="flex gap-2 items-center text-white px-3 py-1 rounded-lg bg-[#202022] text-xs sm:text-sm">
        <FaStar className="text-purple-700 text-sm sm:text-base" />
        <h1>Features</h1>
      </div>
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center px-2">Why QuziGo</h1>
      <h2 className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-2xl text-center px-4 sm:px-8 md:px-12 max-w-4xl">
        Discover quizzes across various subjects to test and expand your
        knowledge
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20 w-full max-w-7xl">
        <Card className="w-full bg-[#151518] border border-gray-600 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5">
            <div className="bg-[#261544] p-2.5 sm:p-3 rounded-full mr-auto mb-3 sm:mb-4">
              <LuBrain className="text-[#5C00FF] text-2xl sm:text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-lg sm:text-xl font-bold mb-2">
                Personalized Learning
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Adaptive quizzes that adjust to your knowledge level and
                learning pace
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5">
            <div className="bg-[#432521] p-2.5 sm:p-3 rounded-full mr-auto mb-3 sm:mb-4">
              <CiGift className="text-[#F15540] text-2xl sm:text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-lg sm:text-xl font-bold mb-2">
                Reward System
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Earn points, badges, and real rewards for your achievements
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5">
            <div className="bg-[#1D2B44] p-2.5 sm:p-3 rounded-full mr-auto mb-3 sm:mb-4">
              <IoPeopleOutline className="text-[#005CFF] text-2xl sm:text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-lg sm:text-xl font-bold mb-2">
                Teacher Dashboard
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Comprehensive tools for educators to create and manage quizzes
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5">
            <div className="bg-[#00FF70] p-2.5 sm:p-3 rounded-full mr-auto mb-3 sm:mb-4">
              <GiProgression className="text-[#183826] text-2xl sm:text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-lg sm:text-xl font-bold mb-2">
                Progress Tracking
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Adaptive quizzes that adjust to your knowledge level and
                learning pace
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5">
            <div className="bg-[#45321A] p-2.5 sm:p-3 rounded-full mr-auto mb-3 sm:mb-4">
              <CiTrophy className="text-[#FF8E00] text-2xl sm:text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-lg sm:text-xl font-bold mb-2">
                Competitive Leaderboards
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Compete with peers and climb the ranks in various categories
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="w-full bg-[#151518] border border-gray-600 hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-4 sm:p-5">
            <div className="bg-[#332244] p-2.5 sm:p-3 rounded-full mr-auto mb-3 sm:mb-4">
              <CiMobile1 className="text-[#7F00FF] text-2xl sm:text-3xl" />
            </div>
            <div>
              <CardTitle className="text-white text-lg sm:text-xl font-bold mb-2">
                Mobile Friendly
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
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
