import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center p-4">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  );
};

export default LoadingSpinner;