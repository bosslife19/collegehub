import { useState, useEffect, useMemo } from "react";
// import EmojiPicker from "./Emoji/EmojiPicker";
 import send  from "../../../assets/send.png"
 import mic  from "../../../assets/mic.png"
 import clip  from "../../../assets/paper-clip.png"
 import record  from "../../../assets/profiles.png"
 import imgss  from "../../../assets/imgprf.png"

 import { PiCheckThin } from "react-icons/pi";
 import { HiOutlineDotsVertical } from "react-icons/hi";
 import { FaPause,   FaPhoneAlt, FaPlay, FaVideo } from "react-icons/fa";
import Ausdio from "../../../assets/audio";
// import Adds from "../../../assets/adds";
import { CiSearch } from "react-icons/ci";
import AddUserPage from "./AddUser/Addchat";
import { Link } from "react-router-dom";
 
 const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [audioBlob, setAudioBlob] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State for controlling emoji picker visibility
const [audioState, setAudioState] = useState({ playing: null, audio: null });
const [filterText, setFilterText] = useState("");
 const [chats, setChats] = useState([
      { id: 1, name: "John Doe", type: "chat", lastSeen: "10 minutes ago" ,img:record,  hasNotification: true,number:1},
      { id: 2, name: "Jane Smith", type: "chat", lastSeen: "20 minutes ago", img:imgss ,  hasNotification: true,number:3 },
   
    ]);

  const filteredChats = useMemo(() => {
    return chats.filter((chat) => {
       const matchesSearch = chat.name.toLowerCase().includes(filterText.toLowerCase());
      return  matchesSearch;
    });
  }, [chats,filterText]);

  useEffect(() => {
    if (chats.length > 0) {
      setSelectedChat(chats[0]);
      setMessages((prev) => ({
        ...prev,
        [chats[0].id]: prev[chats[0].id] || [],
      }));
    }
  }, [chats]);
  useEffect(() => {
    if (chats.length > 0) {
      setSelectedChat(chats[0]);
      setMessages((prev) => ({
        ...prev,
        [chats[0].id]: prev[chats[0].id] || [],
      }));
    }
  }, [chats]);

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => setRecordingTime((prev) => prev + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    if (!messages[chat.id]) {
      setMessages((prev) => ({ ...prev, [chat.id]: [] })); 
    }
  };
  const handleAddUser = (newUser) => {
    setChats([...chats, newUser]); // Add new user to chat list
  };


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages((prev) => ({
      ...prev,
      [selectedChat.id]: [...(prev[selectedChat.id] || []), newMessage],
    }));
    setNewMessage("");
  };

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        setAudioBlob(blob);
        setMessages((prev) => ({
          ...prev,
          [selectedChat.id]: [
            ...(prev[selectedChat.id] || []),
            { type: "audio", data: blob },
          ],
        }));
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      setRecordingTime(0);
    } else {
      alert("Audio recording is not supported on this browser.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const toggleAudioPlay = (audioBlob, index) => {
    if (audioState.playing === index) {
      // Pause logic
      audioState.audio.pause();
      setAudioState({ playing: null, audio: null });
    } else {
      // Play logic
      const audio = new Audio(URL.createObjectURL(audioBlob));
      audio.play();
  
      setAudioState({ playing: index, audio });
  
      // Reset when the audio ends
      audio.onended = () => setAudioState({ playing: null, audio: null });
    }
  };
  

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

//   const handleEmojiClick = (emoji) => {
//     setNewMessage((prevMessage) => prevMessage + emoji);
//     setShowEmojiPicker(false); // Close the emoji picker after selection
//   };

  return (
<div className="md:flex justify-between items-center  w-full xl:w-full  scroll-container  h-full md:h-screen font-inter gap-[30px] ">
<div className=" px-4 rounded-[20px]    scroll-container overflow-y-auto h-[300px] md:h-[559px] w-full md:w-[400px] bg-gray-100 border-r border-gray-300">
     <div className="flex justify-between items-center  py-[20px]">
     <h2 className="text-[27px] font-semibold text-gray-800  ">
          Chats
        </h2>
        <AddUserPage onAddUser={handleAddUser}  />
     </div>
     

      {/* Search Bar */}
      <div className="px-[5px] bg-[#fff] flex items-center border border-[#D4D4DD]  my-[5px] rounded-[10px]">
        <CiSearch className=" text-[#7C8092]"/>
        <input
          type="text"
          placeholder="Search chats..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full p-2 outline-none  rounded-md text-[15px]"
        />
      </div>

      {/* Chat List */}
      <ul className="flex flex-col   overflow-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => handleSelectChat(chat)}
              className={`cursor-pointer gap-3 px-3 items-center justify-between flex py-[8px] md:py-[22px] my-2 border rounded-[5px] md:rounded-[10px] ${
                selectedChat?.id === chat.id ? "bg-[#212047] text-[#fff]" : "hover:bg-gray-200"
              } text-[13px] `}
            >
            <div className="flex gap-3">
            <img src={chat.img} alt="record" className="w-[18px] md:w-[35px] object-contain" />
            <div className="flex flex-col">
              <span className="font-medium text-[15px]">{chat.name}</span>
           <span className="font-medium texx-[13px]">{chat.name}</span>
            </div>
            </div>
              <div className="   top-1/2 transform  flex items-end py-1 px-2 text-center ">
          {chat.hasNotification && (
            <span className="  text-[5px] md:text-[7px] text-[#fff] font-[400]  text-center flex items-end mx-auto  bg-red-500 rounded-full  top-1/2 transform    py-1 px-2 ">
              {chat.number}
            </span>
          )}
          </div>
            </li>
          ))
        ) : (
          <li className="p-3 text-gray-500 text-center">No chats found</li>
        )}
      </ul>
    </div>
 
    {/*  Chat Room  */}
      <div className="flex-1 flex flex-col rounded-[20px]    w-full h-[400px] py-[5%] md:py-[0px]  lg:w-[400px] xl:w-full md:h-[550px]">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="border-b bg-[#fff] rounded-t-[20px]  border-gray-300 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
              <Link
                to={{
                  pathname: `/user/${selectedChat.id}`,
                  // state: { selectedChat: selectedChat },  
                }}
              >            
              <img
            src={selectedChat.img}
             className="w-10 h-10 object-cover rounded-full bg-gray-300 mr-3"
             />
              </Link>

                <div>
                  <h3 className="text-[17px] font-semibold">{selectedChat.name}</h3>
                  <span className="text-sm text-gray-500">
                    Last seen: {selectedChat.lastSeen}
                  </span>
                </div>
              </div>
              <div className="flex space-x-3 md:space-x-8 text-[#808080] text-[20px] items-center ">
              <button className=" "><FaPhoneAlt /></button>
                <button className="text-gray-500 hover:text-blue-500"><FaVideo /></button>
                <button className="text-gray-500 hover:text-blue-500"><HiOutlineDotsVertical /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto scroll-container p-4 bg-gray-50">
              <div className="flex flex-col space-y-4 justify-end items-end">
              {messages[selectedChat.id]?.map((msg, index) =>
            msg.type === "audio" ? (
    <div key={index} className="flex gap-2 flex-row-reverse items-center space-x-2 bg-[#f1f3f4] rounded-[20px] px-4 py-2  md:w-[300px]">
      <img src={record} alt="record" className="w-[18px] md:w-[35px] object-contain" />
      <div className="flex-1 text-[12px] md:text-[14px] gap-2 flex-row-reverse flex items-center space-x-2">
        <button
          onClick={() => toggleAudioPlay(msg.data, index)}
          className="text-[#fff] rounded-[20px] bg-[#91447B] px-[10px] py-[10px] text-[12px]"
        >
          {audioState.playing === index ? <FaPause /> : <FaPlay />}
        </button>
        <Ausdio
  className={`text-xl ${audioState.playing === index ? "animate-reading" : "text-gray-500"}`}
  color={audioState.playing === index ? "#91447B" : "gray"} // Adjust the color as needed
/>
{formatTime(recordingTime)}
      </div>

    </div>
  ) : (
    <div
    key={index}
    className="flex items-end rounded-l-[50px] rounded-b-[20px] max-w-xs px-[15px] py-[7px] justify-end flex-col bg-[#F4E2EF] break-words overflow-hidden"
  >
    <p className="text-[12px] leading-6 break-words w-full px-[10px] pt-[10px]">{msg}</p>
    <PiCheckThin className="" />
  </div>
  
  )
)}

              </div>
            </div>

            <div className=" bg-[#fff] border-gray-300 p-4 rounded-b-[20px] flex items-center space-x-3">
  {isRecording ? (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-2">
        <div className="animate-pulse ">
        <img src={mic} className="w-full md:w-[20px] " />
          </div>
        <span className="text-[#91447b] font-semibold">
          Recording... {formatTime(recordingTime)}
        </span>
      </div>
      <button
        className="text-[#91447b] p-2 rounded-lg"
        onClick={stopRecording}
      >
        Stop
      </button>
    </div>
  ) : (
    <>
      <form className="flex items-center flex-1 px-[10px] gap-2" onSubmit={handleSendMessage}>
        <button
          className="text-gray-500 pr-2 rounded-lg"
          title="Attach File"
        >
          <img  src={clip}  className="w-full md:w-[18px] md:h-[18px] " />
        </button>
        <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="md:flex-1 border border-gray-300 rounded-[10px] md:rounded-[30px] md:px-3 px-2 text-[12px] md:text-[14px] py-[5px] md:py-2  outline-none"
        />
         <button
        className="text-gray-500 md:pl-2 rounded-lg"
        onClick={startRecording}
        title="Start Recording"
      >
       <img src={mic} className="w-full md:w-[20px] " />
      </button>
        <button
          type="submit"
          className="md:ml-2 bg-[#fff] md:px-1 md:py-1 rounded-lg  "
        >
        <img src={send} className="w-full md:w-[35px]  " />
        </button>
      </form>
      {/* <button
        className="text-gray-500 pl-2 rounded-lg"
        onClick={() => setShowEmojiPicker(true)}
        title="Emoji Picker"
      >
        😀
      </button> */}

      {/* Always show the microphone button */}
     
    </>
  )}
</div>

          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>

      {/* {showEmojiPicker && (
        <EmojiPicker onSelect={handleEmojiClick} onClose={() => setShowEmojiPicker(false)} />
      )} */}
    </div>
  );
};

export default ChatPage;
