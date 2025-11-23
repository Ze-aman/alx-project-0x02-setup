import React from 'react';
import { type ButtonProps } from '../../interfaces'; // <-- UPDATED to use 'import type'

const Button: React.FC<ButtonProps> = ({ 
  children, 
  size = 'medium', // Default size
  shape = 'rounded-md', // Default shape
  className = '', // Allow custom classes
  ...rest // Capture other standard button props (e.g., type, disabled)
}) => {
  
  // 1. Determine size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg font-semibold',
  }[size];

  // 2. Define base and hover styles
  const baseClasses = 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2';

  // 3. Combine all classes
  const allClasses = `${baseClasses} ${sizeClasses} ${shape} ${className}`;

  return (
    <button 
      className={allClasses} 
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
