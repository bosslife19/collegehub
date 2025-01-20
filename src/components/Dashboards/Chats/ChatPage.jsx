import { useState, useEffect, useMemo } from "react";
// import EmojiPicker from "./Emoji/EmojiPicker";
 import send  from "../../../assets/send.png"
 import mic  from "../../../assets/mic.png"
 import clip  from "../../../assets/paper-clip.png"
 import record  from "../../../assets/profiles.png"
import { LuAudioLines } from "react-icons/lu";
import { FaPause, FaPlay } from "react-icons/fa";
import Ausdio from "../../../assets/audio";

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

  const chats = useMemo(
    () => [
      { id: 1, name: "John Doe", type: "chat", lastSeen: "10 minutes ago" },
      { id: 2, name: "Jane Smith", type: "chat", lastSeen: "20 minutes ago" },
      { id: 3, name: "Team Alpha", type: "group", lastSeen: "5 minutes ago" },
      { id: 4, name: "Project Beta", type: "group", lastSeen: "30 minutes ago" },
    ],
    []
  );

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
    <div className="flex h-screen">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 border-r border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800 px-4 py-3 border-b">
          Chats
        </h2>
        <ul className="flex flex-col divide-y">
          {chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => handleSelectChat(chat)}
              className={`cursor-pointer p-3 ${selectedChat?.id === chat.id ? "bg-blue-100 text-blue-700" : "hover:bg-gray-200"}`}
            >
              <span className="font-medium">{chat.name}</span>
              <span className="text-sm text-gray-500 ml-2">
                {chat.type === "group" ? "(Group)" : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="border-b border-gray-300 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold">{selectedChat.name}</h3>
                  <span className="text-sm text-gray-500">
                    Last seen: {selectedChat.lastSeen}
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-500 hover:text-blue-500">📹</button>
                <button className="text-gray-500 hover:text-blue-500">📞</button>
                <button className="text-gray-500 hover:text-blue-500">;</button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="flex flex-col space-y-4 justify-end items-end">
              {messages[selectedChat.id]?.map((msg, index) =>
            msg.type === "audio" ? (
    <div key={index} className="flex gap-2 flex-row-reverse items-center space-x-2 bg-[#f1f3f4] rounded-[20px] px-4 py-2 w-[100px] md:w-[300px]">
      <img src={record} alt="record" className="w-[18px] md:w-[35px] object-contain" />
      <div className="flex-1 gap-2 flex-row-reverse flex items-center space-x-2">
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
      className="self-end bg-blue-100 p-3 rounded-lg max-w-xs"
    >
      {msg}
    </div>
  )
)}

              </div>
            </div>

            <div className=" t bg-[#fff] border-gray-300 p-4 flex items-center space-x-3">
  {isRecording ? (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-2">
        <div className="animate-pulse text-red-500">🎤</div>
        <span className="text-red-500 font-semibold">
          Recording... {formatTime(recordingTime)}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-600 p-2 rounded-lg"
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
          <img  src={clip}  className="w-[18px] h-[18px] " />
        </button>
        <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
         <button
        className="text-gray-500 pl-2 rounded-lg"
        onClick={startRecording}
        title="Start Recording"
      >
       <img src={mic} className="w-[20px] " />
      </button>
        <button
          type="submit"
          className="ml-2 bg-[#fff] px-1 py-1 rounded-lg  "
        >
        <img src={send} className="w-[35px] " />
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
