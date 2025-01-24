import { useState } from "react";
import Profile from "./subsections/Profile";
import Account from "./subsections/Account";
import Notification from "./subsections/Notification";
import Subscription from "./subsections/subscription";
import TermsConditions from "./subsections/TermsConditions";
import LogOut from "./subsections/LogOut";
import { FaUser } from "react-icons/fa";
 import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLogout, MdSubscriptions } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";

 
const SettingsPage= () => {
    const [activeTab, setActiveTab] = useState("Profile settings");

  return (
    <div>
       {/* Tabs Section */}
       <div className="md:flex gap-4 ">
        {/* Tab List */}
        <div className=" gap-3 justify-center md:w-[25%] h-[390px] mb-[10px] pl-[20px]   space-y-4 bg-[#fff] py-[10px] lg:py-[15px] rounded-[15px] font-sans">
        <h2 className=" font-[700] text-[28px] font-poppins">Settings</h2>
         <div className="flex flex-col  space-y-[10px]  py-[5px]">
         <button
            className={`font-[600]   flex items-center  gap-2 px-[10px] text-[15px]   py-[10px] rounded-l-[6px] leading-[20.3px] font-poppins  cursor-pointer ${
              activeTab === "Profile settings" ? "text-[##091E42]   bg-[#F4E2EF] border-r-[4px] border-[#000]" : "text-[#000]"
            }`}
            onClick={() => setActiveTab("Profile settings")}
          >
            <FaUser/>
            Profile settings
          </button>
           
          <button
            className={`font-[600]   flex items-center  gap-2 px-[10px] text-[15px]   py-[10px] rounded-l-[6px] leading-[20.3px] font-poppins  cursor-pointer ${
              activeTab === "Account settings" ?  "text-[##091E42]  bg-[#F4E2EF] border-r-[4px] border-[#000]" : "text-[#000]"
            }`}
            onClick={() => setActiveTab("Account settings")}
          >
            <IoSettingsOutline/>
           Account settings
          </button>
          <button
            className={`font-[600]   flex items-center  gap-2 px-[10px] text-[15px]   py-[10px] rounded-l-[6px] leading-[20.3px] font-poppins  cursor-pointer ${
              activeTab === "Notification" ?  "text-[##091E42]  bg-[#F4E2EF] border-r-[4px] border-[#000]" : "text-[#000]"
            }`}
            onClick={() => setActiveTab("Notification")}
          >
            <IoIosNotificationsOutline/>
           Notification
          </button>
          <button
            className={`font-[600]   flex items-center  gap-2 px-[10px] text-[15px]   py-[10px] rounded-l-[6px] leading-[20.3px] font-poppins  cursor-pointer ${
              activeTab === "Subscription" ?  "text-[##091E42]  bg-[#F4E2EF] border-r-[4px] border-[#000]" : "text-[#000]"
            }`}
            onClick={() => setActiveTab("Subscription")}
          >
            <MdSubscriptions/>
            Subscription
          </button>
          <button
            className={`font-[600]   flex items-center  gap-2 px-[10px] text-[15px]   py-[10px] rounded-l-[6px] leading-[20.3px] font-poppins  cursor-pointer ${
              activeTab === "Terms & Conditions" ?  "text-[##091E42]  bg-[#F4E2EF] border-r-[4px] border-[#000]" : "text-[#000]"
            }`}
            onClick={() => setActiveTab("Terms & Conditions")}
          >
            <LiaClipboardListSolid />
           Terms & Conditions
          </button>
          <button
            className={`font-[600]   flex items-center  gap-2 px-[10px] text-[15px]   py-[10px] rounded-l-[6px] leading-[20.3px] font-poppins  cursor-pointer ${
              activeTab === "Logout" ?  "text-[##091E42]  bg-[#F4E2EF] border-r-[4px] border-[#000]" : "text-[#000]"
            }`}
            onClick={() => setActiveTab("Logout")}
          >
            <MdLogout/>
           Logout
          </button>
         </div>
        </div>

        {/* Tab Panels */}
        <div className=" md:w-[75%]">
          {activeTab === "Profile settings" && <Profile/>}
          {activeTab === "Account settings" && <Account />}
          {activeTab === "Notification" && <Notification />}
          {activeTab === "Subscription" && <Subscription />}
          {activeTab === "Terms & Conditions" && <TermsConditions />}
          {activeTab === "Logout" && <LogOut />}
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
