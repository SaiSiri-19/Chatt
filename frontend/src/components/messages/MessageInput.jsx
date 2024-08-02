
import React, { useState, useRef } from "react";
import { BsSend, BsEmojiLaughing, BsFileEarmarkArrowUp } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const MessageInput = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const { loading, sendMessage } = useSendMessage();
  const fileInputRef = useRef(null);

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = sym.map((el) => parseInt(el, 16));
    const emoji = String.fromCodePoint(...codeArray);
    setMessage(message + emoji);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message && !file) return;
    await sendMessage(message, file);
    setMessage("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    className="cursor-pointer hover:text-slate-300 mr-2"

  };

  return (
    <form className='px-4 my-3 relative' onSubmit={handleSubmit}>
      <div className='relative flex items-center'>
        <span
          onClick={() => setShowEmoji(!showEmoji)}
        >
          <BsEmojiLaughing className=' cursor-pointer text-gray hover:text-white' />
        </span>
        {showEmoji &&  (
          <div className="absolute bottom-full z-10">
            <Picker
              data={data}
              emojiSize={20}
              emojiButtonSize={28}
              onEmojiSelect={addEmoji}
              maxFrequentRows={0}
            />
          </div>
        )}
        <input
          type='text'
          className='border text-sm rounded-lg pl-8 pr-12 py-2.5 bg-gray-700 border-gray-600 text-white w-full '
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label htmlFor="fileInput" className='cursor-pointer ml-2 hover:text-white'>
          <BsFileEarmarkArrowUp />
        </label>
        <input
       type="file"
        id="fileInput"
        onChange={handleFileChange}
       style={{ display: "none" }}
       className=" hover:text-white"
      ref={fileInputRef}
/>




        <button type='submit' className='ml-2 hover:text-white'>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

