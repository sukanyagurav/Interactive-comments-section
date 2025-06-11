import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import Comment from './Comment';
import CommentInput from './CommentInput';
const Comments = () => {
  const [commentsList, setCommentsList] = useState(data);
  function handleSave(comment){
  
  }
  return (
    <section className="flex flex-col max-w-[900px] w-full mx-auto py-10 px-4 my-14">
      {commentsList.comments.map((comment) => {
        return (
          <>
            <Comment
              key={comment.id}
              {...comment}
              currentUser={data.currentUser}
            />
           
          </>
        );
      })}
      <CommentInput currentUser={data.currentUser} />
    </section>
  );
};

export default Comments;
