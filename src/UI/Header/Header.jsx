/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import AvatarDropdown from "./AvatarDropdown";
import Search from "../Input/components/Search";
import { BsCamera } from "react-icons/bs";
 import { useProfileImage } from "../../context/ProfileContext";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const { profileImage, setProfileImage } = useProfileImage();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileSelection = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const dropdownOptions = [
    {
      text: "Change Profile",
      icon: BsCamera,
      color: "text-[#000]",
      handler: handleFileSelection,
    },
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

  const toggleDropdown = (dropdownType) => {
    setDropdownOpen(dropdownOpen === dropdownType ? null : dropdownType);
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
            className="block rounded-full bg-white shadow-sm"
          >
            <svg
              className="h-10 w-10 fill-current p-2 border rounded-full text-blue"
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
          />
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-5">
          <div className="border-l-2 pl-4">
            <button onClick={() => toggleDropdown("avatar")}>
              <AvatarDropdown options={dropdownOptions} profileImage={profileImage} />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
