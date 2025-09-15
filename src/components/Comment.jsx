import React, { useState, useEffect } from 'react';
import CommentInput from './CommentInput';

const Comment = ({
  content,
  createdAt,
  score,
  user,
  replies,
  currentUser,
  onReply,
  showReplyInput,
  onReplySubmit,
  id,
  onVote,
}) => {
  const [edit, setEdit] = useState(false);
  const [editedContent, setEditedContent] = useState(content);


  useEffect(() => {
    setEditedContent(content);
  }, [content]);
  return (
    <>
      <div className="comment bg-white p-5 rounded-md flex gap-4 md:gap-6 my-4 items-center">
        <div className="comment-btns bg-gray-100 p-4 flex flex-col gap-4 items-center w-16 rounded-md">
          <button
            onClick={() => onVote(id, 1)}
            className="btn"
     
          >
            <img
              src="./images/icon-plus.svg"
              alt=""
            />
          </button>
          <span className="text-purple-600 block  font-extrabold ">
            {score}
          </span>
          <button
            onClick={() => onVote(id, -1)}
            className="btn"
            
          >
            <img
              src="./images/icon-minus.svg"
              alt=""
            />
          </button>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <img
                src={user.image.png || user.image.webp}
                className="w-9 h-9"
                alt={user.username}
              />
              <h2 className="font-bold text-grey-800">{user.username}</h2>
              <span className="font-semibold text-grey-500">{createdAt}</span>
            </div>
            {currentUser.username != user.username && (
              <button
                className="flex items-center gap-2  ml-auto text-purple-600 font-bold hover:text-purple-200 transition-all duration-300 "
                onClick={() => onReply(id)}
              >
                <img
                  src="./images/icon-reply.svg"
                  alt=""
                />
                Reply
              </button>
            )}
            {currentUser.username == user.username && (
              <div className="ml-auto flex gap-8">
                <button className="flex items-center gap-2  ml-auto text-pink-400 font-bold hover:text-pink-200 transition-all duration-300">
                  <img
                    src="./images/icon-delete.svg"
                    alt=""
                  />
                  Delete
                </button>
                <div>
                  {!edit && (
                    <button
                      className="flex items-center gap-2  ml-auto text-purple-600 font-bold hover:text-purple-200 transition-all duration-300"
                      onClick={() => setEdit(true)}
                    >
                      <img
                        src="./images/icon-edit.svg"
                        alt=""
                      />
                      Edit
                    </button>
                  )}
                  {edit && (
                    <button
                      className="flex items-center gap-2  ml-auto text-purple-600 font-bold hover:text-purple-200 transition-all duration-300"
                      onClick={() => setEdit(false)}
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          {!edit ? (
            <p className="leading-6 my-4 text-gray-500 pr-10">{content}</p>
          ) : (
            <div className="w-full leading-6 my-4 text-gray-500 pr-10">
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 resize-none h-[130px] text-gray-700"
                rows="3"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
      {showReplyInput && (
        <div className="ml-4">
          <CommentInput
            currentUser={currentUser}
            type="reply"
            onSave={(text) => onReplySubmit(id, text)}
          />
        </div>
      )}
      {replies && replies.length > 0 && (
        <div className="pl-8 border-l-2 border-grey-100 mb-4">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              {...reply}
              currentUser={currentUser}
              onReply={onReply}
              showReplyInput={false}
              onReplySubmit={onReplySubmit}
              id={reply.id}
              onVote={onVote}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Comment;
