import React from 'react';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="col-span-4 w-full flex flex-col items-center justify-center text-center py-16 text-red-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mb-3 text-red-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l6.516 11.59c.75 1.334-.213 2.987-1.743 2.987H3.483c-1.53 0-2.492-1.653-1.742-2.987l6.516-11.59zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-lg font-medium">Something went wrong</p>
      <p className="text-sm text-red-400">{message}</p>
    </div>
  );
};
