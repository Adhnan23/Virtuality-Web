import Navbar from  '../components/Navbar'
import Footer from '../components/Footer'


const MainLayout = ({ children }) => {
  return (
    <div className='bg-[#151718] px-6 md:px-12 min-h-screen'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout