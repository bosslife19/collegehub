 import { useState } from "react"
import Camera from "../../../../assets/camera"
import Community from "../../../../assets/community"
import Cube from "../../../../assets/cube"
import profile from  "../../../../assets/Ellipse 19.png"
import Friends from "../../../../assets/friends"
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Select from "react-select";
import Flag from "react-world-flags";
import GoodGreen from "../../../../assets/goodGreen"
const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Country data with country codes and names
  const countries = [
    { code: "NG", name: "Nigeria" },
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    // Add more countries as needed
  ];

  // Format the countries for react-select
  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: (
      <div className="flex items-center outline-none border-none">
        <Flag code={country.code} className=" outline-none border-none" style={{ width: 20, height: 15, marginRight: 10, outline:"none", border:"none" }} />
        {country.name}
      </div>
    ),
    ...country,
  }));

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  const paddings =[
    {
      icon:<Cube/>,
      text:"OverView"
    },
    {
      icon:<Community/>,
      text:"communities"
    },
    {
      icon:<Friends/>,
      text:"Friends"
    },
  ]
  return (
    <div className="bg-[#fff] h-screen rounded-[25px] px-[30px] outline-none   ">
    <div className="   pb-[50px] pt-[50px]">
      <div className="flex items-center gap-[30px]">
      <div className=" relative w-[130px]">
        <img src={profile} className=" " />
       <div className=" absolute bottom-0 right-0">
       <Camera/> 
       </div>
      </div>
      <div  className="flex justify-between items-center font-inter pt-[20px] gap-[40px]">
        {paddings.map((items, index)=>(
          <div key={index}>
             <span  className="flex justify-between px-[13px] gap-2 font-semibold  rounded-[8px] text-[14px] py-[12px] items-center bg-[#EFEDED] text-[#000]">
          {items.icon}
          {items.text}
           </span>
          </div>
        ))}
      </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-2xl mx-auto">
  {/* <!-- First Name --> */}

  <div className="flex flex-col">
    <label  className="text-sm font-medium text-gray-700 mb-1">First Name</label>
    <input
      type="text"
      id="first-name"
         className="w-full outline-none h-[56px] text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
      placeholder="Enter your first name"
    />
  </div>

  {/* <!-- Last Name --> */}
  <div className="flex flex-col">
    <label  className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
    <input
      type="text"
      id="last-name"
         className="w-full outline-none h-[56px] text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
      placeholder="Enter your last name"
    />
  </div>

  {/* <!-- Email --> */}
  <div className="flex flex-col">
    <label   className="text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      type="email"
      id="email"
         className="w-full h-[56px] outline-none text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
      placeholder="Enter your email"
    />
  </div>

  {/* <!-- Mobile Number --> */}
  <div className="flex flex-col">
    <label  className="text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
    <PhoneInput
         className="w-full h-full text-[12px] outline-none  md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
              // value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="NG"
              international
               
              required
            />
  </div>

{/* <!-- Gender Dropdown --> */}
<div className="flex flex-col  ">
  <label className="text-sm font-medium text-gray-700 mb-1">Gender</label>
  <select
    id="gender"
    className="w-full text-[#959595] font-[500] inter outline-none h-[56px] text-[12px] md:text-[14px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
    defaultValue=""
  >
    <option value="" disabled className=" font-[500]">
      Select your gender
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
{/* <!-- School--> */}
<div className="flex flex-col">
    <label  className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
    <input
      type="text"
      id="School"
         className="w-full outline-none h-[56px] text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
      placeholder="Enter your last name"
    />
  </div>
  {/* <!-- Course --> */}
  <div className="flex flex-col">
    <label  className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
    <input
      type="text"
      id="Course"
         className="w-full h-[56px] outline-none text-[12px] md:text-[16px] rounded-[12px] p-2 border border[#f2f2f2] mt-2"
      placeholder="Enter your last name"
    />
  </div>
   {/* <!-- Country --> */}
   <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Country</label>
      <Select
        options={countryOptions}
        value={selectedCountry}
        onChange={handleChange}
        getOptionLabel={(e) => e.label} // Customize the option label
        className="w-full h-[56px] border-none outline-none text-[12px] md:text-[16px] rounded-[12px] p-2 border border-[#f2f2f2] mt-2"
        placeholder="Select your country"
      />
    </div>
    {/* <!-- About--> */}
<div className="flex flex-col sm:col-span-2">
    <label  className="text-sm font-medium text-gray-700 mb-1">About</label>
    <input
      type="text"
      id="About"
         className="w-full outline-none h-full text-[12px] md:text-[16px] rounded-[5px] px-[20px] pt-[10px] pb-[100px] border border[#f2f2f2] mt-2"
      placeholder="About you"
    />
  </div>

  {/* submit */}
  <div className=" flex justify-end  sm:col-span-2">
  <button className="flex items-center gap-3 py-[10px] px-[20px] bg-[#212047] text-white font-[500] font-inter rounded-[10px]">
    save
    <GoodGreen/>
   </button>
   
  </div>
   </div>
   </div>
  
    </div>
  )
}

export default Profile
