import Header from "../Components/Header"
import Router from "../Routes/Routes"
import Footer from "../Components/Footer"
import Contact from "../Components/Contact"
const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <div className='grid grid-cols-2 bg-black mt-[10rem]'>
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default Layout
