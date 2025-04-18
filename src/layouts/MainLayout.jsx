import { Outlet } from 'react-router-dom'

import Navbar from  '../components/Navbar'
import Footer from '../components/Footer'


const MainLayout = () => {
  return (
    <div className='bg-[#151718] px-6 md:px-12 min-h-screen overflow-x-hidden'>
        <Navbar />
          <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout