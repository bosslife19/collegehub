import { useState, useEffect } from "react";
import Profile from "./subsections/Profile";
import Account from "./subsections/Account";
import Notification from "./subsections/Notification";
import Subscription from "./subsections/Subscription";
import TermsConditions from "./subsections/TermsConditions";
import LogOut from "./subsections/LogOut";
import { FaUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLogout, MdSubscriptions } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import Loader from "../../../alert/welcomLoading/loader";

const SettingsPage = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState(null);

  // Set "Profile settings" as default only for desktop screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActiveTab("Profile settings");
      } else {
        setActiveTab(null);
      }
    };

    // Set on load
    handleResize();

    // Listen to window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tabs configuration
  const tabs = [
    { label: "Profile settings", icon: <FaUser />, component: <Profile setActiveTab={setActiveTab} /> },
    { label: "Account settings", icon: <IoSettingsOutline />, component: <Account /> },
    { label: "Notification", icon: <IoIosNotificationsOutline />, component: <Notification /> },
    { label: "Subscription", icon: <MdSubscriptions />, component: <Subscription /> },
    { label: "Terms & Conditions", icon: <LiaClipboardListSolid />, component: <TermsConditions /> },
    { label: "Logout", icon: <MdLogout />, component: <LogOut /> },
  ];

  const handleBack = () => {
    setActiveTab(null); // Reset active tab to null for mobile view
  };
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
    {isLoading ? (
       <Loader onComplete={() => setIsLoading(false)} />
     ) : (
    <div className="flex flex-col md:flex-row gap-4 p-4 min-h-screen">
      {/* Sidebar for Desktop View */}
      <div className="hidden md:block md:w-1/4 bg-white rounded-lg p-4  h-full xl:h-[440px]">
        <h2 className="font-bold text-2xl mb-6 font-poppins">Settings</h2>
        <div className="space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`font-semibold flex items-center gap-3   text-start text-[10px] lg:text-sm px-4 py-3 rounded-lg w-full ${
                activeTab === tab.label
                  ? "bg-purple-100 text-[#212121] border-r-4 border-[#000]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Panels for Mobile and Desktop */}
      <div className="md:w-3/4 bg-[#fff]  rounded-lg p-4  flex-1">
        {activeTab === null ? (
          // Main Settings List for Mobile
          <div className="block md:hidden ">
            <h2 className="font-bold text-2xl mb-6 font-poppins">Settings</h2>
            <div className="space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className="font-semibold flex items-center gap-3 text-sm px-4 py-3 rounded-lg w-full bg-gray-100 hover:bg-gray-200"
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Active Tab Content for Mobile and Desktop
          <div>
            {activeTab !== "Profile settings" && (
              <button
                className="md:hidden font-semibold text-sm px-4 py-2 mb-4 bg-purple-100 text-purple-800 rounded-lg"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            <div>{tabs.find((tab) => tab.label === activeTab)?.component}</div>
          </div>
        )}
      </div>
    </div>
     )}
     </>
  );
};

export default SettingsPage;
