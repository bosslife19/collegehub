 import Header from './Header/Header'
import Signup from './HomeSection/Signup'
import Footer from './Footer'
// import Signing from './HomeSection/Signing'
import Sub from './HomeSection/subscription'
import TestimonialSlider from './Testimonials'

const Homepage = () => {
  return (
    <>
     <Header/>
     <Signup/>

     {/* <Signing/> */}
     <Sub/>
     <TestimonialSlider/>
     <Footer/>
    </>
  )
}

export default Homepage
