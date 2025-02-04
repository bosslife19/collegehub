import { BiSolidDownArrow } from "react-icons/bi";
import web from '../../../assets/web.png';
import huginImage from '../../../assets/hugin.jpg';
import help from '../../../assets/help.png';
 import { useState } from "react";
import Loader from "../../../alert/welcomLoading/loader";

const groups = [
  {
    id: 1,
    title: "Group Title 1",
    image: huginImage,
    posts: 234,
    members: 234,
    activity: "Latest activity 2 days ago",
    buttonLabel: "Join Group",
    buttonColor: "#91447B",
  },
  {
    id: 2,
    title: "Group Title 2",
    image: huginImage,
    posts: 234,
    members: 234,
    activity: "Latest activity 2 days ago",
    buttonLabel: "Manage Group",
    buttonColor: "#212047",
  },
  {
    id: 3,
    title: "Group Title 3",
    image: huginImage,
    posts: 234,
    members: 234,
    activity: "Latest activity 2 days ago",
    buttonLabel: "Request Membership",
    buttonColor: "#7D6E79",
  },
  {
    id: 4,
    title: "Group Title 4",
    image: huginImage,
    posts: 234,
    members: 234,
    activity: "Latest activity 2 days ago",
    buttonLabel: "Join Group",
    buttonColor: "#91447B",
  },
];

const Homesection = () => {
    const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
     {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
    <div className="anaheim-font">
      <div className="bgimg flex flex-col justify-center items-center anaheim-font">
        <h2 className="font-[600] text-[30px] md:text-[60px] md:leading-[77.34px] text-[#FFFFFF]">
          Community Directory
        </h2>
        <p className="font-[500] text-[16px] md:text-[30px] md:leading-[38.67px] text-[#fff]">
          Search for members with similar interest
        </p>
      </div>

      {/* Box Category */}
      <div className="flex gap-2 items-center py-[20px]">
        <h2 className="font-[700] text-[17px] md:text-[24px] leading-[30.94px] text-[#000]">
          Groups
        </h2>
        {/* <BiSolidDownArrow className="md:text-lg" /> */}
      </div>

      {/* Group Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.id} className="flex flex-col w-full">
            <div
              className="w-full relative h-52 rounded-t-[10px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(145, 68, 123, 0.4), rgba(145, 68, 123, 0.4)), url(${group.image})`,
              }}
            >
              <div className="flex flex-col h-full">
                <h2 className="font-bold absolute bottom-7 text-[20px] px-2 leading-[22.78px] text-white">
                  {group.title}
                </h2>
                <div className="flex absolute bottom-3 items-center gap-2 px-2">
                  <img src={web} className="w-[15px] h-[15px]" alt="Web Icon" />
                  <p className="font-normal text-[12px] leading-[15.47px] text-white">
                    Public Group
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-start items-start">
              <div className="flex w-full border-b justify-between px-[10px]">
                <div className="flex flex-col px-[10px] py-[10px] mx-auto">
                  <span className="font-[600] text-[14px] leading-[41.25px] text-[#000] md:text-[32px]">
                    {group.posts}
                  </span>
                  <span className="font-[400] text-[13px] leading-[16.76px]">
                    Posts
                  </span>
                </div>
                <div className="border-r" />
                <div className="flex flex-col py-[10px] px-[10px] mx-auto">
                  <span className="font-[600] text-[14px] leading-[41.25px] text-[#000] md:text-[32px]">
                    {group.members}
                  </span>
                  <span className="font-[400] text-[13px] leading-[16.76px]">
                    Members
                  </span>
                </div>
              </div>
              <div className="flex gap-2 py-[20px] px-[10px]">
                <img src={help} alt="Help Icon" className="w-[15px] h-[15px]" />
                <span className="text-gray-400 font-normal text-[12px] leading-[15.47px]">
                  {group.activity}
                </span>
              </div>
              <div className="px-[20px] w-full">
                <button
                  className="px-[10px] rounded-[30px] text-white w-full py-[10px] my-[10px]"
                  style={{ backgroundColor: group.buttonColor }}
                >
                  {group.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
       )}
    </>
  );
};

export default Homesection;
