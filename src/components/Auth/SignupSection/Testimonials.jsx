import { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    header: "Great Service!",
    subheader: "By John Doe",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada."
  },
  {
    id: 2,
    header: "Highly Recommended",
    subheader: "By Jane Smith",
    rating: 4,
    content:
      "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
  },
  {
    id: 3,
    header: "Excellent Support",
    subheader: "By Alex Johnson",
    rating: 5,
    content:
      "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut."
  },
  {
    id: 4,
    header: "Amazing Experience",
    subheader: "By Emily Davis",
    rating: 5,
    content:
      "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi."
  },
  {
    id: 5,
    header: "Top Notch Quality",
    subheader: "By Michael Brown",
    rating: 5,
    content:
      "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt."
  }
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
    <div className="py-10 bg-gray-100 h-full w-full overflow-hidden">
      <div className="flex flex-col items-center h-full">
        {/* Slider Container */}
        <div className="relative flex items-center justify-center w-full h-full max-w-5xl">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (activeIndex + 1) % testimonials.length;

            return (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ease-in-out absolute flex flex-col items-center justify-between px-6 py-8 bg-white rounded-xl shadow-lg border ${{
                  true: "opacity-100 scale-105 z-20",
                  false: "opacity-60 scale-90 z-10"
                }[isActive]} ${isPrev || isNext ? "opacity-75" : "opacity-100"}`}
                style={{
                  transform: isActive
                    ? "translateX(0%)"
                    : isPrev
                    ? "translateX(-120%)"
                    : isNext
                    ? "translateX(120%)"
                    : "translateX(-200%)"
                }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{testimonial.header}</h3>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                  ))}
                </div>
                <h4 className="text-lg font-medium text-gray-600 mb-4 text-center">{testimonial.subheader}</h4>
                <p className="text-gray-500 text-center max-w-md">{testimonial.content}</p>
              </div>
            );
          })}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center items-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center w-full max-w-5xl mt-6 px-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition-all"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
