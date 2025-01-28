import { useState, useEffect } from "react";
import { Slider } from "react-infinite-slider-carousel";
// import 'react-infinite-slider-carousel/dist/index.css';
import Nyu from "../../assets/slide/Rectangle 70.png";
import Nyu2 from "../../assets/slide/Rectangle 63.png";
import Nyu3 from "../../assets/slide/Rectangle 64.png";
import Nyu4 from "../../assets/slide/Rectangle 57.png";
import Nyu5 from "../../assets/slide/Rectangle 65.png";
import Nyu6 from "../../assets/slide/Rectangle 59.png";
import Nyu7 from "../../assets/slide/Rectangle 66.png";
import Nyu8 from "../../assets/slide/Rectangle 67.png";
import Nyu9 from "../../assets/slide/Rectangle 68.png";
import Nyu10 from "../../assets/slide/Rectangle 61.png";

const InfiniteImage = () => {
  // Images Array
  const images = [
    Nyu, Nyu2, Nyu3, Nyu4, Nyu5, Nyu6, Nyu7, Nyu8, Nyu9, Nyu10,
  ];

  // State to handle responsive visible slides count
  const [visibleSlidesCount, setVisibleSlidesCount] = useState(10);

  // Update visible slides count on window resize
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) setVisibleSlidesCount(4); // Mobile
      else if (window.innerWidth < 1024) setVisibleSlidesCount(6); // Tablet
      else setVisibleSlidesCount(10); // Desktop
    };

    updateVisibleSlides(); // Set initial count
    window.addEventListener("resize", updateVisibleSlides); // Listen for resize

    return () => window.removeEventListener("resize", updateVisibleSlides); // Cleanup
  }, []);

  // Slider configuration
  const sliderConfig = {
    infinite: true,
    autoPlay: true,
    autoPlayInterval: 3000,
    visibleSlidesCount,
    gapBetweenSlides: 10,
    animationDuration: 500,
    centerMode: true,
    scaleUpOnActive: true,
  };

  return (
    <div className="flex flex-col h-full">
      {/* Responsive Slider Container */}
      <div className="px-2 md:px-5 ">
        <Slider config={sliderConfig}>
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center object-contain w-10 h-10 md:w-16 md:h-16 lg:w-[50px] lg:h-[50px]"
            >
              <img src={src} alt={`Design ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InfiniteImage;
