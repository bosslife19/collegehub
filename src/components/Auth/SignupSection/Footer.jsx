 import insta from "../../../assets/instagram-logo-facebook-svgrepo-com.png"
 import fb from "../../../assets/facebook-rounded-svgrepo-com.png"
 import tik from "../../../assets/Tiktok.png"
 import youtube from "../../../assets/youtube-rounded-svgrepo-com.png"

const Footer = () => {
  return (
   <div className="px-[20px] py-[10px]">
       <div className="flex flex-wrap md:px-[5%] gap-[50px] py-[10px] mb-[10px] ">
       <div className="flex flex-col gap-[10px]">
        <h2 className=" font-[700] text-[15px] md:text-[22px] leading-[30px] font-nunito">Overview</h2>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">About Us</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Mission</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Global Reach</span>
       </div>
       <div className="flex flex-col gap-[10px]">
        <h2 className=" font-[700] text-[15px] md:text-[22px] leading-[30px] font-nunito">Quick Links</h2>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Social Features</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Roommate Matching</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Ride Sharing</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Resources</span>
       </div>
       <div className="flex flex-col gap-[10px]">
        <h2 className=" font-[700] text-[15px] md:text-[22px] leading-[30px] font-nunito">Support</h2>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Social Features</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Roommate Matching</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Ride Sharing</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Resources</span>
       </div>
       <div className="flex flex-col gap-[10px]">
        <h2 className=" font-[700] text-[15px] md:text-[22px] leading-[30px] font-nunito">Legal</h2>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Privacy</span>
        <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Terms of Service</span>
         
       </div>
    </div>
   <div className="flex justify-start w-full  flex-col-reverse md:flex-row flex-wrap gap-[20px] border-t border-[#E5DEDE] py-[20px] items-center md:justify-between ">
   <span className="font-[400] text-[13px] md:text-[20px] leading-[30px] font-nunito text-[#212047]">Copyright © 2025 Gradz, Inc. All Rights Reserved.</span>
   <div className="flex justify-end w-full gap-[20px]   items-center">
    <img src={insta} className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]" />
    <img src={fb} className=" w-[20px] md:w-[40px] h-[20px] md:h-[40px]" />
    <img src={tik} className=" w-[20px] md:w-[40px] h-[20px] md:h-[40px]" />
    <img src={youtube} className=" w-[20px] md:w-[40px] h-[20px] md:h-[40px]" />
   </div>
   </div>
   </div>
  )
}

export default Footer
 