import React from 'react';

const Comment = ({content,createdAt,score,user,replies}) => {

  return (
    <>
    <div className="comment bg-white p-5 rounded-md flex gap-4 md:gap-6 items-center">
      <div className="comment-btns bg-gray-100 p-4 flex flex-col gap-4 items-center w-16 rounded-md">
        <button>
          <img
            src="./images/icon-plus.svg"
            alt=""
          />
        </button>
        <span  className="text-purple-600 block  font-extrabold ">{score}</span>
        <button>
          <img
            src="./images/icon-minus.svg"
            alt=""
          />
        </button>
      </div>
      <div>
        <div className='flex items-center'>
            <div className='flex items-center gap-4'>
                <img src={user.image.png || user.image.webp} 
                className='w-9 h-9' alt={user.username} />
                <h2 className='font-bold text-grey-800'>{user.username}</h2>
                <span className='font-semibold text-grey-500'>{createdAt}</span>
            </div>
            <button className='flex items-center gap-2  ml-auto text-purple-600 font-bold  '>
                <img src="./images/icon-reply.svg" alt="" />
                Reply
            </button>
        </div>
        <p className='leading-6 my-4 text-gray-500  pr-10'>{content}</p>
      </div>

     
    </div>


    </>
  );
};

export default Comment;
