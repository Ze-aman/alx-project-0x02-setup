import Head from 'next/head';
import Header from '@/components/layout/Header'; // <-- UPDATED TO USE ALIAS
import Button from '@/components/common/Button'; 

const AboutPage: React.FC = () => {

  const handleButtonClick = (name: string) => {
    alert(`You clicked the ${name} button!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-start w-full flex-1 px-20 py-10 text-center">
        <h1 className="text-4xl font-extrabold text-purple-600 mb-10">
          About Component Reusability
        </h1>
        <p className="mt-3 text-xl mb-12 text-gray-700">
          This page demonstrates the flexibility of the reusable **Button** component, which accepts `size` and `shape` props via TypeScript definitions.
        </p>

        <div className="flex flex-col items-center space-y-8 w-full max-w-lg">
          
          {/* Example 1: Large & Rounded Full */}
          <Button 
            size="large" 
            shape="rounded-full" 
            onClick={() => handleButtonClick('Large Rounded')}
          >
            Large & Full Circle
          </Button>

          {/* Example 2: Medium & Rounded MD (Default) */}
          <Button 
            size="medium" 
            shape="rounded-md" 
            onClick={() => handleButtonClick('Medium Rounded')}
          >
            Medium & Default Rounded
          </Button>

          {/* Example 3: Small & Rounded SM */}
          <Button 
            size="small" 
            shape="rounded-sm" 
            onClick={() => handleButtonClick('Small Square')}
          >
            Small & Barely Rounded
          </Button>

          {/* Example 4: Custom shape and size */}
          <Button 
            size="large" 
            shape="rounded-sm" 
            className="bg-red-600 hover:bg-red-700" 
            onClick={() => handleButtonClick('Custom Square')}
          >
            Large & Red Custom
          </Button>

        </div>
      </main>
    </div>
  );
};

export default AboutPage;
