import Select from "react-select";

const BodySection = () => {
      // Options for each dropdown
  const ageOptions = [
    { value: "0-18", label: "0-18" },
    { value: "19-35", label: "19-35" },
    { value: "36-50", label: "36-50" },
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
    { value: "other", label: "Other" },
  ];

  return (
    <div className='bgbanner h-[500px] pt-[100px] flex flex-col justify-center px-[100px]'>
      <h3 className="text-[#fff] font-[500] text-[48px] text-center font-inter px-[200px]">Finding your perfect roommate made Easy</h3>
      <div className="grid grid-cols-1 md:grid-cols-5  p-4 rounded-[50px] items-center">
      {/* Age Range Dropdown */}
      <div className="bg-white border-r border-gray-300 p-[30px] rounded-l-[100px]">
        <label className="block text-gray-700 mb-2">Age Range</label>
        <Select options={ageOptions} placeholder=" " />
      </div>

      {/* Sex Dropdown */}
      <div className="bg-white border-l border-gray-300 p-[30px]">
        <label className="block text-gray-700 mb-2">Sex</label>
        <Select options={sexOptions} placeholder="Select Sex" />
      </div>

      {/* Race Dropdown */}
      <div className="bg-white border-l border-gray-300 p-[30px]">
        <label className="block text-gray-700 mb-2">Race</label>
        <Select options={raceOptions} placeholder="Select Race" />
      </div>

      {/* Pet Dropdown */}
      <div className="bg-white border-l border-gray-300 p-[30px]">
        <label className="block text-gray-700 mb-2">Pet</label>
        <Select options={petOptions} placeholder="Select Pet" className=" focus:outline-none" />
      </div>

      {/* Search Button */}
      <div className="bg-[#91447B] border-l rounded-r-[100px] border-gray-300 p-[45px] flex items-center justify-center">
        <button className=" text-white px-6 py-2 rounded focus:outline-none ">
          Search
        </button>
      </div>
    </div>
    </div>
  )
}

export default BodySection
