import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";

const BodySection = () => {
  // Options for each dropdown
  const ageOptions = [
    { value: "0-18", label: "0-18" },
    { value: "19-22", label: "19-35" },
    { value: "22-50", label: "36-50" },
    { value: "51+", label: "51+" },
  ]; 

  const sexOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const raceOptions = [
    { value: "asian", label: "Asian" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "hispanic", label: "Hispanic" },
  ];

  const petOptions = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "None", label: "None" },
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
      fontWeight: "500",
      fontFamily: "inter"
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
    <div className="bgbanner h-[500px] pt-[20px] md:pt-[100px] flex flex-col justify-center px-[20px] lg:px-[100px]">
      <h3 className="text-[#fff] font-[500] mb-3 md:mb-0 text-[30px] leading-[30px] md:leading-[48px] lg:text-[48px] text-center font-inter lg:px-[200px]">
        Finding your perfect roommate made Easy
      </h3>
      <div className=" space-y-3 md:space-y-0 md:grid grid-cols-2 md:gap-0 items-center justify-center  gap-[30px] md:grid-cols-5 md:p-4 md:rounded-none rounded-[50px]  ">
        {/* Age Range Dropdown */}
        <div className="bg-white p-[10px] md:p-[30px] border-r md:rounded-none rounded-[10px]   md:rounded-l-[100px]">
          <label className="block text-[#91447B] font-[600] text-[13px] md:text-[17px] font-inter md:mb-2">Age Range</label>
          <Select options={ageOptions} placeholder="age " styles={customStyles} />
        </div>

        {/* Sex Dropdown */}
        <div className="bg-white p-[5px] md:p-[30px] border-r md:rounded-none rounded-[10px]">
          <label className="block text-[#91447B] font-[600] text-[13px] md:text-[17px] font-inter md:mb-2">Sex</label>
          <Select options={sexOptions} placeholder="Select Sex" styles={customStyles} />
        </div>

        {/* Race Dropdown */}
        <div className="bg-white p-[5px] md:p-[30px] border-r md:rounded-none rounded-[10px]">
          <label className="block text-[#91447B] font-[600] text-[13px] md:text-[17px] font-inter md:mb-2">Race</label>
          <Select options={raceOptions} placeholder="Select Race" styles={customStyles} />
        </div>

        {/* Pet Dropdown */}
        <div className="bg-white p-[5px] md:p-[30px] border-r md:rounded-none rounded-[10px]">
          <label className="block text-[#91447B] font-[600] text-[13px] md:text-[17px] font-inter md:mb-2">Pet</label>
          <Select options={petOptions} placeholder="Select Pet" styles={customStyles} />
        </div>

        {/* Search Button */}
        <div className="bg-[#91447B]  md:rounded-r-[100px] rounded-r-[5px] p-[8px] md:p-[46px] flex items-center justify-center">
          <button className="text-white flex items-center gap-[10px] text-[14px] md:text-[16px] font-[500] px-6 py-2 rounded focus:outline-none">
           <IoSearchOutline/>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
