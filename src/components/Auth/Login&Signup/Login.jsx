import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
// import google from "../../../assets/Googlelogo.png"
 import college from "../../../assets/cool.png"
import { Link } from "react-router-dom";
import Spinner from "../../../alert/welcomLoading/ButtonLoading/ButtonLoading";


// eslint-disable-next-line react/prop-types
const Login = ({ toggleForm }) => {
    // const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
    //  const [error, setError] = useState("");
    const [buttonSpinner, setButtonSpinner] = useState(false);

    // const handlePasswordChange = (e) => {
    //     setError("");
    //     const value = e.target.value.replace(/[^0-9]/g, "");  
    //     setPassword(value);
    //   };
      const handleLogin = () =>{
        setButtonSpinner(true)
        setTimeout(() => {
            setButtonSpinner(false) 
        }, 2000);
      }

  return (
    <div className=" bg-[#fff] w-full flex-wrap  ">

      <div className="py-[20px] md:py-[50px] md:flex  flex-wrap justify-between px-[40px]  items-center">
      <div>
           <h2 className="text-[#91447B] mb-[4%] text-[20px] md:text-[32px] font-bold font-inter text-center ">Welcome back to Gradzz</h2>

        <img src={college} alt="" className=" pt-[40px] mx-auto md:pt-[0px] md:h-[458px] w-[200px] md:w-full object-cover"/>
       </div>

        <form className=" py-[20px] px-[14px] bg-[#fff]  rounded-[10px] md:w-[500px] ">
         
            <div className=" border my-[10%] relative border-[#000000]  p-[8px] md:p-[14px] rounded-[4px] flex-1">
               <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px]  bg-[#fff]">
                    Email
                </label>
                <input 
                type="email"
                className="w-full outline-none"
                />
               </div>
               <div className="flex items-center border relative border-[#000000]  p-[8px] md:p-[14px] rounded-[4px]  ">
               <label className="absolute top-[-14px] px-1 font-nunito font-[500] text-[13px] leading-[30px] md:text-[19px]  bg-[#fff]">
                    Password
                </label>
                <input
              type={showPassword ? "text" : "password"} // Switch input type based on visibility
              className="w-full outline-none  text-[12px] md:text-[16px]"
            //   value={password}
            //   onChange={handlePasswordChange}
             />
            {/* Eye icon for toggling password visibility */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="mb-[-4%]  text-[12px] md:text-[16px] right-4 gap-1 font-poppins font-[400] items-center flex transform -translate-y-[50%] cursor-pointer text-gray-600"
            >
              {showPassword ? <BiShow className="text-[12px] md:text-[16px]" /> : <BiHide className="text-[12px] md:text-[16px]" />}
              {/* {showPassword ? "Show" : "Hide"} */}
            </span>
            </div>
            <Link to="/forgotten-password" className=" pt-[10px] underline font-[600] text-[#91447B] font-inter w-full justify-end items-end flex">
            forgotten-password
            </Link>
                 
           <div className="flex flex-col gap-4 justify-center items-center my-[20px] md:my-[6%]">
           <button onClick={handleLogin} className="px-[10px] w-full md:px-[12%] rounded-[6px] md:rounded-lg inter leading-[15px] md:leading-[29.0px] text-[13px] md:text-[20px] bg-[#91447B] text-[#fff] font-[600] py-[15px] md:py-[10px] border">
           {buttonSpinner ? (
              <div className="flex text-white items-center justify-center w-full h-full">
                <Spinner />
                {/* <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12"></div> */}
              </div>
            ) : (
              "Log in"
            )}
             </button>
            <span className=" font-nunito font-[500] text-[11px] md:text-[17px] leading-[27px]">
            Don’t have an account? <Link to="/Signup" onClick={toggleForm} className="text-[#91447B] font-[600]">SignUp</Link>
            </span>
           </div>
           {/* <div className="flex justify-between items-center">
            <div className="w-full h-[1px]  bg-[#000]"/>
            <p className="px-[20px] text-[#000] inter font-[400] text-[12px] md:text-[18px] leading-[20px] md:leading-[30.26px]">OR</p>
            <div className="w-full h-[1px]  bg-[#000]"/>
           </div> */}

           {/* <div className="flex justify-center gap-5 items-center pb-[13px] ">
                <img src={google} alt="" className=" md:w-[30px] h-[30px]"/>
                <p>Sign up with Google</p>
            </div> */}
         </form>
     
      </div>
    </div>
  )
}

export default Login
