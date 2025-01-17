import { Slider } from 'react-infinite-slider-carousel';
// import 'react-infinite-slider-carousel/dist/index.css';
import design from '../../../assets/image 5.png';

const InfinteImage = () => {
  const images = new Array(14).fill(design);

  const sliderConfig = {
    infinite: true,
    autoPlay: true,
    autoPlayInterval: 3000, // 3 seconds
    visibleSlidesCount: 8, // Default number of images visible at once
    gapBetweenSlides: 10, // Gap between images in pixels
    animationDuration: 500, // Transition duration in milliseconds
    centerMode: true,
    scaleUpOnActive: true,
  };

  return (
    <div className="flex flex-col h-full">
      {/* Responsive Slider Container */}
      <div className="px-2 md:px-5 md:my-2">
        <Slider
          config={{
            ...sliderConfig,
            visibleSlidesCount: window.innerWidth < 640 ? 4 : window.innerWidth < 1024 ? 6 : 10, // Adjust visible slides
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center my-auto items-center object-contain w-10  h-10 md:w-16 md:h-16 lg:w-[50px] lg:h-[50px]"
            >
              <img src={src} alt={`Design ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InfinteImage;
