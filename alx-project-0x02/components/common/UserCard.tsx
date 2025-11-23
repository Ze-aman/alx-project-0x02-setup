import React from 'react';
import { UserProps } from '../../interfaces'; // Import the UserProps interface

const UserCard: React.FC<UserProps> = ({ 
  name, 
  username, 
  email, 
  address, 
  phone,
  company
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 w-full transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border-l-4 border-teal-500">
      <div className="flex items-center space-x-4 mb-4">
        {/* Placeholder Icon/Avatar */}
        <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{name}</h3>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>

      <div className="space-y-3 text-gray-700 text-sm">
        
        {/* Contact Info */}
        <p className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <a href={`mailto:${email}`} className="hover:text-teal-600 truncate">{email}</a>
        </p>
        
        <p className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          {phone.split(' ')[0]} {/* Display only the first part of the phone number */}
        </p>

        {/* Company Info */}
        <div className="pt-2 border-t border-gray-100">
            <p className="font-semibold text-gray-800">Company:</p>
            <p className="text-gray-600 italic">"{company.catchPhrase}"</p>
        </div>

        {/* Address Info */}
        <div className="pt-2 border-t border-gray-100">
          <p className="font-semibold text-gray-800">Address:</p>
          <p className="text-gray-600">
            {address.street}, {address.suite} <br/>
            {address.city}, {address.zipcode}
          </p>
        </div>

      </div>
    </div>
  );
};

export default UserCard;