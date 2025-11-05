import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 py-10 text-center bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 Not Found</h1>
      <p className="text-gray-600 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default NotFound;
