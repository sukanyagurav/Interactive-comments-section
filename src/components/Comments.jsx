import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import Comment from './Comment';
import CommentInput from './CommentInput';
const Comments = () => {
  const [commentsList, setCommentsList] = useState(data);
  console.log(commentsList);
  return (
    <section className="flex flex-col gap-8 max-w-[900px] w-full mx-auto py-10 px-4">
      {commentsList.comments.map((comment) => {
        return (
          <>
            <Comment
              key={comment.id}
              {...comment}
            />
           
          </>
        );
      })}
      <CommentInput currentUser={data.currentUser} />
    </section>
  );
};

export default Comments;
