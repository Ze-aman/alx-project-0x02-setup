import React from 'react';
import { PostCardProps } from '../../interfaces'; // Import the interface

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-indigo-500 max-w-sm w-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <h3 className="text-xl font-bold text-gray-800 mb-2 capitalize leading-snug">
        {title}
      </h3>
      <span className="text-sm text-indigo-600 mb-4 inline-block">
        Posted by User ID: {userId}
      </span>
      <p className="text-gray-600 text-base mt-2 line-clamp-3">
        {content}
      </p>
      <button className="mt-4 text-sm text-blue-500 font-medium hover:text-blue-700">
        Read More →
      </button>
    </div>
  );
};

export default PostCard;