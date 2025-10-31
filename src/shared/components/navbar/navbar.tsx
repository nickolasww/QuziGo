import { useState, useEffect, useRef } from 'react'
import { Button } from "@/shared/components/ui/button"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { FaUser, FaSignOutAlt } from "react-icons/fa"

const Navbar = () => {
  const { user, isAuthenticated, handleLogout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex w-full justify-between items-center bg-black border-b border-gray-700 px-4 sm:px-8 md:px-12 lg:px-20 py-5'>
      <a href='/' className='bg-linear-to-r from-[#5813C1] to-[#C45037] bg-clip-text text-transparent text-xl sm:text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity'>
        QuziGo
      </a>
      
      <div className='flex gap-3 sm:gap-5 items-center'> 
        {isAuthenticated ? (
          // User Menu
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                <FaUser className="text-white text-sm sm:text-base" />
              </div>
              <span className="text-white font-semibold hidden sm:block text-sm">
                {user?.username || user?.fullName?.split(' ')[0]}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in duration-200">
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-white font-semibold text-sm">{user?.fullName}</p>
                  <p className="text-gray-400 text-xs truncate">{user?.email}</p>
                </div>
                
                <div className="py-2">
                  <a
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <FaUser className="text-sm" />
                    <span className="text-sm">My Profile</span>
                  </a>
                  
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-gray-800 hover:text-red-300 transition-colors"
                  >
                    <FaSignOutAlt className="text-sm" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Login/Register Buttons
          <>
            <a href='/Login'> 
              <Button variant={'outline'} className='text-black text-xs sm:text-sm md:text-md px-3 sm:px-4 h-9 sm:h-10'>
                Sign In
              </Button>
            </a>
            <a href='/Register'>
              <Button variant={'gradient'} className='text-white text-xs sm:text-sm md:text-md px-3 sm:px-4 h-9 sm:h-10'>
                Register
              </Button>
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
