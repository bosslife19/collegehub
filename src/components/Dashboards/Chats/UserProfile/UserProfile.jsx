import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserProfilePage = ({ selectedChat }) => {
  const { userId } = useParams(); // Get userId from URL params
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Log to debug if selectedChat and userId are available
    console.log("selectedChat:", selectedChat); // Debugging log
    console.log("userId:", userId); // Debugging log

    if (selectedChat && userId) {
      // Directly use selectedChat as it's a single object, not an array
      if (selectedChat.id === parseInt(userId)) {
        setUserDetails(selectedChat); // If ID matches, set userDetails
      }
    }
  }, [userId, selectedChat]);

  if (!userDetails) {
    return <div>No user found. Please try again.</div>;
  }

  return (
    <div className="user-profile-page p-6">
      {/* User Image */}
      <div className="text-center mb-6">
        <img
          src={userDetails.img}
          alt={userDetails.name}
          className="w-40 h-40 object-cover rounded-full mx-auto"
        />
      </div>

      {/* User Details */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{userDetails.name}</h2>
        <p className="text-xl text-gray-600">{userDetails.lastSeen}</p>
        <p className="text-md text-gray-500 mt-2">Phone Number: {userDetails.number}</p>
        <p className="text-md text-gray-500">Last Seen: {userDetails.lastSeen}</p>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfilePage;
