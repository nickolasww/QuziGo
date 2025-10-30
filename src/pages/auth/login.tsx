import React from "react";
import Atas from "../../assets/Atas.svg";
import Bawah from "../../assets/Bawah.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"

const Login = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-0">
        <img
          src={Atas}
          alt="QuziGo Logo"
          className="hidden md:block w-full"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src={Bawah}
          alt="QuziGo Logo"
          className="hidden md:block w-full"
        />
      </div>

      <div className="relative z-10 min-h-screen flex justify-center items-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="border-2 border-gray-700 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto p-5 sm:p-6 md:p-8 rounded-lg text-white flex flex-col gap-5 sm:gap-6 md:gap-7 items-center bg-black/50 backdrop-blur-sm">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-6 sm:pb-8 md:pb-10 bg-linear-to-r from-[#5813C1] to-[#C45037] bg-clip-text text-transparent">
            QuziGo
          </h1>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">Welcome Back</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">
              Enter your credentials to access your account
            </p>
          </div>

          <div className="grid w-full items-center gap-2 sm:gap-3">
            <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="h-10 sm:h-11 text-sm sm:text-base"
            />
          </div>
          <div className="grid w-full items-center gap-2 sm:gap-3">
            <Label htmlFor="password" className="text-sm sm:text-base">Password</Label>
            <Input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="h-10 sm:h-11 text-sm sm:text-base"
            />
          </div>

          <Button 
            variant={'outline'} 
            className='text-black text-sm sm:text-base md:text-md w-full h-10 sm:h-11 font-semibold'
          >
            Sign In
          </Button>

          <div className="text-center text-xs sm:text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="/register" className="text-purple-500 hover:text-purple-400 font-semibold">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
