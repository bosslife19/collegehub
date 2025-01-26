 import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";

import imgs from "../../../assets/Rectangle 77.jpg"
const Banner = () => {
      // Options for each dropdown
  const Locations = [
    { value: "Chicago", label: "Chicago" },
    { value: "Lagos", label: "Lagos" },
    
  ];

  const PropertyType = [
    { value: "Single Room", label: "Single Room" },
    { value: "Flat", label: "Flat" },
     
  ];

  const Price = [
    { value: "$500", label: "$500" },
    { value: "$700", label: "$700" },
    
  ];

  

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
      padding: "0",
      fontSize: "14px",
      color: "#212121",
      fontWeight: "bold"
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#333",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#F0F0F0" : "white",
      color: "#333",
    }),
  };
  return (
    <div className='pt-[100px] md:flex justify-between font-alata   '>
     <div className='md:w-[60%] block bg-[#F4E2EF] pt-[30px] md:pt-[90px] px-[30px]'>
     <h3 className=' font-[600] text-[20px] md:text-[30px] mb-3'>Find the perfect living space</h3>
      <p className='font-[400] text-[12px] md:text-[14px] tracking-[1px] mb-3 md:w-[500px] '>We’ve made finding the perfect living space for yourself and roommate easier!</p>
      <div className=" grid grid-cols-2   md:grid-cols-5 gap-[20px] md:gap-0 p-6 md:p-4 rounded-[50px]  items-center">
        {/* Location Dropdown */}
        <div className="bg-white border-r p-[5px] md:p-[22px] rounded-[10px] md:rounded-l-[100px]">
          <label className="block text-[#91447B] font-[600] text-[10px] md:text-[14px] font-inter mb-2">Location</label>
          <Select options={Locations} placeholder=" location" styles={customStyles} />
        </div>

        {/* Property Dropdown */}
        <div className="bg-white border-r p-[5px] md:p-[22px] md:rounded-none rounded-[10px]">
          <label className="block text-[#91447B] font-[600] text-[10px] md:text-[14px] font-inter mb-2">Property Type</label>
          <Select options={PropertyType} placeholder=" Property" styles={customStyles} />
        </div>

        {/* Price Dropdown */}
        <div className="bg-white border-r p-[5px] md:p-[22px] md:rounded-none rounded-[10px]">
          <label className="block text-[#91447B] font-[600] text-[10px] md:text-[14px] font-inter mb-2">Price Range</label>
          <Select options={Price} placeholder=" Price" styles={customStyles} />
        </div>

        

        {/* Search Button */}
        <div className="bg-[#91447B]  md:rounded-r-[100px] rounded-r-[5px] p-[16px] md:p-[36px] flex items-center justify-center">
          <button className="text-white flex items-center gap-[10px] text-[12px] md:text-[16px] font-[500] px-6 py-2 rounded focus:outline-none">
           <IoSearchOutline/>
            Search
          </button>
        </div>
      </div>
      </div>
      <div className='md:w-[40%] hidden md:block'>
        <img src={imgs} />
      </div>
    </div>
  )
}

export default Banner
