import { useState } from "react";
import { useNavigate } from "react-router-dom";
 import { HiOutlineLogout } from "react-icons/hi";
import AvatarDropdown from "./AvatarDropdown";
 import Search from "../Input/components/Search";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State to manage search input
  const [dropdownOpen, setDropdownOpen] = useState(null); // State to track which dropdown is open
  // const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const navigate = useNavigate();

  const dropdownOptions = [
    
    {
      text: "Logout",
      icon: HiOutlineLogout,
      color: "text-red",
      handler: () => {
        localStorage.clear();
        navigate("/login");
      },
    },
  ];

  // List of available languages with flag-icon classes
  // const languages = [
  //   { code: "en-GB", name: "English (UK)", flagClass: "fi-gb" },
  //   { code: "en-US", name: "English (US)", flagClass: "fi-us" },
  // ];

  // const handleLanguageChange = (language) => {
  //   setSelectedLanguage(language);
  //   console.log(`Language changed to: ${language}`);
  //   setDropdownOpen(null); // Close both dropdowns
  // };

  const toggleDropdown = (dropdownType) => {
    if (dropdownOpen === dropdownType) {
      setDropdownOpen(null); // Close the dropdown if it is already open
    } else {
      setDropdownOpen(dropdownType); // Open the selected dropdown and close the other
    }
  };

  return (
    <header className="sticky top-0 flex flex-col z-[51] bg-[#FDFDFD] shadow">
      <div className="flex flex-grow items-center lg:justify-end justify-between py-[12px] px-4 shadow-md md:px-6 2xl:px-11">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="block rounded-full bg-white  shadow-sm"
          >
            <svg
              className="h-10 w-10 fill-current p-2 border rounded-full text-blue"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:block px-[10px]">
          <Search
            id="search"
            placeholder="Search for anything..."
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={false}
          />
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-5">
 
          {/* Avatar Dropdown */}
          <div className="border-l-2 pl-4">
            <button onClick={() => toggleDropdown("avatar")}>
              <AvatarDropdown options={dropdownOptions} />
            </button>

            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
