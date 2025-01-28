 import Header from '../../Homescreen/Header/Header'
import ServiceBody from './ServiceBody'
import ServiceBanner from './ServiceBanner'
import InfiniteImage from '../../Homescreen/InfiniteScroll'
import TestimonialSlider from '../../Homescreen/Testimonials'
import Footer from '../../Homescreen/Footer'

const ServicePage = () => {
  return (
    <>
      <Header/>
      <ServiceBanner/>
      <ServiceBody/>
      <InfiniteImage/>
      <TestimonialSlider/>
      <Footer/>
    </>
  )
}

export default ServicePage
