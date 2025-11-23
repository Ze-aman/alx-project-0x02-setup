import React, { useState } from 'react';

// Define the structure for the new post data
export interface PostData {
  title: string;
  content: string;
}

// Define the component's props
interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Don't render anything if the modal is not open
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    // Pass the new data to the parent component
    onSubmit({ title, content });

    // Reset form fields and close the modal
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    // Overlay (Clicking outside closes the modal)
    <div 
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close on backdrop click
    >
      {/* Modal Container (Stop propagation so clicking inside doesn't close it) */}
      <div 
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Create New Post</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter a post title"
              required
            />
          </div>

          {/* Content Textarea */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              id="content"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Write your post content here..."
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;