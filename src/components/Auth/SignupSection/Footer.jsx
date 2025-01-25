import insta from "../../../assets/instagram-logo-facebook-svgrepo-com.png";
import fb from "../../../assets/facebook-rounded-svgrepo-com.png";
import tik from "../../../assets/Tiktok.png";
import youtube from "../../../assets/youtube-rounded-svgrepo-com.png";
import LOGO from '../../../assets/LOGO';

const sections = [
  {
    title: "Overview",
    links: ["About Us", "Mission", "Global Reach"],
  },
  {
    title: "Quick Links",
    links: ["Social Features", "Roommate Matching", "Ride Sharing", "Resources"],
  },
  {
    title: "Support",
    links: ["Social Features", "Roommate Matching", "Ride Sharing", "Resources"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms of Service"],
  },
];

const socialMediaIcons = [
  { src: insta, alt: "Instagram" },
  { src: fb, alt: "Facebook" },
  { src: tik, alt: "TikTok" },
  { src: youtube, alt: "YouTube" },
];

const Footer = () => {
  return (
    <div className="px-[20px] md:py-[10px]">
      <div className="flex md:justify-between flex-wrap md:px-[5%] gap-[50px] py-[10px] mb-[10px]">
      <LOGO />
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <h2 className="font-[700] text-[15px] md:text-[22px] leading-[30px] font-nunito">
              {section.title}
            </h2>
            {section.links.map((link, idx) => (
              <span
                key={idx}
                className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]"
              >
                {link}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="flex   w-full flex-col-reverse md:flex-row flex-wrap gap-[20px] border-t border-[#E5DEDE] py-[15px] md:py-[20px] items-center md:justify-between">
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">
          Copyright © 2025 Gradz, Inc. All Rights Reserved.
        </span>
        <div className="flex  gap-[20px] items-center">
          {socialMediaIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon.src}
              alt={icon.alt}
              className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
