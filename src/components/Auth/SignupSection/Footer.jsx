 import insta from "../../../assets/instagram-logo-facebook-svgrepo-com.png"
 import fb from "../../../assets/facebook-rounded-svgrepo-com.png"
 import tik from "../../../assets/Tiktok.png"
 import youtube from "../../../assets/youtube-rounded-svgrepo-com.png"

const Footer = () => {
  return (
   <div className="px-[20px] py-[20px]">
       <div className="flex px-[20%] gap-[50px] py-[10px]  ">
       <div className="flex flex-col gap-[10px]">
        <h2>Overview</h2>
        <span>About Us</span>
        <span>Mission</span>
        <span>Global Reach</span>
       </div>
       <div className="flex flex-col gap-[10px]">
        <h2>Quick Links</h2>
        <span>Social Features</span>
        <span>Roommate Matching</span>
        <span>Ride Sharing</span>
        <span>Resources</span>
       </div>
       <div className="flex flex-col gap-[10px]">
        <h2>Support</h2>
        <span>Social Features</span>
        <span>Roommate Matching</span>
        <span>Ride Sharing</span>
        <span>Resources</span>
       </div>
       <div className="flex flex-col gap-[10px]">
        <h2>Legal</h2>
        <span>Privacy</span>
        <span>Terms of Service</span>
         
       </div>
    </div>
   <div className="flex gap-[20px] py-[20px] items-center justify-between ">
   <span>Copyright © 2025 Gradz, Inc. All Rights Reserved.</span>
   <div className="flex gap-[20px] py-[10px] items-center">
    <img src={insta} className=" w-[40px] h-[40px]" />
    <img src={fb} className=" w-[40px] h-[40px]" />
    <img src={tik} className=" w-[40px] h-[40px]" />
    <img src={youtube} className=" w-[40px] h-[40px]" />
   </div>
   </div>
   </div>
  )
}

export default Footer
 