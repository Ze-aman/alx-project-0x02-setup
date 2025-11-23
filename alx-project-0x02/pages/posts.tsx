import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '@/components/layout/Header'; // <-- UPDATED TO USE ALIAS
import PostCard from '../components/common/PostCard'; // This can also be updated
import { PostCardProps, PostsPageProps } from '../interfaces'; // This can also be updated

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>API Posts (SSR)</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center w-full flex-1 px-4 sm:px-20 py-10">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-4">
          External API Posts
        </h1>
        <p className="mt-2 text-xl text-gray-500 mb-10 text-center">
          Data fetched on the server using `getServerSideProps` from JSONPlaceholder.
        </p>
        
        {/* Grid to display posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <PostCard
              // Using index as key for this example, but 'id' from the API is ideal
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;

// Function for Server-Side Rendering (SSR)
export const getServerSideProps: GetServerSideProps<PostsPageProps> = async () => {
  try {
    // Fetch top 9 posts for a clean grid layout
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9'); 
    
    if (!res.ok) {
        throw new Error(`Failed to fetch posts, status: ${res.status}`);
    }
    
    const rawPosts: any[] = await res.json();

    // Map the raw API data to the component's required props (PostCardProps)
    const posts: PostCardProps[] = rawPosts.map((post) => ({
      userId: post.userId,
      title: post.title,
      content: post.body, // Mapping API's 'body' to component's 'content'
    }));

    return {
      props: {
        posts,
      },
    };

  } catch (error) {
    console.error('Data fetching error:', error);
    // Return an empty array on error
    return {
      props: {
        posts: [],
      },
    };
  }
};
