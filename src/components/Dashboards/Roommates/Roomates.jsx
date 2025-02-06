/* eslint-disable react/prop-types */
 import img from "../../../assets/slide1.png";
import imgs from "../../../assets/slide2.jpg";
import Slider from "react-slick";
import ArrowRight from "../../../assets/right.png";
import ArrowLeft from "../../../assets/left.png";
import profile from "../../../assets/imgprf.png";
import { Link } from "react-router-dom";
import Loader from "../../../alert/welcomLoading/loader";
import { useState } from "react";

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const Roomates = () => {
     const sliderData = [
        {
          name: "Jane Doe, 22",
          Location: "New York University",
          paragraph:
            "Looking for a clean, responsible, and friendly roommate to share a [2-bedroom apartment] in [location]. I value open communication, mutual respect, and a quiet environment during weekdays.Ideal move-in date: [insert date].",
          image: profile,
          links: [
            { text: "Message", url: "/community-forums" },
            { text: "Cancel", url: "/events-calendar" },
          ],
        },
        {
          name: "Jane Doe, 22",
          Location: "New York University",
          paragraph:
            "Looking for a clean, responsible, and friendly roommate to share a [2-bedroom apartment] in [location]. I value open communication, mutual respect, and a quiet environment during weekdays.Ideal move-in date: [insert date].",
        image: imgs,
          links: [
            { text: "Message", url: "/community-forums" },
            { text: "Cancel", url: "/events-calendar" },
          ],
        },
        {
          name: "Jane Doe, 22",
          Location: "New York University",
          paragraph:
            "Looking for a clean, responsible, and friendly roommate to share a [2-bedroom apartment] in [location]. I value open communication, mutual respect, and a quiet environment during weekdays.Ideal move-in date: [insert date].",
        image: img,
          links: [
            { text: "Message", url: "/community-forums" },
            { text: "Cancel", url: "/events-calendar" },
          ],
        },
      ];

      
        const NextArrow = ({ onClick }) => (
          <button
            className="absolute top-[400px] md:top-1/2 py-[10px] px-[10px] md:py-[15px] md:px-[15px] right-0 transform -translate-y-1/2 z-10 bg-[#fff] text-black  rounded-full  shadow-md"
            onClick={onClick}
          >
            <img  src={ArrowRight} className="w-[15px] md:w-[25px] h-[15px] md:h-[25px] object-contain"  />
            {/* <BiArrowToRight className="text-2xl" /> */}
          </button>
        );
      
        const PrevArrow = ({ onClick }) => (
          <button
            className=" absolute top-[400px] py-[10px] px-[10px] md:py-[15px] md:px-[15px] md:top-1/2 left-0 transform -translate-y-1/2 z-10 bg-[#fff] rounded-full  text-black  shadow-md"
            onClick={onClick} 
          >
             <img  src={ArrowLeft} className="w-[15px] md:w-[25px] h-[15px] md:h-[25px] object-contain"  />
            {/* <BiArrowFromRight className="text-2xl" /> */}
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
    
      const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
    {isLoading ? (
       <Loader onComplete={() => setIsLoading(false)} />
     ) : (
    <div className="anaheim-font">
      <div className="bgimgs flex flex-col justify-center items-center anaheim-font">
        <h2 className="font-[600] text-[28px] md:text-start text-center md:text-[50px] leading-[31px] md:leading-[77.34px] text-[#FFFFFF]">
        Find Your Perfect Roommate
        </h2>
        <p className="font-[500] text-[16px] md:text-[25px] md:leading-[38.67px] text-[#fff]">
          Search for members with similar interest
        </p>
      </div>
      
    {/* slider */}
    <div className="flex flex-col h-full pt-[20px] md:pt-[50px]  ">
     <Slider {...settings}>
    {sliderData.map((slide, index) => (
      <div key={index} className="w-full h-full px-[25px] z-[1000px]">
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
            <h2 className="text-[17px] md:text-[30px] font-alata md:leading-[45.12px] font-semibold tracking-[1px]">
              {slide.name}
            </h2>
            <h3
            className="md:mb-2 text-[14px] md:text-[16px] leading-[20.63px] font-[400] tracking-[1px]" >
              {slide.Location}
              
            </h3>
            <div className="w-full h-[1.4px] bg-[#F4E2EF] mx-auto my-[15px] md:my-[20px]" />
            <p className="text-[13px] tracking-[1px] md:text-[18px] md:leading-[23.2px] font-[400] md:px-[5px] md:mt-2">
            {truncateText(slide.paragraph, 31)}
            </p>
            {slide.links.length > 0 && (
              <ul className="my-[20px] flex-wrap gap-4 flex items-center justify-center">
                {slide.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="bg-[#F4E2EF] tracking-[1px] py-[8px] flex justify-center items-center w-full px-[14px] lg:px-[50px] font-[600] text-[11px] md:text-[18px] leading-[18px] text-[#212047] mx-auto rounded-[5px] md:w-[90px] lg:w-[50px] hover:underline"
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
    </div>
     )}
     </>
  );
};

export default Roomates;
