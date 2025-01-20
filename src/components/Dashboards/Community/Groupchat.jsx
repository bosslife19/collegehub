import  { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const GroupChatPage = () => {
  const [groups] = useState([
    { id: 1, name: "Team Alpha" },
    { id: 2, name: "Project Beta" },
    { id: 3, name: "General Chat" },
  ]);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [messages, setMessages] = useState([
    { groupId: 1, text: "Welcome to Team Alpha!", sender: "Admin", time: "10:00 AM" },
    { groupId: 2, text: "Project Beta updates here.", sender: "Admin", time: "11:00 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

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

  return (
    <div className="flex h-screen">
      {/* Sidebar with Group List */}
      <div className="w-1/4 bg-[#91447B] text-[#fff] border-r p-4">
        <h2 className="text-xl font-semibold mb-4">Groups</h2>
        <ul className="space-y-2">
          {groups.map((group) => (
            <li
              key={group.id}
              onClick={() => handleSelectGroup(group)}
              className={`cursor-pointer p-2 rounded ${
                selectedGroup.id === group.id ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              {group.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-[#91447B] p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">{selectedGroup.name}</h2>
          <span className="text-gray-500">Group Chat</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#F4E2EF]">
          {messages
            .filter((msg) => msg.groupId === selectedGroup.id)
            .map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.sender === "You" ? "text-right" : "text-left"
                }`}
              >
                <p className="text-sm font-medium">{msg.sender}</p>
                <p className="inline-block bg-[#91447B] p-2 rounded">{msg.text}</p>
                <p className="text-xs text-gray-500">{msg.time}</p>
              </div>
            ))}
        </div>

        {/* Message Input */}
        <div className="bg-[#91447B] border-t p-4">
          <form className="flex items-center" onSubmit={handleSendMessage}>
           <CiCirclePlus className="text-[#fff] text-[30px]"/>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-[#91447B] rounded px-3 py-2 mr-2 outline-none bg-[#91447B]"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GroupChatPage;
