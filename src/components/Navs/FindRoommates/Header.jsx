import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 import LOGO from '../../../assets/LOGO';
 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false); // State for sticky behavior

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleDropdown = (index) => {
  //   setActiveDropdown(activeDropdown === index ? null : index);
  // };

  const HeadNav = [
    {
      title: "About us",
      link:"/about-us"
      // links: [
      //   { title: "Social", link: "/social" },
      //   { title: "Socials", link: "/socials" },
      // ],
    },
    {
      title: "Find a Roommate",
       link:"/Find-a-Roommate"
      // links: [
      //   { title: "Roommates", link: "/roommates" },
      //   { title: "Rides", link: "/rides" },
      // ],
    },
    {
      title: "Rides",
      // links: [
      //   { title: "Resources", link: "/resources" },
      //   { title: "Guides", link: "/guides" },
      // ],
    },
    {
      title: "Services",
      // links: [
      //   { title: "Events", link: "/events" },
      //   { title: "Services", link: "/services" },
      // ],
    },
  ];

  // Detect scroll to add/remove sticky class
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // When scrolling down, make header sticky
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    <header
      className={`bg-white anaheim-font z-[1000] pb-3 pt-2 lg:pt-4 px-[15px] block md:flex-row flex-col md:flex items-center border-b border-[#EAECF0] transition-all duration-300 ${isSticky ? 'fixed top-0 w-full  ' : 'relative'}`}
    >
      <div className="">
        {/* Logo */}
         <div className=' cursor-none w-[30px] md:w-[100px]'>
         <Link to="/" >
            <LOGO />
          </Link>
         </div>
 
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden md:mt-[0px] mt-[-7%] block focus:outline-none ml-auto"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden fixed inset-0 bg-white z-20 w-1/2 transition-transform duration-300`}
      >
        <div className="text-xl   font-bold px-[20px] mt-[20px] border-b pb-[20px] border-[#EAECF0]">
          <Link to="/">
            <LOGO />
          </Link>
        </div>
        <ul className="flex flex-col items-center pt-[10px]">
          {HeadNav.map((item, index) => (
            <li key={index} className="relative group w-full">
              <Link 
              to={item.link}
                // onClick={() => toggleDropdown(index)}
                className="flex text-[14px] text-[#91447B]  font-[500] font-nunito items-center py-2 px-4 w-full text-left focus:outline-none"
              >
                {item.title}
                {/* <span className="ml-1 text-sm transition-transform duration-300">
                  {activeDropdown === index ? (
                    <LuArrowUpToLine />
                  ) : (
                    <LuArrowDownToLine />
                  )}
                </span> */}
              </Link>
              {/* Dropdown Menu */}
              {/* <ul
                className={`${
                  activeDropdown === index ? 'block' : 'hidden'
                } bg-white px-[20px] border rounded-b-[20px] border-[#EAECF0] rounded mt-2  transition-all duration-300`}
              >
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.link}
                      className="block py-3 px-4 text-[14px] font-[500] font-nunito   border-[#EAECF0] hover:bg-gray-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex w-full justify-between md:items-center px-[20px]">
        <ul className="flex space-x-4 w-full justify-center">
          {HeadNav.map((item, index) => (
            <li key={index} className="relative group text-[#91447B]">
              <Link 
              to={item.link}
                // onClick={() => toggleDropdown(index)}
                className="flex  items-center py-2 px-[10px] lg:px-4 gap-2 w-full text-left md:text-center focus:outline-none text-[15px] lg:text-[20px] leading-[30.94px]"
              >
                {item.title}
                {/* <span className="ml-1 text-[12px]">
                  {activeDropdown === index ? (
                    <BiSolidUpArrow />
                  ) : (
                    <BiSolidDownArrow />
                  )}
                </span> */}
              </Link>
              {/* Dropdown Menu */}
              {/* <ul
                className={`${
                  activeDropdown === index ? 'block' : 'hidden'
                } absolute  bg-white border  border-[#EAECF0] rounded mt-2 w-full transition-all duration-300`}
              >
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.link}
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </li>
          ))}
        </ul>
        <div className='w-[200px] flex gap-[20px] justify-end items-end'>
        <Link to="#" className=' py-[10px] font-[600] text-[#91447B]'>
          Contact Us
        </Link>
        <Link to="/login" className=' py-[10px] px-[15px] font-[600] text-[#fff] rounded-[10px] bg-[#91447B]'>
          Sign Up
        </Link>
        </div>
        {/* <img src={profile} className="w-[30px] h-[30px]" /> */}
      </nav>
    </header>
  );
};

export default Header;
