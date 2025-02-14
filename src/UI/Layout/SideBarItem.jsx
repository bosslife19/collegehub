/* eslint-disable react/prop-types */
import   { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
  import {  IoMdClose, IoMdSettings } from "react-icons/io";
 import { MdColorLens } from "react-icons/md";
 import { IoBedSharp } from "react-icons/io5";

// import "../../../styles/Admin/overflow_hidden.css";
 import { BiSolidCopyAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaUsersLine  } from "react-icons/fa6";
 import Logo2 from "../../assets/Logo2";
// import logo from "../../../assets/COMESOLOGO.png"
const SideBarItem = ({ sidebarOpen, setSidebarOpen }) => {
  const history = useNavigate();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [activeMainIndex, setActiveMainIndex] = useState(
    parseInt(localStorage.getItem("activeMainIndex") || "0")
  );

  const [activeSubIndex, setActiveSubIndex] = useState(
    parseInt(localStorage.getItem("activeSubIndex") || "0")
  );

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const allItems = useMemo( 
    () => [
      { text: "Dashboard", link: "/dashboard", icon: MdColorLens },
      { text: "Groups", link: "/community-group-chat", icon: FaUsersLine  },
      { text: "Roommates", link: "/Roommates", icon: IoBedSharp },
      { text: "Rides", link: "/Rides", icon: BiSolidCopyAlt },
      { text: "Messages", link: "/Messages", icon: FaUsers },
      { text: "Settings", link: "/settings", icon: IoMdSettings },
      // { text: "Logout", link: "Logout", icon: LuClock12 },
    ],
    []
  );

  const handleMainItemClick = (mainIndex) => {
    setActiveMainIndex(mainIndex);
    setActiveSubIndex(0);
    localStorage.setItem("activeMainIndex", mainIndex.toString());
    localStorage.removeItem("activeSubIndex");
  };

  const handleSubItemClick = (subIndex) => {
    setActiveSubIndex(subIndex);
    localStorage.setItem("activeSubIndex", subIndex.toString());
  };

  useEffect(() => {
    const storedMainIndex = localStorage.getItem("activeMainIndex");
    const storedSubIndex = localStorage.getItem("activeSubIndex");

    if (storedMainIndex) {
      setActiveMainIndex(parseInt(storedMainIndex));
    }

    if (storedSubIndex) {
      setActiveSubIndex(parseInt(storedSubIndex));
    }
  }, []);

  const renderSubNav = (mainIndex) => {
    if (activeMainIndex === mainIndex && allItems[mainIndex].subItems) {
      return (
        <div>
          {allItems[mainIndex].subItems?.map((subItem, subIndex) => (
            <div
              key={subIndex}
              onClick={() => {
                handleSubItemClick(subIndex);
                history(subItem.link);
                setSidebarOpen(false);
              }}
              className="py-1 scroll-container flex justify-between items-center cursor-pointer rounded-md"
            >
              <div
                className={`flex items-center justify-start gap-2 font-normal py-4 px-10 rounded-lg ${
                  activeSubIndex === subIndex
                    ? "text-blue"
                    : "text-[#6B788EDF]"
                }`}
              >
                <subItem.icon
                  color={
                    activeSubIndex === subIndex ? "#0A2EE2" : "#6B788EDF"
                  }
                />
                <h2 className="ml-2 first-step lg:inline-block truncate">
                  {subItem.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {sidebarOpen && (
        <div  className="fixed inset-0 bg-black bg-opacity-50 z-[998]">
          <div
            className="absolute inset-0 bg-gray opacity-70"
            tabIndex={0}
          ></div>
        </div>
      )}
      <aside
        ref={sidebar}
        className={`absolute left-0 top-0 flex h-screen shadow w-[250px] z-[999] border-r lg:z-0 flex-col scroll-container overflow-x-hidden overflow-y-hidden bg-[#FDFDFD] duration-300 ease-linear lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-[20px] py-[10px] lg:py-[20px]">
          <Link to="dashboard"className="flex items-center gap-2" >
          <Logo2/>
          <h3 className="mb-[-15px] md:mb-[-30px] font-[700] md:text-[20px] md:leading-[30px] font-nunito ">College Hub</h3>
            {/* <img src={logo} />  */}
          </Link>

          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden text-[25px] border p-1 rounded-full"
          >
            <IoMdClose />
          </button>
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto scroll-container duration-300 ease-linear">
          <div className="py-3">
            {allItems.map((item, mainIndex) => (
              <div
                key={mainIndex}
                
              >
                <div
                  onClick={() => {
                    handleMainItemClick(mainIndex);
                    history(item.link);
                    setSidebarOpen(false);
                  }}
                  className="py-2  flex relative cursor-pointer rounded-md"
                >
                  <div
                    className={`flex items-center justify-start w-full font-[600] leading-[19.1px] font-nunito text-[15px] gap-2 py-4 px-2 rounded-none md:rounded-lg ${
                      activeMainIndex === mainIndex
                        ? "text-[#212047] transition-all"
                        : "text-[#333333] hover:bg-gray hover:bg-opacity-10"
                    }`}
                    style={{
                      background: activeMainIndex === mainIndex 
                        ? "linear-gradient(90deg, #F3E1ED 0%, #FFFFFF 85.37%)"
                        : "transparent",
                      borderLeft: activeMainIndex === mainIndex ? "3px solid #91447B" : "none", // Adds blue border for active item
                    }}
                  >
                    <item.icon
                      color={
                        activeMainIndex === mainIndex ? "#212047" : "#333333"
                      }
                    />
                    <h2 className="ml-2 lg:inline-block first-step truncate">
                      {item.text}
                    </h2>
                  </div>
                </div>
                {renderSubNav(mainIndex)}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBarItem;
