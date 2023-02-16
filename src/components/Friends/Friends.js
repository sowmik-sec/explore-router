import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const friends = useLoaderData();
  console.log(friends);
  return (
    <div>
      <h2>I have no friend. There are some made up fake friends</h2>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </div>
  );
};

export default Friends;
