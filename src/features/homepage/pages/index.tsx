import { useEffect } from 'react'
import { getCurrentUser } from '@/features/auth/utils/auth'
import Navbar from '../../../shared/components/navbar/navbar'
import Header from '../components/header'
import Category from '../components/category'
import Why from '../components/why'
import Footer from '../../../shared/components/footer/footer'

const HomePage = () => {
  useEffect(() => {
    // Redirect to dashboard if already logged in
    const user = getCurrentUser();
    if (user) {
      window.location.href = '/dashboard';
    }
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <Header />
      <Category />
      <Why />
      <Footer/> 
    </div>
  )
}

export default HomePage
