import _ from "lodash";
import React from "react";
import Router from "next/router";

const Users = (props) => {
  const { users } = props;
  return (
    <ul>
      {_.map(users, (user) => {
        console.log({ user });
        return (
          <li
            key={user.id}
            onClick={(e) => Router.push("/users/[id]", `/users/${user.id}`)}
          >
            <h5>{user.first_name}</h5>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
