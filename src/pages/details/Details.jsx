import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  // Get the user ID from the URL
  const { id } = useParams();
  // Get the user from the redux store
  const user = useSelector((state) =>
    state.userReducer.users.find((user) => user.login.uuid === id)
  );

  // If the user is not found, display a loading message
  if (!user) {
    return (
      <div>
        The API does not support the search for an individual user by their ID.
        Therefore, this process is carried out locally. When the page is
        refreshed, the user information is no longer displayed.
      </div>
    );
  }

  return (
    <div className="mx-auto p-5 pt-40 bg-white dark:bg-black h-screen w-full">
      <Link
        to="/"
        className="absolute top-0 left-0 p-3 text-white uppercase bg-gradient-to-r from-purple-500 to-pink-500 rounded-r-xl shadow-xl transition-all duration-300 ease-in-out hover:pl-10 font-semibold"
      >
        <i className="fas fa-arrow-left text-xl"></i> Go back
      </Link>
      <div className="max-w-xl mx-auto bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white text-center">
          <div className="mb-4">
            <img
              src={user.picture?.large}
              alt={`${user.name?.first} ${user.name?.last}`}
              className="w-32 h-32 rounded-full mx-auto border-4 border-white"
            />
          </div>
          <h2 className="text-2xl font-semibold">{`${user.name?.first} ${user.name?.last}`}</h2>
          <p className="text-md">{user.email}</p>
        </div>
        <div className="p-4">
          <div className="text-center text-gray-700 dark:text-white">
            <p className="mb-2">
              <span className="font-bold">Address:</span>{" "}
              {`${user.location?.street.number} ${user.location?.street.name}, ${user.location?.city}, ${user.location?.state}, ${user.location?.country}`}
            </p>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> {user.phone}
            </p>
            <p className="mb-2">
              <span className="font-bold">Cell:</span> {user.cell}
            </p>
            <p className="mb-2">
              <span className="font-bold">Gender:</span> {user.gender}
            </p>
            <p className="mb-2">
              <span className="font-bold">DOB:</span>{" "}
              {new Date(user.dob?.date).toDateString()} (Age: {user.dob?.age})
            </p>
            <p className="mb-2">
              <span className="font-bold">Registered:</span>{" "}
              {new Date(user.registered?.date).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
