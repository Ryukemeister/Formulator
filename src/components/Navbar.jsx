import React from "react";

function Navbar() {
  // Generate dynamic forms with the help of JSON

  return (
    <nav className="bg-white mb-10 shadow-lg">
      <div className="flex justify-between items-center lg:px-20 h-[60px]">
        <h1 className="font-poppins font-bold pl-4 lg:pl-0 mr-4 text-xl lg:text-2xl">
          Formulator
        </h1>
        <p className="font-poppins tracking-tight leading-4 mr-2 lg:mr-0 pt-3 lg:pt-0 text-center lg:leading-normal lg:text-[17px]">
          Generate dynamic forms using JSON
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
