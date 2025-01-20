import   { useState } from 'react';

const EmojiPicker = ({ onSelect, onClose }) => {
  const [selectedTab, setSelectedTab] = useState('emojis'); // "emojis", "gifs", "stickers"

  const emojiList = [
    "😊", "😂", "😍", "😎", "😅", "🥺", "😜", "😘", "😃", "😆", // Add more emojis here
    "😁", "😏", "😜", "😝", "😛", "😋", "🤗", "🤩", "🥳", "😏",
  ];

  const gifList = [
    "🎥 GIF 1", "🎥 GIF 2", "🎥 GIF 3", // Placeholder for actual GIFs
  ];

  const stickerList = [
    "🖼 Sticker 1", "🖼 Sticker 2", "🖼 Sticker 3", // Placeholder for actual Stickers
  ];

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-72 max-h-96 overflow-y-auto">
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-4 justify-center">
          <button
            className={`flex-1 py-2 ${selectedTab === 'emojis' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabChange('emojis')}
          >
            <span role="img" aria-label="emoji">😊</span> Emojis
          </button>
          <button
            className={`flex-1 py-2 ${selectedTab === 'gifs' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabChange('gifs')}
          >
            <span role="img" aria-label="gif">🎥</span> GIFs
          </button>
          <button
            className={`flex-1 py-2 ${selectedTab === 'stickers' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabChange('stickers')}
          >
            <span role="img" aria-label="sticker">🖼</span> Stickers
          </button>
        </div>

        {/* Emoji, GIF, and Sticker Sections */}
        {selectedTab === 'emojis' && (
          <div className="grid grid-cols-6 gap-2">
            {emojiList.map((emoji, index) => (
              <button
                key={index}
                onClick={() => onSelect(emoji)}
                className="text-3xl p-2 hover:bg-gray-200 rounded-full"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}

        {selectedTab === 'gifs' && (
          <div className="space-y-2">
            {gifList.map((gif, index) => (
              <button
                key={index}
                onClick={() => onSelect(gif)}
                className="text-xl block hover:bg-gray-200 p-2 rounded-lg"
              >
                {gif}
              </button>
            ))}
          </div>
        )}

        {selectedTab === 'stickers' && (
          <div className="space-y-2">
            {stickerList.map((sticker, index) => (
              <button
                key={index}
                onClick={() => onSelect(sticker)}
                className="text-xl block hover:bg-gray-200 p-2 rounded-lg"
              >
                {sticker}
              </button>
            ))}
          </div>
        )}

        {/* Close Button */}
        <button
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EmojiPicker;
