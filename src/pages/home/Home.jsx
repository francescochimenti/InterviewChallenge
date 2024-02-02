import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../reducers/userReducer";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const fetchData = () => {
    setPage(page + 1);
    dispatch(getUsers(page));
  };

  return (
    <div className="container mx-auto">
      <InfiniteScroll
        dataLength={users.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={<p>Finish!</p>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full mx-auto">
          {users.map((user, index) => (
            <Link to={`/details/${user.login.uuid}`} key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 mb-4 mx-auto w-64">
                <img
                  src={user.picture.medium}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <div className="text-center mt-4">
                  <h2 className="text-xl font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
                  <p className="text-gray-600">{`${user.location.city}, ${user.location.country}`}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
