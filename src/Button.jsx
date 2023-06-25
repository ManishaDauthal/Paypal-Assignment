import React from "react";

const Button = ({ Name, className }) => {
  return (
    <button
      className={
        "text-indigo-400 font-bold rounded-full border-2 px-2 py-1 border-b-gray-500 " +
        className
      }
    >
      {Name}
    </button>
  );
};
export default Button;
