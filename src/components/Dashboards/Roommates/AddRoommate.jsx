import React, { useState } from "react";

const RoommateModal = ({ isOpen, onClose, setRoommates }) => {
  const [roommate, setRoommate] = useState({ name: "", location: "", paragraph: "", image: "" });
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoommate((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setRoommate((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roommate.name && roommate.location && roommate.paragraph && roommate.image) {
      setRoommates((prev) => [...prev, roommate]);
      setRoommate({ name: "", location: "", paragraph: "", image: "" });
      setImagePreview("");
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 px-[40px] bg-gray-800 bg-opacity-50 flex items-center justify-center z-[2000]">
        <div className="bg-white p-6 rounded-md w-full   lg:w-1/3">
          <h2 className="text-xl mb-4">Add New Roommate</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={roommate.name}
              onChange={handleChange}
              className="block w-full mb-2 p-2 border outline-none"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={roommate.location}
              onChange={handleChange}
              className="block w-full mb-2 p-2 border outline-none"
              required
            />
            <textarea
              name="paragraph"
              placeholder="Description"
              value={roommate.paragraph}
              onChange={handleChange}
              className="block w-full mb-2 p-2 border outline-none"
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full mb-2"
            />
            {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover mb-2" />}

            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-400 text-white rounded">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-[#91447B] text-white rounded">
                Add Roommate
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default RoommateModal;
