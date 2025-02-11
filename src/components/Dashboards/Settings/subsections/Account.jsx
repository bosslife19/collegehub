import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoMdClose } from "react-icons/io";

const Account = () => {
  // const [email, setEmail] = useState("");
   const [allowFriends, setAllowFriends] = useState(true);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [loadi, setLoadi] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // const handleEmailChange = (e) => setEmail(e.target.value);
   const handleToggleFriends = () => setAllowFriends((prev) => !prev);

  const handleDisableAccount = () => {
    setLoadings(true);
    setTimeout(() => {
      setModalMessage("Your account has been disabled successfully.");
      setShowModal(true);
      setLoadings(false);
    }, 2000);
  };

  const handleDeleteAccount = () => {
    setLoadi(true);
    setTimeout(() => {
      setModalMessage("Your account has been permanently deleted.");
      setShowModal(true);
      setLoadi(false);
    }, 2000);
  };

  const togglePasswordFields = () => setShowPasswordFields(!showPasswordFields);

  const handlePasswordChange = () => {
    setLoading(true);
    setTimeout(() => {
      setModalMessage("Password successfully changed.");
      setShowModal(true);
      setLoading(false);
      setShowPasswordFields(false); // Reset to show only the main button
    }, 2000);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  
  return (
    <div className=" font-inter space-y-[30px] bg-[#fff] flex flex-col px-[10px] py-[20px]">
      {/* Modal */}
      {showModal && (
        <div className="fixed px-[40px] inset-0 z-[3000] bg-[#000] bg-opacity-70 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="w-full flex justify-end items-end">
              <button onClick={closeModal} className="text-[20px]">
                <IoMdClose />
              </button>
            </div>
            <DotLottieReact
              src="https://lottie.host/d58536b6-9374-4210-87da-df9c22a73709/s6IGeXHKhO.lottie"
              loop
              autoplay
            />
            <p className="font-inter px-[10px] md:px-[40px] text-center font-bold text-gray-800">
              {modalMessage}
            </p>
          </div>
        </div>
      )}

      {/* Email Input */}
      {/* <div className="mb-4 gap-[20px] flex flex-col">
        <label className="block text-gray-600 font-medium " htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full outline-none h-[40px] md:h-[56px] text-[12px] xl:text-[16px] rounded-[4px] md:rounded-[12px] p-2 border border-[#f2f2f2] "
          placeholder="Enter your email"
        />
         <button
             
            className="w-full md:w-[200px] text-[12px] md:text-[14px] bg-[#91447B] text-white font-medium py-[8px] md:py-[10px] px-4 rounded-lg transition"
          >
            Change Email
          </button>
      </div> */}

      {/* Change Password */}
      <div className="my-4">
      <label className="block text-gray-600 font-medium mb-2">
         Password
         </label>
        {showPasswordFields ? (
          <div className=" transition">
            <input
              type="password"
              className="w-full outline-none h-[40px] md:h-[56px] text-[12px] xl:text-[16px] rounded-[4px] md:rounded-[12px] p-2 border border-[#f2f2f2] mb-2"
              placeholder="Enter old password"
            />
            <input
              type="password"
              className="w-full outline-none h-[40px] md:h-[56px] text-[12px] xl:text-[16px] rounded-[4px] md:rounded-[12px] p-2 border border-[#f2f2f2] mb-4"
              placeholder="Confirm new password"
            />
            <button
              onClick={handlePasswordChange}
              disabled={loading}
              className={`w-full flex justify-center ${
                loading ? "bg-[#91447B]" : "bg-[#91447B]"
              } text-white text-[12px] md:text-[14px] font-medium py-[8px] md:py-[12px] px-4  rounded-lg transition`}
            >
              {loading ?  <DotLottieReact
              src="https://lottie.host/ff8827ba-511d-47f5-b849-55123708214e/PSydUCk4Ig.lottie"
               loop
              autoplay
              className="w-[30px] md:w-[60px] h-[30px]"
                /> : "Submit"}
            </button>
          </div>
        ) : (
          <button
            onClick={togglePasswordFields}
            className="w-full md:w-[200px] bg-[#91447B] text-white text-[12px] md:text-[14px] font-medium py-[8px] md:py-[10px] px-4 rounded-lg transition"
          >
            Change Password
          </button>
        )}
      </div>
 
      {/* Toggle: Let your friends find you */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-gray-600 font-medium text-[12px] md:text-[14px]">
          Let your friends find you
        </span>
        <label className="relative inline-flex items-center cursor-pointer ">
          <input
            type="checkbox"
            checked={allowFriends}
            onChange={handleToggleFriends}
            className="sr-only peer"
          />
          <div className="w-[30px] md:w-11 h-[17px]  md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-500 transition"></div>
          <span className="absolute md:left-1 top-1 w-[10px] md:w-4 h-[10px] md:h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></span>
        </label>
      </div>

      {/* Remove Account Section */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Remove Account</h2>
        <div className="flex w-full gap-3 justify-start">
          <button
            onClick={handleDisableAccount}
            disabled={loadings}
            className={`md:w-[200px] w-full py-[10px] md:py-[14px] ${
              loadings ? "bg-[#AF0201]" : "bg-[#AF0201]"
            } text-white font-medium text-[11px] md:text-[14px] px-[5px] md:px-4 rounded-sm md:rounded-lg transition`}
          >
            {loadings ? <DotLottieReact
              src="https://lottie.host/ff8827ba-511d-47f5-b849-55123708214e/PSydUCk4Ig.lottie"
               loop
              autoplay
              className="w-[30px] md:w-[60px] h-[20px] m-auto md:m-[1px]"
                /> : "Disable Account"}
          </button>
          <button
            onClick={handleDeleteAccount}
            disabled={loadi}
            className={`md:w-[200px] w-full py-[5px] md:py-[14px] flex justify-center items-center ${
              loadi ? "text-[#AF0201] border-[#AF0201] border" : "text-[#AF0201] border-[#AF0201] border"
            } font-medium text-[11px] md:text-[14px] px-[5px] md:px-4 rounded-sm md:rounded-lg  transition`}
          >
            {loadi ? <DotLottieReact
                src="https://lottie.host/4c9b61cf-7545-4e5e-8675-312b7a762ec0/t1JJWEeMlz.lottie"
               loop
              autoplay
              className="w-[30px] text-[#AF0201] md:w-[60px] h-[20px] m-auto"
                />  : "Delete Account"}
          </button>
        </div>  
      </div>
    </div>
  );
};

export default Account;
