import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center bg-white px-20 py-5'>
      <h1>
        QuziGo
      </h1>
      <div className='flex gap-5'> 
       <a href='/auth/signin'> 
        <Button variant={'outline'}>Sign In</Button>
        </a>
       <a href='/auth/register'>
        <Button variant={'outline'}>Register</Button>
       </a>
      </div>

    </div>
  )
}

export default Navbar
