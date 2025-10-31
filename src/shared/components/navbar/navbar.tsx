import { Button } from "@/shared/components/ui/button"

const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center bg-black border-b border-gray-700 px-4 sm:px-8 md:px-12 lg:px-20 py-5'>
      <a href='/' className='bg-linear-to-r from-[#5813C1] to-[#C45037] bg-clip-text text-transparent text-xl sm:text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity'>
        QuziGo
      </a>
      
      <div className='flex gap-3 sm:gap-5 items-center'> 
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
      </div>
    </div>
  )
}

export default Navbar
