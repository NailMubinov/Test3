import React from "react";

const App: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      
      <div className="w-full flex justify-center pt-8">
        <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl border border-gray-600">
          <h2 className="text-2xl font-bold text-white text-center">Hello World!</h2>
        </div>
      </div>
      
      
      <div className="flex items-center justify-center pt-8">
        <div className="text-center p-8 rounded-lg shadow-2xl bg-gray-800 border border-gray-700"></div>
      </div>
    </main>
        <h1 className="text-6xl font-extrabold tracking-tight animate-pulse bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          It works! - now FOR Bolt
        </h1>
        <h3>Changes made by Bolt</h3>
        <p>Checking if Bolt can pull this correction.</p>
        <p>Correction made by CodeSandbox</p>
        <p>StackBlitz CORRECTION!</p>
        <p>Hello, REPLIT!</p>
        <p className="mt-4 text-xl text-gray-400">
          Your React application is up and running.
        </p>
        </div>
      </div>
    </main>
  );
};

export default App;
