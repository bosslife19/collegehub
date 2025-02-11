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
      <div className="fixed inset-0 font-poppins px-[40px] bg-black bg-opacity-60 flex items-center justify-center z-[2000]">
        <div className="bg-white p-[20px] md:p-[50px] rounded-md w-full   xl:w-1/2">
          <h2 className="text-xl mb-[20px] md:mb-[40px] text-center font-[600] md:text-[31px] font-poppins text-[#212121]  ">Add New Roommate</h2>
          <form className="space-y-[15px] md:space-y-[30px] " onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={roommate.name}
              onChange={handleChange}
              className="block w-full mb-2 p-2 md:p-4 border outline-none"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={roommate.location}
              onChange={handleChange}
              className="block w-full mb-2 p-2 md:p-4 border outline-none"
              required
            />
            <textarea
              name="paragraph"
              placeholder="Description"
              value={roommate.paragraph}
              onChange={handleChange}
              className="block w-full resize-none mb-2 p-2 md:p-4 border outline-none"
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full lg:w-[200px] xl:w-[300px] mb-2"
            />
            {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover mb-2" />}

            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="mr-2 px-4 py-2 font-bold text-[#91447B] font-nunito rounded">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-[#91447B] font-alata text-white rounded">
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
