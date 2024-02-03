import React from "react";
import UserList from "../../components/userList/UserList";
import UserSearchBar from "../../components/userSearchBar/UserSearchBar";

// Home page component
const Home = () => {
  return (
    <div className="pt-20 bg-white mx-auto dark:bg-black w-full min-h-screen">
      <h1 className="text-5xl font-bold mb-10 text-center uppercase text-black dark:text-white">
        Interview Challenge
      </h1>
      <UserSearchBar />
      <UserList />
    </div>
  );
};

export default Home;
