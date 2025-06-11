import React from 'react'

const CommentInput = ({currentUser}) => {
  return (
    <div className='bg-white p-6 flex  gap-4 h-32 rounded-md items-start'>
      <img src={currentUser.image.png || currentUser.image.webp} alt={currentUser.username} className='w-9 h-9 ' /> 
      <textarea placeholder='Add a comment...' 

      className='border-3 border-grey-100 w-full p-4  no-resize rounded-md'>

      </textarea>
      <button className='text-gray-100 p-6 py-2 rounded-lg bg-purple-600 ml-auto'>
        Send
      </button>
    </div>
  )
}

export default CommentInput
