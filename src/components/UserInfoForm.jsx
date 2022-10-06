import React, { useState } from "react";

function UserInformationForm({ props }) {
  let userInfo = [];
  let userInfoArr = [];
  // console.log(props);
  Object.keys(props).forEach((key) => {
    // console.log(key);
    userInfo.push(key);
  });
  userInfoArr = [{ ...userInfo }];
  // console.log(o);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-sm lg:w-[550px] w-[320px] justify-center py-5 lg:py-8 px-7 lg:px-14 shadow-2xl bg-red-100"
      >
        <h1 className="text-center text-red-400 text-3xl font-hind font-bold">
          Welcome back!
        </h1>
        <h1 className="text-center text-xl font-hind text-black font-bold">
          LOGIN HERE
        </h1>
        {userInfo.map((user) => (
          <div key={user} className="flex flex-col my-1 lg:my-2">
            <label className="font-poppins font-normal mb-1">{`${user[0].toUpperCase()}${user.slice(
              1
            )}`}</label>
            <input
              className="border-[1.5px] px-2 py-1 font-poppins rounded-sm border-white outline-none"
              type="text"
              name={user}
              required={true}
            />
          </div>
        ))}
        <button
          type="submit"
          className="text-white font-semibold font-poppins tracking-wider mt-4 bg-red-400 py-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default UserInformationForm;
