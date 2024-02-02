import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../reducers/userReducer";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { users, filter } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const filteredUsers = users.filter(
    (user) =>
      (filter.gender === "all" || user.gender === filter.gender) &&
      (filter.nationality === "all" || user.nat === filter.nationality) &&
      (user.name.first.toLowerCase().includes(filter.name.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filter.name.toLowerCase()))
  );

  const fetchData = () => {
    setPage(page + 1);
  };

  return (
    <div className="container mx-auto">
      <InfiniteScroll
        dataLength={filteredUsers.length}
        next={fetchData}
        hasMore={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full mx-auto mt-4">
          {filteredUsers.map((user) => (
            <Link to={`/details/${user.login.uuid}`} key={user.login.uuid}>
              <div
                className="bg-gradient-to-l from-purple-500 to-pink-500 shadow-2xl rounded-lg p-6 mb-4 mx-auto w-64
              hover:scale-105 transition-all duration-300"
              >
                <img
                  src={user.picture.medium}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <div className="text-center mt-4">
                  <h2 className="text-xl font-light uppercase">{`${user.name.first} ${user.name.last}`}</h2>
                  <p className="text-gray-300 font-extralight">{`${user.location.city}, ${user.location.country}`}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default UserList;
