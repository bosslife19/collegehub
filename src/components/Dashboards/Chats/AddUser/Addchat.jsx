/* eslint-disable react/prop-types */
import { useState } from "react";
import Adds from "../../../../assets/adds"; // Assuming Adds is the button component

// AddUserPage component
const AddUserPage = ({ onAddUser }) => {
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility
  const [newUserName, setNewUserName] = useState(""); // State for new user name
  const [newUserNumber, setNewUserNumber] = useState(""); // State for new user number
  const [newUserHobby, setNewUserHobby] = useState(""); // State for new user hobby
  const [userImage, setUserImage] = useState(null); // State for new user image

  // Function to handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Add User
  const handleAddUser = () => {
    if (newUserName.trim() && newUserNumber.trim() && newUserHobby.trim()) {
      const newUser = {
        id: Date.now(), // Unique ID based on timestamp
        name: newUserName,
        img: userImage || "path/to/default/image.png", // Default image if none is selected
        lastSeen: new Date().toLocaleString(), // Real-time date
        number: newUserNumber,
        hobby: newUserHobby,
        hasNotification: false,
      };
      onAddUser(newUser); // Call parent function to add user
      setNewUserName(""); // Reset input field
      setNewUserNumber(""); // Reset number field
      setNewUserHobby(""); // Reset hobby field
      setUserImage(null); // Reset image field
      setIsOpen(false); // Close modal
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="relative ">
      {/* Add button that triggers the modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full"
      >
        <Adds />
      </button>

      {/* Modal for adding new user */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[2000]">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-4 sm:w-96">
            <h3 className="text-xl font-semibold mb-4 text-center">Add New User</h3>
            
            {/* Name Input */}
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="Enter user name"
              className="p-3 w-full mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Number Input */}
            <input
              type="text"
              value={newUserNumber}
              onChange={(e) => setNewUserNumber(e.target.value)}
              placeholder="Enter user number"
              className="p-3 w-full mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Hobby Input */}
            <input
              type="text"
              value={newUserHobby}
              onChange={(e) => setNewUserHobby(e.target.value)}
              placeholder="Enter user hobby"
              className="p-3 w-full mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 w-full mb-4 border border-gray-300 rounded-md"
            />
            <div className="mb-4">
              {userImage && (
                <img
                  src={userImage}
                  alt="User Preview"
                  className="w-24 h-24 object-cover rounded-full mx-auto"
                />
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="px-6 py-2 bg-primary text-[#000] rounded-md hover:bg-primary-dark"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUserPage;
