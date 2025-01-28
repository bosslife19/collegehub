import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import imgs from "../../assets/Ellipse 5.png";
import img2 from "../../assets/Ellipse 5.png";
import img3 from "../../assets/Ellipse 5.png";

const testimonials = [
  {
    id: 1,
    img: imgs,
    header: "Seamless Ride Booking!",
    subheader: "Quick and reliable rides",
    rating: 5,
    p: "Final Year Student",
    content:
      "Gradzz made my daily commute so much easier! I found affordable and safe rides to campus with just a few clicks. Highly recommend!",
  },
  {
    id: 2,
    img: img2,
    header: "Found the Perfect Roommate!",
    subheader: "It was a smooth process",
    rating: 4,
    p: "Graduate Student",
    content:
      "Thanks to Gradzz, I found a great roommate who shares my schedule and lifestyle preferences. The experience was super smooth!",
  },
  {
    id: 3,
    img: img3,
    header: "Real-Time Chat Magic!",
    subheader: "Staying connected is effortless",
    rating: 5,
    p: "Computer Science Major",
    content:
      "The chat feature on Gradzz has been fantastic for collaborating with my classmates on projects and staying updated on events!",
  },
 
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-10 px-4 sm:px-8 md:px-5 bg-[#F4E2EF] w-full">
      <div className="flex flex-col items-center bg-[#91447B] mt-[5%] overflow-hidden rounded-[10px] h-full">
        <h2 className="pt-[50px] pb-[10%] text-[#fff] font-[600] text-center text-[20px] sm:text-[28px] md:text-[30px]">
          What Students Say About Us
        </h2>

        {/* Slider Container */}
        <div className="relative pb-[15%] pt-[25%] xl:py-[3%] font-alata flex items-center justify-center h-full w-full">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (activeIndex + 1) % testimonials.length;

            return (
              <div
                key={testimonial.id}
                className={`transition-all w-[90%] sm:w-[430px] duration-500 ease-in-out absolute flex flex-col items-center justify-between px-[10px] py-6 sm:py-8 bg-white rounded-xl shadow-lg border ${
                  isActive ? "opacity-100 scale-105 z-20" : "opacity-60 scale-90 z-10"
                } ${isPrev || isNext ? "opacity-75" : "opacity-100"}`}
                style={{
                  transform: isActive
                    ? "translateX(0%)"
                    : isPrev
                    ? "translateX(-120%)"
                    : isNext
                    ? "translateX(120%)"
                    : "translateX(-200%)",
                }}
              >
                <div className="flex w-full gap-2">
                  <img src={testimonial.img} className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" />
                  <div className="flex flex-col justify-start w-full items-start">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">
                      {testimonial.header}
                    </h3>
                    <div className="flex gap-[20px] justify-between">
                      <p className="text-sm sm:text-base">{testimonial.p}</p>
                      <div className="flex mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <FaStar key={i} className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-sm sm:text-lg font-medium w-full text-gray-600 mb-4">
                  {testimonial.subheader}
                </h4>
                <p className="text-center text-[12px] font-[400] text-[#000000] sm:text-[14px] md:text-base">
                  {testimonial.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-around pb-[40px] mt-[24%] md:mt-[10%] items-center gap-[10px] sm:gap-[0px] px-4">
          <button
            onClick={prevSlide}
            className="px-3 sm:px-4 py-1 sm:py-2 text-white rounded-md text-[16px] sm:text-[20px] font-[700] transition-all"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          {/* Slider Dots */}
          <div className="flex justify-center items-center space-x-2 sm:space-x-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "bg-[#fff]" : "bg-[#F4E2EF]"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="px-3 sm:px-4 py-1 sm:py-2 text-white rounded-md text-[16px] sm:text-[20px] font-[700] transition-all"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
