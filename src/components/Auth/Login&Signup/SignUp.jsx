/* eslint-disable react/prop-types */
import { useState } from "react";
// import google from "../../../assets/Googlelogo.png"
 import college from "../../../assets/cool.png"
import { Link } from "react-router-dom";
import Spinner from "../../../alert/welcomLoading/ButtonLoading/ButtonLoading";
import { BiHide, BiShow } from "react-icons/bi";
import Select from "react-select";
import Flag from "react-world-flags";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
 
const SignUp = ({ toggleForm }) => {
  const [showPasswords, setShowPasswords] = useState(false); // Toggle password visibility

    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
     const [buttonSpinner, setButtonSpinner] = useState(false);
     const [phoneNumber, setPhoneNumber] = useState("");
     const [selectedCountry, setSelectedCountry] = useState(null);
   
     const handleSignup = () =>{
        setButtonSpinner(true)
        setTimeout(() => {
            setButtonSpinner(false) 
        }, 2000);
      }
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
      fontWeight: "500"
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#212121",
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
      color: "#212121",
    }),
  };

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

  const Degree = [
    { value: "Bsc", label: "Bsc" },
    { value: "BEng", label: "BEng" },
    { value: "PHD", label: "PHD" },
    { value: "other", label: "Other" },
  ];


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
    return (
      <div className="bg-[#fff] w-full flex-wrap">
        <div className=" flex md:flex-row flex-col-reverse flex-wrap justify-between px-[10px] md:px-[40px] ">
          <form className="md:py-[20px] px-[14px] bg-[#fff] rounded-[10px] md:w-[500px]">
            <div className="grid grid-cols-2 items-center pt-[40px] pb-[5%] gap-5">
              {/* First Name */}
              <div className="border relative border-[#000000] p-[8px] md:p-[14px] rounded-[4px] flex-1">
                <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                  First Name
                </label>
                <input type="text" className="w-full outline-none" />
              </div>
    
              {/* Last Name */}
              <div className="border relative border-[#000000] p-[8px] md:p-[14px] rounded-[4px] flex-1">
                <label className="absolute px-1 top-[-14px] font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                  Last Name
                </label>
                <input type="text" className="w-full outline-none" />
              </div>
    
              {/* Age */}
              <div className="border relative border-[#000000] p-[2px] md:p-[14px] rounded-[4px] flex-1">
                <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                  Age
                </label>
                <Select options={ageOptions} placeholder="" styles={customStyles} />
              </div>
    
              {/* Sex Dropdown */}
              <div className="border relative border-[#000000] p-[2px] md:p-[14px] rounded-[4px] flex-1">
                <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                  Sex
                </label>
                <Select options={sexOptions} placeholder=" " styles={customStyles} />
              </div>
    
              {/* School */}
              <div className="border relative border-[#000000] p-[8px] md:p-[14px] rounded-[4px] flex-1">
                <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                  School
                </label>
                <input type="text" className="w-full outline-none" />
              </div>
    
              {/* Degree Dropdown */}
              <div className="border relative border-[#000000] p-[2px] md:p-[8px] rounded-[4px] flex-1">
                <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                  Degree
                </label>
                <Select options={Degree} placeholder="" styles={customStyles} />
              </div>
    
              {/* Mobile Number */}
              <div className="border relative border-[#000000] p-[8px] md:p-[14px] rounded-[4px] flex-1">
                <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                  Mobile Number
                </label>
                <PhoneInput
                 styles={customStyles}
                 onChange={setPhoneNumber}
                  defaultCountry="NG"
                  international
                  className=" outline-none border-none"
                 />
              </div>
    
              {/* Country */}
              <div className="border relative border-[#000000] p-[3px] md:p-[8px] rounded-[4px] flex-1">
                <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                  Country
                </label>
                <Select
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={handleChange}
                  styles={customStyles}
                  getOptionLabel={(e) => e.label} // Customize the option label
                  // className="border-none outline-none text-[10px] xl:text-[16px] rounded-[4px] md:rounded-[12px]"
                  placeholder=" "
                />
              </div>
            </div>
    
            {/* Email */}
            <div className="border mb-[5%] relative border-[#000000] p-[8px] md:p-[14px] rounded-[4px] flex-1">
              <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                Email
              </label>
              <input type="email" className="w-full outline-none" />
            </div>
    
            {/* Password */}
            <div className="flex items-center border relative border-[#000000] p-[8px] md:p-[14px] rounded-[4px]">
              <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full outline-none text-[12px] md:text-[16px]"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="mb-[-4%] text-[12px] md:text-[16px] right-4 gap-1 font-poppins font-[400] items-center flex transform -translate-y-[50%] cursor-pointer text-gray-600"
              >
                {showPassword ? <BiShow className="text-[12px] md:text-[16px]" /> : <BiHide className="text-[12px] md:text-[16px]" />}
                {/* {showPassword ? "Show" : "Hide"} */}
              </span>
            </div>

             {/*confirm Password */}
             <div className="flex mt-[5%] items-center border relative border-[#000000] p-[8px] md:p-[14px] rounded-[4px]">
              <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px] bg-[#fff]">
              confirm Password
              </label>
              <input
                type={showPasswords ? "text" : "password"}
                className="w-full outline-none text-[12px] md:text-[16px]"
              />
              <span
                onClick={() => setShowPasswords(!showPasswords)}
                className="mb-[-4%] text-[12px] md:text-[16px] right-4 gap-1 font-poppins font-[400] items-center flex transform -translate-y-[50%] cursor-pointer text-gray-600"
              >
                {showPasswords ? <BiShow className="text-[12px] md:text-[16px]" /> : <BiHide className="text-[12px] md:text-[16px]" />}
                {/* {showPassword ? "Show" : "Hide"} */}
              </span>
            </div>
    
            {/* Terms and Conditions Checkbox */}
            <div className="custom-checkbox-container">
              <input
                type="checkbox"
                id="custom-checkbox"
                className="custom-checkbox-input"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="custom-checkbox" className="custom-checkbox-label"></label>
              <span className="ml-[10px] flex items-center gap-[3px] font-nunito font-[500] text-[10px] md:text-[17px] leading-[27px]">
                I agree to the
                 <Link to="#" className=" underline text-[#91447B] font-[600]">
                Terms of Service
                </Link> 
                and
                <Link to="#" className=" underline text-[#91447B] font-[600]">Privacy Notice
                </Link>
              </span>
            </div>
    
            {/* Sign Up Button */}
            <div className="flex flex-col gap-4 justify-center items-center my-[6%]">
              <button
                onClick={handleSignup}
                className="px-[10px] md:px-[12%] rounded-[6px] md:rounded-lg font-inter leading-[15px] md:leading-[29.0px] text-[13px] md:text-[20px] bg-[#91447B] text-[#fff] font-[400] py-[10px] border"
              >
                {buttonSpinner ? (
                  <div className="flex text-white items-center justify-center w-full h-full">
                    <Spinner />
                  </div>
                ) : (
                  "Sign me Up!"
                )}
              </button>
              <span className="font-nunito font-[500] text-[11px] md:text-[17px] leading-[27px]">
                Already have an account?{" "}
                <Link to="#" onClick={toggleForm} className="text-[#91447B] font-[600]">
                  Log in
                </Link>
              </span>
            </div>
    
            {/* OR Divider */}
            {/* <div className="flex justify-between items-center">
              <div className="w-full h-[1px] bg-[#000]" />
              <p className="px-[20px] text-[#000] inter font-[400] text-[12px] md:text-[18px] leading-[20px] md:leading-[30.26px]">
                OR
              </p>
              <div className="w-full h-[1px] bg-[#000]" />
            </div> */}
    
            {/* Sign Up with Google */}
            {/* <div className="flex justify-center gap-5 items-center pb-[13px]">
              <img src={google} alt="Google" className="w-[30px] h-[30px]" />
              <p>Sign up with Google</p>
            </div> */}
          </form>
          <div>
          <h2 className="text-[#91447B] my-[4%] text-[20px] md:text-[32px] font-bold font-inter text-center ">Welcome back to Gradzz</h2>

            <img src={college} alt="College" className="pt-[40px] mx-auto md:pt-[0px] md:h-[458px] w-[200px] md:w-full object-cover" />
          </div>
        </div>
      </div>
    );
    
}

export default SignUp
