 import Header from './Header/Header'
 import Footer from './Footer'
// import Signing from './HomeSection/Signing'
import Sub from './HomeSection/subscription'
import TestimonialSlider from './Testimonials'
import AboutSection from './HomeSection/AboutPage'
import HomeBanner from './HomeSection/HomeBanner'

const Homepage = () => {
  return (
    <>
     <Header/>
     <HomeBanner/>
     <AboutSection/>
     {/* <Signing/> */}
     <Sub/>
     <TestimonialSlider/>
     <Footer/>
    </>
  )
}

export default Homepage
