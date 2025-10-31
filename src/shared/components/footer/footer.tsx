import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black px-4 sm:px-8 md:px-12 lg:px-20 py-5'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-700 pt-5'>
        <h1 className='text-white text-xs sm:text-sm md:text-base text-center sm:text-left'>
          Copyright © 2025 QuziGo
        </h1>
        <h2 className='text-white text-xs sm:text-sm md:text-base text-center sm:text-right'>
          All Rights Reserved | 
          <span className='text-purple-500 hover:text-purple-400 cursor-pointer'> Terms and Conditions </span> | 
          <span className='text-purple-500 hover:text-purple-400 cursor-pointer'> Privacy Policy</span>
        </h2>
      </div>
    </div>
  )
}

export default Footer
