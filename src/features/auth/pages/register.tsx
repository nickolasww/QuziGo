import Atas from "../../../assets/Atas.svg";
import Bawah from "../../../assets/Bawah.svg";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { useRegisterForm } from "@/features/auth/hooks/useRegisterForm";
import { SuccessModal } from "@/shared/components/ui/success-modal";

const Register = () => {
  const { formData, error, loading, showSuccessModal, successMessage, handleChange, handleSubmit, handleCloseModal } = useRegisterForm();

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
        <form 
          onSubmit={handleSubmit}
          className="border-2 border-gray-700 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto p-5 sm:p-6 md:p-8 rounded-lg text-white flex flex-col gap-5 sm:gap-6 md:gap-7 items-center bg-black/50 backdrop-blur-sm"
        >
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-6 sm:pb-8 md:pb-10 bg-linear-to-r from-[#5813C1] to-[#C45037] bg-clip-text text-transparent">
            QuziGo
          </h1>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">Create Account</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">
              Choose your account type and start your journey with us
            </p>
          </div>

          {error && (
            <div className="w-full bg-red-500/20 border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 items-start w-full'> 
            <div className='flex flex-col w-full gap-2'> 
              <Label htmlFor="fullName" className="text-sm sm:text-base">Full Name</Label>
              <Input 
                type="text" 
                id="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nickolas Quinn" 
                className="h-10 sm:h-11 text-sm sm:text-base"
                required
              />
            </div>
            <div className='flex flex-col w-full gap-2'> 
              <Label htmlFor="username" className="text-sm sm:text-base">Username</Label>
              <Input 
                type="text" 
                id="username" 
                value={formData.username}
                onChange={handleChange}
                placeholder="nickolas" 
                className="h-10 sm:h-11 text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-2 sm:gap-3">
            <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
            <Input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              className="h-10 sm:h-11 text-sm sm:text-base"
              required
            />
          </div>
          <div className="grid w-full items-center gap-2 sm:gap-3">
            <Label htmlFor="password" className="text-sm sm:text-base">Password</Label>
            <Input 
              type="password" 
              id="password" 
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password (min. 6 characters)" 
              className="h-10 sm:h-11 text-sm sm:text-base"
              required
            />
          </div>

          <Button 
            type="submit"
            variant={'outline'} 
            disabled={loading}
            className='text-black text-sm sm:text-base md:text-md w-full h-10 sm:h-11 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? "Creating Account..." : "Register"}
          </Button>

          <div className="text-center text-xs sm:text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-purple-500 hover:text-purple-400 font-semibold">
              Login
            </a>
          </div>
        </form>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        title={successMessage.title}
        message={successMessage.message}
        autoCloseDelay={2000}
      />
    </div>
  );
}

export default Register
