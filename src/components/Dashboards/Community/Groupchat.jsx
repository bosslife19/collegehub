import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import record from "../../../assets/profiles.png";
import { HiDotsVertical } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import Loader from "../../../alert/welcomLoading/loader";

const GroupChatPage = () => {
  const [groups] = useState([
    {
      id: 1,
      name: "Team Alpha",
      description: "This is Team Alpha group.",
      members: [
        { name: "John Doe", role: "Admin" },
        { name: "Jane Smith", role: "Member" },
        { name: "Mike Brown", role: "Member" },
      ],
    },
    { id: 2, name: "Project Beta", description: "Updates about Project Beta." },
    { id: 3, name: "General Chat", description: "General discussion group." },
  ]);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [messages, setMessages] = useState([
    { groupId: 1, text: "Welcome to Team Alpha!", sender: "Admin", time: "10:00 AM" },
    { groupId: 2, text: "Project Beta updates here.", sender: "Admin", time: "11:00 AM" },
    { groupId: 1, text: "Hello Team!", sender: "User1", time: "10:15 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  const [isOptionsModalVisible, setIsOptionsModalVisible] = useState(false);
  const [isGroupInfoModalVisible, setIsGroupInfoModalVisible] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [editedDescription, setEditedDescription] = useState(selectedGroup.description);
  const [isLoading, setIsLoading] = useState(true);

  const toggleEditDescription = () => {
    setIsEditingDescription(true);
  };
  
  const handleSaveDescription = () => {
    // Save the edited description
    setSelectedGroup((prevGroup) => ({
      ...prevGroup,
      description: editedDescription,
    }));
    setIsEditingDescription(false);
  };
  
  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          groupId: selectedGroup.id,
          text: newMessage,
          sender: "You",
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setNewMessage("");
    }
  };

  const toggleOptionsModal = () => {
    setIsOptionsModalVisible(!isOptionsModalVisible);
  };

  const showGroupInfo = () => {
    setIsOptionsModalVisible(false); // Close options modal
    setIsGroupInfoModalVisible(true); // Open group info modal
  };

  return (
    <>
    {isLoading ? (
       <Loader onComplete={() => setIsLoading(false)} />
     ) : (
    <div className="md:flex h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 h-[300px] lg:h-[500px] xl:h-full overflow-y-auto bg-[#91447B] text-[#fff] border-r p-4 rounded-t mb-[20px] xl:mb-[0px] md:rounded-l-[10px]">
        <h2 className="text-xl font-semibold mb-4">Groups</h2>
        <ul className="space-y-2">
          {groups.map((group) => (
            <li
              key={group.id}
              onClick={() => handleSelectGroup(group)}
              className={`cursor-pointer p-2 rounded font-[400] font-nunito ${
                selectedGroup.id === group.id
                  ? "bg-[#F4E2EF] text-[#212121]"
                  : "hover:bg-[#F4E2EF] text-[#212121]"
              }`}
            >
              {group.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-[350px] lg:h-[500px] xl:h-full">
        {/* Header */}
        <div className="bg-white border-b border-[#91447B] p-2 lg:p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">{selectedGroup.name}</h2>
          <div className="flex items-center gap-[40px]">
            <div className="relative flex items-center border rounded-l-[10px] rounded-r-[22px]">
              {/* <CiSearch className="text-[#212047] text-[24px] font-[600] cursor-pointer p-1 rounded-r" /> */}
            </div>
            <HiDotsVertical
              onClick={toggleOptionsModal}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto scroll-container w-full px-4 bg-[#F4E2EF]">
          {messages
            .filter((msg) => msg.groupId === selectedGroup.id)
            .map((msg, index) => (
              <div
                key={index}
                className={`mb-4 w-full gap-3 pt-[20px] ${
                  msg.sender === "You"
                    ? "text-right flex justify-end items-center w-full"
                    : "text-left flex justify-start items-center"
                }`}
              >
                <img
                  src={record}
                  alt="record"
                  className="w-[18px] md:w-[35px] object-contain"
                />
                <div>
                  <p className="text-sm font-medium">{msg.sender}</p>
                  <p className="inline-block bg-[#91447B] py-2 px-4 font-nunito text-[#DBDEE1] font-[400] rounded">
                    {msg.text}
                  </p>
                  <p className="text-xs text-gray-500">{msg.time}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Message Input */}
        <div className="bg-[#91447B] text-[#DBDEE1] border-t rounded-[5px] md:rounded-[20px] md:mx-[20px] md:my-[30px]">
          <form className="flex items-center p-3" onSubmit={handleSendMessage}>
            <CiCirclePlus className="text-[#fff] text-[30px]" />
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 md:border-l border-[#DBDEE1] md:ml-2 px-3 md:py-2 md:mr-2 outline-none bg-[#91447B]"
            />
            <button
              type="submit"
              className="bg-[#F4E2EF] text-[#91447B] font-[500] text-[11px] md:text-[14px] px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Options Modal */}
      {isOptionsModalVisible && (
        <div className=" absolute top-[50%] md:top-[26%] right-[2.7%] bg-white shadow-lg rounded-lg flex justify-start items-start text-left w-[250px] px-[2%] py-4">
          <ul className="space-y-2 font-[400] font-poppins text-[14px] ">
            <li className="cursor-pointer" onClick={showGroupInfo}>
              Group Info
            </li>
            <li className="cursor-pointer">Clear Chat</li>
            <li className="cursor-pointer">Exit</li>
            <li className="cursor-pointer">Clear Group</li>
          </ul>
        </div>
      )}

{isGroupInfoModalVisible && (
  <div className="top-[40%] md:top-20 flex items-center    justify-center m-auto flex-col right-0 bg-white shadow-lg rounded-lg py-4 w-[60%] md:w-[30%] h-[500px] fixed ">
    <div className="flex gap-[10px] md:gap-[30px] items-center justify-start w-full px-[10px] py-[5px]">
    <button
      
      onClick={() => setIsGroupInfoModalVisible(false)}
    >
      <IoMdClose/>
    </button>
      
      <h2 className="text-[14px] md:text-xl font-semibold">Group Information</h2>
    </div>
    <div className="overflow-y-auto w-full flex justify-center items-center   pt-[50%] flex-col">
    <img
      src={record}
      alt="record"
      className="object-cover w-[100px] md:w-[200px]"
    />
   <div className="flex  flex-row-reverse  items-center justify-between">
   <div className=" ">
     
     {isEditingDescription ? (
       <button
         onClick={handleSaveDescription}
         className="text-[20px] text-[#8696A0]  top-[30px] right-[20px] "
       >
         <IoMdCheckmark/>
       </button>
     ) : (
       <GoPencil
         onClick={toggleEditDescription}
         className="text-[20px] cursor-pointer"
       />
     )}
   </div>
   {/* <div className="w-full h-[30px] my-2 md:my-4 bg-[#F4E2EF]" /> */}

  <div className="break-words overflow-hidden">
  {isEditingDescription ? (
    <div className="break-words overflow-hidden px-[0px] h-[70px] border-b border-[#667781] overflow-y-auto scroll-container">
      <textarea
       value={editedDescription}
       onChange={(e) => setEditedDescription(e.target.value)}
       className="   bg-[#fff] h-[70px]  outline-none py-[20px] scroll-container px-[20px] md:py-[0px] md:px-5 break-words overflow-hidden  text-gray-700"
       rows={4}
     />
    </div>
   ) : (
     <p className="text-gray-600 leading-6 break-words max-w-xs">
      {selectedGroup.description}
      </p>
   )}
  </div>
   </div>

    <h3 className="text-lg font-semibold mt-6">Members</h3>
    <ul className="w-full mt-4 text-gray-700">
      {selectedGroup.members.map((member, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-2 border-b"
        >
          <span className="font-[500] font-poppins text-[12px] md:text-[14px]">{member.name}</span>
          <span className="text-[12px] md:text-sm text-[#1BA57F] bg-[#E7FCE3] md:px-[7px] w-[60px] md:w-[70px] text-center rounded-[5px] py-[5px] font-[400] font-nunito">{member.role}</span>
        </li>
      ))}
    </ul>

  
    </div>
  </div>
)}

    </div>
  )}
     </>
  );
};

export default GroupChatPage;
