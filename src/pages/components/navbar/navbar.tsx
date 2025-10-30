import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center bg-black border-b border-gray-700 px-20 py-5'>
      <h1 className='text-white text-2xl font-bold'>
        QuziGo
      </h1>
      <div className='flex gap-5'> 
       <a href='/auth/signin'> 
        <Button variant={'outline'} className='text-black text-md'>Sign In</Button>
        </a>
       <a href='/auth/register'>
        <Button variant={'gradient'} className='text-white text-md'>Register</Button>
       </a>
      </div>

    </div>
  )
}

export default Navbar
