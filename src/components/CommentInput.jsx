import React, { useState } from 'react';

const CommentInput = ({ currentUser,type="send",onSave }) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  function handleSubmit() {
    if (comment.trim() === "") {
      setError("Comment cannot be empty.");
      return;
    }
    if (onSave) {
      onSave(comment);
      setComment(""); // Clear input after saving
    }
  }
  return (
    <>
      <div className="bg-white p-6 rounded-md  relative">
        <div className=" flex  gap-4  items-start mb-4">
          <img
            src={currentUser.image.png || currentUser.image.webp}
            alt={currentUser.username}
            className="w-9 h-9 "
          />
          <textarea
            placeholder="Add a comment..."
            className="border-3 border-grey-100 w-full p-4 resize-none h-[130px]  rounded-md"
            valu={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="text-gray-100 p-6 py-2 rounded-lg bg-purple-600 ml-auto hover:bg-purple-200 transition-all duration-300 sendBtn"
            onClick={handleSubmit}
          >
            {type == 'send' ? 'Send': 'Reply'}
          </button>
        </div>
       {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
};

export default CommentInput;
