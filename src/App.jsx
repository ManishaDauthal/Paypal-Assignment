import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import Body from "./Body";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <div className="text-gray-800 font-bold ml-48 mt-3"> Filter by </div>
      <div className="flex my-3 space-x-2 ml-48">
        <Button className="bg-sky-200" Name="Date:Last 90 days" />
        <Button Name="Type" />
        <Button Name="Status" />
      </div>
      <div className="text-black font-bold ml-48"> Completed </div>
      <div className="text-gray-500 font-semibold ml-48 mt-3"> This Week </div>
      <div className="space-y-2 ml-48 mt-2 ">
        <Body para="22" price="-$ 9.89" />
        <Body para="21" price="-$ 8.99" />
        <Body para="20" price="-$ 9.99" />
        <Body para="19" price="-$ 9.99" />
      </div>
    </div>
  );
};
export default App;
