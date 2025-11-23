import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard'; // Import the new component
import { UserProps, UsersPageProps } from '../interfaces'; // Import interfaces

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Users (SSR)</title>
      </Head>

      <Header />
      
      <main className="flex flex-col items-center w-full flex-1 px-4 sm:px-20 py-10">
        <h1 className="text-4xl font-extrabold text-teal-600 mb-4">
          External API Users
        </h1>
        <p className="mt-2 text-xl text-gray-500 mb-10 text-center">
          Displaying user data fetched via Server-Side Rendering (GSSP).
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

// Function for Server-Side Rendering (SSR)
export const getServerSideProps: GetServerSideProps<UsersPageProps> = async () => {
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
    };

  } catch (error) {
    console.error('User data fetching error:', error);
    // Return an empty array on error
    return {
      props: {
        users: [],
      },
    };
  }
};