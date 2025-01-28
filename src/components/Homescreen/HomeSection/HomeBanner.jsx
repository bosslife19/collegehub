/* eslint-disable react/prop-types */
import { BiArrowBack, BiArrowFromRight } from 'react-icons/bi';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../assets/slide1.png";
import imgs from "../../../assets/pexels-olly-3764402 1.png";
import img2 from "../../../assets/pexels-keira-burton-6146978 1.png";

 import { Link } from 'react-router-dom';
  
import InfinteImage from '../InfiniteScroll';
const HomeBanner = () => {
  const sliderData = [
    {
      header: "Welcome to College Hub!",
      semiHeader: "Your Ultimate Campus Companion!",
      paragraph:
        "Step into College Hub, where connections begin, opportunities thrive, and campus life gets easier.",
      image: imgs,
      links: [
        { text: "Get Started Now!", url: "/dashboard" },
        { text: "Event Calendar", url:""},
      ],
    },
    {
      header: "",
      semiHeader: "Finding your perfect roommate made Easy",
      paragraph:
      "Click  now to connect with compatible roommates and create your ideal living space!",
    image: img2,
      links: [
        { text: "Find your perfect roommate now!", url: "/Roommates" },
        
      ],
    },
    {
      header: " ",
      semiHeader: "Join our thriving communities today",
      paragraph:
      "Connect, share, and grow with like-minded individuals. Start your journey with us today!",
    image: img,
      links: [
        { text: "Community Forums", url: "/CommunityGroupchat" },
       
      ],
    },
  ];

  

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute hidden top-1/2 right-4 transform -translate-y-1/2 z-10 bg-transparent text-black p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <BiArrowFromRight className="text-2xl" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="hidden absolute top-[400px] md:top-1/2 left-4 transform -translate-y-1/2 z-10 bg-transparent text-black p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <BiArrowBack className="text-2xl" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
         style={{
          position: "absolute",
          bottom: "-26%",
          display: "flex",
          justifyContent: "center",
          // width: "100%",
          
          color: "#91447B",
        }}
        >
        <ul
          className="text-[#91447B]"
          style={{
            margin: "0",
            padding: "0",
            display: "flex",
            gap: "10px",
            color: "#91447B",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#91447B",
          transition: "width 0.3s ease",
        }}
      />
    ),
  };

 

  return (
   <>
    <div className="flex flex-col h-full">
  <Slider {...settings}>
    {sliderData.map((slide, index) => (
      <div key={index} className="w-full h-full">
        <div className="flex flex-col  md:flex-row justify-between pt-0">
          {/* Image Container */}
          <div className="md:w-1/2">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-[222px] md:h-[422px] object-cover"
            />
          </div>
          {/* Content Container */}
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center text-[#fff] bg-[#91447B] p-1 md:p-4">
            <h2 className="md:mb-2 text-[14px] md:text-[20px] leading-[25.78px] font-thin">
              {slide.header} 
            </h2>
            <h3 className="text-[17px] md:text-[30px] font-alata md:leading-[45.12px] font-semibold">
              {slide.semiHeader}
            </h3>
            <div className="w-[50%] h-[1px] bg-[#F4E2EF] mx-auto my-[15px] md:my-[20px]" />
            <p className="text-[13px] md:text-[22px] md:leading-[32.23px] font-nunito font-[600] md:px-[30px] md:mt-2">
              {slide.paragraph}
            </p>
            {slide.links.length > 0 && (
              <ul className="my-4 flex-wrap gap-4 flex items-center justify-center">
                {slide.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="bg-[#F4E2EF] py-[15px] flex justify-center items-center px-[20px] lg:px-[20px] font-[600] text-[10px] md:text-[18px] leading-[18px] text-[#3C3038] mx-auto rounded-[5px] "
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

     
      <InfinteImage/>
   </>
  );
};

export default HomeBanner;
