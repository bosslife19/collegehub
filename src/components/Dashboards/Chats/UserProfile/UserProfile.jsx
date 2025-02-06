import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import record from "../../../../assets/profiles.png";
import imgss from "../../../../assets/imgprf.png";
import { BiArrowBack } from "react-icons/bi";

const UserProfilePage = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const chats = [
    {
      id: 1,
      name: "John Doe",
      type: "chat",
      lastSeen: "10 minutes ago",
      img: record,
      hasNotification: true,
      number: "09022393833",
    },
    {
      id: 2,
      name: "Jane Smith",
      type: "chat",
      lastSeen: "20 minutes ago",
      img: imgss,
      hasNotification: true,
      number: "09022393833",
    },
  ];

  useEffect(() => {
    const foundUser = chats.find((chat) => chat.id === parseInt(userId));
    if (foundUser) {
      setUserDetails(foundUser);
    }
  }, [userId]);

  if (!userDetails) {
    return <div>No user found. Please try again.</div>;
  }

  return (
    <div className="user-profile-page relative space-y-[20px] p-6 h-screen w-[100%] md:w-[500px] bg-gradient-to-r from-[#ffffff] to-[#a06497] mx-auto rounded-xl shadow-lg flex flex-col items-center">
      {/* Go Back Button */}
      <div className="absolute top-6 left-2">
        <button
          onClick={() => navigate(-1)} // Navigate back when clicked
          className="px-4 py-2 bg-[#693db04d] text-[#000] rounded-lg shadow-md hover:bg-[#4B5563] transition duration-300"
        >
        <BiArrowBack/>
        </button>
      </div>

      {/* User Image */}
      <div className="text-center mb-6">
        <img
          src={userDetails.img}
          alt={userDetails.name}
          className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white shadow-lg"
        />
      </div>

      {/* User Details */}
      <div className="text-center text-[#212121] font-inter">
        <h2 className="text-3xl font-semibold mb-2">{userDetails.name}</h2>
        <p className="text-lg opacity-80 mb-2">{userDetails.lastSeen}</p>
        <p className="text-md opacity-70">Phone Number: {userDetails.number}</p>
        <p className="text-md opacity-70">Last Seen: {userDetails.lastSeen}</p>
      </div>

      {/* Edit Profile Button */}
      {/* <div className="mt-6 w-full text-center">
        <button className="px-8 py-3 bg-[#4B79A1] text-white text-lg rounded-md shadow-md hover:bg-[#2c5364] transition duration-300">
          Edit Profile
        </button>
      </div> */}
    </div>
  );
};

export default UserProfilePage;
