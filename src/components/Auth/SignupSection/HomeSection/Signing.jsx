 import { useState } from "react";
import google from "../../../../assets/Googlelogo.png"
 import college from "../../../../assets/cool.png"
import { Link } from "react-router-dom";


const Signing = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className=" bg-[#F4E2EF] w-full flex-wrap ">
      <div className="py-[20px] md:py-[50px] md:flex flex-wrap justify-between px-[40px]  items-center">
        <form className=" md:py-[20px] px-[14px] bg-[#fff]  rounded-[10px] md:w-[500px] ">
           
            <div className="flex justify-between  items-center pt-[40px] pb-[10%] gap-5">
             <div className=" border relative border-[#000000]  p-[8px] md:p-[14px] rounded-[4px] flex-1">
               <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px]  bg-[#fff]">
                    first name
                </label>
                <input 
                type="text"
                className="w-full outline-none"
                />
               </div>
               <div className=" border border-[#000000] relative p-[8px] md:p-[14px] rounded-[4px] flex-1">
               <label className="absolute px-1 top-[-14px] font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                    Last name
                </label>
                <input 
                type="text"
                className="w-full outline-none "
                />
               </div>
            </div>
            <div className=" border mb-[10%] relative border-[#000000]  p-[8px] md:p-[14px] rounded-[4px] flex-1">
               <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px]  bg-[#fff]">
                    Email
                </label>
                <input 
                type="email"
                className="w-full outline-none"
                />
               </div>
               <div className=" border relative border-[#000000]  p-[8px] md:p-[14px] rounded-[4px] flex-1">
               <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px]  bg-[#fff]">
                    Password
                </label>
                <input 
                type="password"
                className="w-full outline-none "
                />
               </div>
                <div className="custom-checkbox-container">
      <input
        type="checkbox"
        id="custom-checkbox"
        className="custom-checkbox-input"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="custom-checkbox" className="custom-checkbox-label"></label>
      <span className="ml-[10px] font-nunito font-[500] text-[11px] md:text-[17px] leading-[27px]">I agree to the Terms of Service and Privacy Notice</span>

            </div>
           <div className="flex flex-col gap-4 justify-center items-center my-[6%]">
           <button className="px-[10px] md:px-[12%] rounded-[6px] md:rounded-lg font-inter leading-[15px] md:leading-[29.0px] text-[13px] md:text-[20px] bg-[#91447B] text-[#fff] font-[400] py-[10px] border">Sign me Up!</button>
            <span className=" font-nunito font-[500] text-[11px] md:text-[17px] leading-[27px]">
            Already have an account? <Link to="#" className="text-[#91447B] font-[600]">Log in</Link>
            </span>
           </div>
           <div className="flex justify-between items-center">
            <div className="w-full h-[1px]  bg-[#000]"/>
            <p className="px-[20px] text-[#000] inter font-[400] text-[12px] md:text-[18px] leading-[20px] md:leading-[30.26px]">OR</p>
            <div className="w-full h-[1px]  bg-[#000]"/>
           </div>

           <div className="flex justify-center gap-5 items-center pb-[13px] ">
                <img src={google} alt="" className=" w-[30px] h-[30px]"/>
                <p>Sign up with Google</p>
            </div>
         </form>
       <div>
       <img src={college} alt="" className=" pt-[40px] mx-auto md:pt-[0px] md:h-[458px] w-[200px] md:w-full object-cover"/>
       </div>
      </div>
    </div>
  )
}

export default Signing
