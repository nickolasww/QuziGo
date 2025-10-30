import React from 'react'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className='flex flex-col gap-9 w-full justify-center items-center h-screen bg-black px-20 py-5'>
      <h1 className='text-white text-7xl font-bold'> 
        Learn, Quiz, Earn Rewards
      </h1>
      <h2 className='text-white text-center text-lg font-normal px-132'> 
        Join thousands of students and teachers on the ultimate quiz platform. Test your knowledge, compete with peers, and win exciting rewards
      </h2>
      <div>
        <Button variant={'destructive'} className='text-white'>Get Started</Button>
      </div>
    </div>
  )
}

export default Header
