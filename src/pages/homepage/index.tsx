import React from 'react'
import Navbar from '../components/navbar/navbar'
import Header from './partials/header'
import Category from './partials/category'
import Why from './partials/why'

const HomePage = () => {
  return (
    <div className='min-h-screen  '>
      <Navbar />
      <Header />
      <Category />
      <Why />
    </div>
  )
}

export default HomePage
