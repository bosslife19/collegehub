import img from "../../../assets/slide1.png";
import imgs from "../../../assets/slide2.jpg";
import Slider from "react-slick";
import ArrowRight from "../../../assets/right.png";
import ArrowLeft from "../../../assets/left.png";
import profile from "../../../assets/imgprf.png";
import { Link } from "react-router-dom";
import Loader from "../../../alert/welcomLoading/loader";
import { useState } from "react";
import RoommateModal from "./AddRoommate";

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const Roomates = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roommates, setRoommates] = useState([
    {
      name: "Jane Doe, 22",
      location: "New York University",
      paragraph:
        "Looking for a clean, responsible, and friendly roommate to share a [2-bedroom apartment] in [location].",
      image: profile,
      links: [
        { text: "Message", url: "/community-forums" },
        { text: "Cancel", url: "/events-calendar" },
      ],
    },
    {
      name: "John Smith, 25",
      location: "California University",
      paragraph:
        "Looking for a quiet and organized roommate to share a 3-bedroom house. Move-in date: July.",
      image: imgs,
      links: [],
    },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-[400px] md:top-1/2 py-[10px] px-[10px] md:py-[15px] md:px-[15px] right-0 transform -translate-y-1/2 z-10 bg-[#fff] text-black rounded-full shadow-md"
      onClick={onClick}
    >
      <img src={ArrowRight} className="w-[15px] md:w-[25px] h-[15px] md:h-[25px] object-contain" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-[400px] py-[10px] px-[10px] md:py-[15px] md:px-[15px] md:top-1/2 left-0 transform -translate-y-1/2 z-10 bg-[#fff] rounded-full text-black shadow-md"
      onClick={onClick}
    >
      <img src={ArrowLeft} className="w-[15px] md:w-[25px] h-[15px] md:h-[25px] object-contain" />
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
  };

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="anaheim-font">
          <div className="flex justify-start mt-4 mb-6">
            <button onClick={openModal} className="bg-[#91447B] text-white py-3 px-6 rounded-full border-none outline-none text-lg">
              Add New Roommate
            </button>
          </div>

          <div className="bgimgs flex flex-col justify-center items-center anaheim-font">
            <h2 className="font-[600] text-[28px] md:text-start text-center md:text-[50px] leading-[31px] md:leading-[77.34px] text-[#FFFFFF]">
              Find Your Perfect Roommate
            </h2>
            <p className="font-[500] text-[16px] md:text-[25px] md:leading-[38.67px] text-[#fff]">
              Search for members with similar interest
            </p>
          </div>

          <div className="flex flex-col h-full pt-[20px] md:pt-[50px]">
            <Slider {...settings}>
              {roommates.map((roommate, index) => (
                <div key={index} className="w-full h-full px-[25px] z-[1000px]">
                  <div className="flex flex-col md:flex-row justify-between pt-0">
                    <div className="md:w-1/2">
                      <img src={roommate.image} alt={`Slide ${index}`} className="w-full h-[222px] md:h-[422px] object-cover" />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center items-center text-center text-[#fff] bg-[#91447B] p-1 md:p-4">
                      <h2 className="text-[17px] md:text-[30px] font-alata md:leading-[45.12px] font-semibold tracking-[1px]">
                        {roommate.name}
                      </h2>
                      <h3 className="md:mb-2 text-[14px] md:text-[16px] leading-[20.63px] font-[400] tracking-[1px]">
                        {roommate.location}
                      </h3>
                      <div className="w-full h-[1.4px] bg-[#F4E2EF] mx-auto my-[15px] md:my-[20px]" />
                      <p className="text-[13px] tracking-[1px] md:text-[18px] md:leading-[23.2px] font-[400] md:px-[5px] md:mt-2">
                        {truncateText(roommate.paragraph, 31)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <RoommateModal isOpen={isModalOpen} onClose={closeModal} setRoommates={setRoommates} />
    </>
  );
};

export default Roomates;
