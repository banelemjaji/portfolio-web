import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container mx-auto p-4 text-center min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-500 my-4">404</h1>
      <p className="text-xl text-white mb-8">Oops! Page Not Found.</p>
      <Link to="/" className="text-blue-400 hover:underline text-lg">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;