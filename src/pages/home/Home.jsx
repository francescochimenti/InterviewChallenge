import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../reducers/userReducer";
import InfiniteScroll from "react-infinite-scroll-component";

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
    <div>
      <InfiniteScroll
        dataLength={users.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={<p>Finish!</p>}
      >
        {users.map((user, index) => (
          <div key={index}>
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>Email: {user.email}</p>
            <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
