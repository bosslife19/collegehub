/* eslint-disable react/prop-types */
const Adds = ({  fillColor = "#91447B" }) => {
    return (
      <svg
        
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" cursor-pointer  w-[20px] md:w-[40px]"
      >
        <g clipPath="url(#clip0_82_710)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40 20.448C40 31.4937 31.0457 40.448 20 40.448C8.9543 40.448 0 31.4937 0 20.448C0 9.4023 8.9543 0.447998 20 0.447998C31.0457 0.447998 40 9.4023 40 20.448ZM20 10.6147C20.8284 10.6147 21.5 11.2862 21.5 12.1147V18.948H28.3333C29.1618 18.948 29.8333 19.6196 29.8333 20.448C29.8333 21.2764 29.1618 21.948 28.3333 21.948H21.5V28.7813C21.5 29.6098 20.8284 30.2813 20 30.2813C19.1716 30.2813 18.5 29.6098 18.5 28.7813V21.948H11.6667C10.8382 21.948 10.1667 21.2764 10.1667 20.448C10.1667 19.6196 10.8382 18.948 11.6667 18.948H18.5V12.1147C18.5 11.2862 19.1716 10.6147 20 10.6147Z"
            fill={fillColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_82_710">
            <rect y="0.447998" width="40" height="40" rx="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };
  
  export default Adds;
  