import React from "react";

const Body = ({ price, date }) => {
  return (
    <div>
      <div className="max-w-4xl shadow-lg border-b-gray-200 border-2 shadow-slate-50 flex p-2 items-center">
        <img
          className="w-8 h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxoRIqk-TRI7-2iTLN7lv-MCpRyP7YIE_KQ&usqp=CAU"
        />
        <div className="ml-2 flex flex-col">
          <span className="font-bold text-black">Name.com Inc.</span>
          <span className="font-semibold text-gray-600">
            Jun{date}. Automatic Payment
          </span>
        </div>
        <span className="grow"></span>
        <div>
          <span className="font-bold text-black">{price}</span>
        </div>
      </div>
    </div>
  );
};
export default Body;
