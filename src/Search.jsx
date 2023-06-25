import React from "react";


export default function Search() {
  return (
    <form className="max-w-3xl mt-8 ml-48">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-700 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by name or email"
          className="w-full py-3 pl-12 pr-4 text-gray-700 border-2 border-gray-600 rounded-full bg-white focus:bg-white focus:border-indigo-600"
        />
      </div>
     
    </form>
  );
}
