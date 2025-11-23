import Head from 'next/head';
import { type GetStaticProps } from 'next'; // Changed from GetServerSideProps
import Header from '@/components/layout/Header'; // <-- UPDATED TO USE ALIAS
import UserCard from '@/components/common/UserCard'; // <-- UPDATED TO USE ALIAS
import { type UserProps, type UsersPageProps } from '../interfaces'; // <-- UPDATED TO USE 'import type'

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Users (SSG)</title>
      </Head>

      <Header />
      
      <main className="flex flex-col items-center w-full flex-1 px-4 sm:px-20 py-10">
        <h1 className="text-4xl font-extrabold text-teal-600 mb-4">
          External API Users
        </h1>
        <p className="mt-2 text-xl text-gray-500 mb-10 text-center">
          Displaying user data fetched at **build time** using `getStaticProps` (Static Site Generation).
        </p>
        
        {/* Grid to display UserCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {users.map((user) => (
            <UserCard
              key={user.id}
              {...user} // Spread all UserProps directly to the component
            />
          ))}
        </div>

        {users.length === 0 && (
          <p className="text-red-500 mt-10">Failed to load user data.</p>
        )}
      </main>
    </div>
  );
};

export default UsersPage;

/**
 * Function for Static Site Generation (SSG).
 * Fetches data once at build time.
 */
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  
  try {
    const res = await fetch(API_URL); 
    
    if (!res.ok) {
        throw new Error(`Failed to fetch users, status: ${res.status}`);
    }
    
    const users: UserProps[] = await res.json();

    return {
      props: {
        users,
      },
      // Optional: Regenerate the page every 24 hours (86400 seconds) in production
      revalidate: 86400, 
    };

  } catch (error) {
    console.error('User data fetching error:', error);
    // Return an empty array on error
    return {
      props: {
        users: [],
      },
      // Set to notFound: true to show a 404 page if critical data fails to load
      // notFound: true, 
    };
  }
};
