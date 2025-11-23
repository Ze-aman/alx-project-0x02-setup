import Head from 'next/head';
import Header from '../components/layout/Header'; // Import the Header component

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Use flex-col to stack Header and Main */}
      <Head>
        <title>ALX Project 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header /> {/* Place the Header here */}

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          Welcome to <span className="text-black">ALX-PROJECT-2!</span>
        </h1>

        <p className="mt-3 text-2xl">
          This Next.js project is set up with **TypeScript** and **Tailwind CSS**.
        </p>

        <p className="mt-3 text-xl text-gray-500">
          Use the navigation links above to test **Basic Routing**.
        </p>
      </main>
    </div>
  );
};

export default Home;