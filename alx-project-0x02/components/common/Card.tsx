// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces'; // Import the interface

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-[1.03]">
      {/* Card Header/Title */}
      <div className="px-6 py-4 bg-blue-500 text-white">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      
      {/* Card Content/Body */}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;