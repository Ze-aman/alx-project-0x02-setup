import Head from 'next/head';
import React, { useState } from 'react';
import Header from '@/components/layout/Header'; // <-- UPDATED TO USE ALIAS
import Card from '@/components/common/Card'; 
import PostModal, { PostData } from '../components/common/PostModal'; // Import PostModal and PostData

const HomePage: React.FC = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State to store all submitted posts (using the PostData interface)
  const [posts, setPosts] = useState<PostData[]>([
    // Initial post to start with
    { 
      title: "Next.js Development", 
      content: "This project showcases basic routing, component composition, and modal implementation." 
    },
  ]);

  // Function to handle data submitted from the modal
  const handlePostSubmit = (newPost: PostData) => {
    // Add the new post to the beginning of the array (newest first)
    setPosts([newPost, ...posts]); 
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Home Page</title>
      </Head>

      <Header /> 

      <main className="flex flex-col items-center justify-start w-full flex-1 px-20 py-10">
        <h1 className="text-4xl font-extrabold text-green-600 mb-8 text-center">
          Component Composition & Dynamic Content
        </h1>
        
        {/* Button to open the Modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 mb-10 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          ➕ Add New Post via Modal
        </button>

        {/* Display Submitted Posts using the Reusable Card Component */}
        <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post, index) => (
            <Card 
              key={index}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </main>

      {/* Modal Component */}
      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePostSubmit}
      />
    </div>
  );
};

export default HomePage;
