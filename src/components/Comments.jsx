import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import Comment from './Comment';
import CommentInput from './CommentInput';
const Comments = () => {
  const [commentsList, setCommentsList] = useState(data);
  const [replyToId, setReplyToId] = useState(null);

  function handleReply(parentId, replyText) {
    setCommentsList((prev) => ({
      ...prev,
      comments: prev.comments.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              replies: [
                ...(comment.replies || []),
                {
                  id: Date.now(),
                  content: replyText,
                  user: data.currentUser,
                  createdAt: 'now',
                  score: 0,
                  replies: [],
                },
              ],
            }
          : comment
      ),
    }));
    setReplyToId(null);
  }
  function handleVote(commentId, delta, username) {
    setCommentsList((prev) => ({
      ...prev,
      comments: prev.comments.map((comment) => {
        if (comment.id !== commentId) return comment;

        // Initialize voters array if not present
        const voters = comment.voters || [];
        const existingVote = voters.find((v) => v.username === username);

        // Prevent double voting in the same direction
        if (existingVote && existingVote.vote === delta) return comment;

        let newScore = comment.score;
        let newVoters;

        if (!existingVote) {
          // New vote
          newScore += delta;
          newVoters = [...voters, { username, vote: delta }];
        } else {
          // Change vote direction
          newScore += delta - existingVote.vote;
          newVoters = voters.map((v) =>
            v.username === username ? { ...v, vote: delta } : v
          );
        }

        return { ...comment, score: newScore, voters: newVoters };
      }),
    }));
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
              onReply={(id) => setReplyToId(id)}
              showReplyInput={replyToId === comment.id}
              onReplySubmit={handleReply}
              id={comment.id}
              onVote={(id, delta) => handleVote(id, delta, data.currentUser.username)}
            />
          </>
        );
      })}
      <CommentInput currentUser={data.currentUser} />
    </section>
  );
};

export default Comments;
