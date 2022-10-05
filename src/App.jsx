import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BasicInformationForm from "./components/BasicInfoForm";
import UserInformationForm from "./components/UserInfoForm";

// https://random-data-api.com/documentation
// https://jsonplaceholder.typicode.com/users
// Random user generator

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const getUserData = async function () {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUserInfo(data[0]);
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(userInfo);

  useEffect(() => {
    getUserData();
  }, []);

  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500

  return (
    <div className="App flex flex-col bg-gradient-to-r from-pink-500 to-purple-500">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center gap-20 items-center mb-10">
        <BasicInformationForm />
        <UserInformationForm props={userInfo} />
      </div>
    </div>
  );
}

export default App;
