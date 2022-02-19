import React from "react";

import "./Users.scss";

function Users({ users }) {
  return (
    <div className="users">
      {users.map(({ name, status, lastEdited, avatar }) => {
        return (
          <div className="user">
            <div className="user-image">
              <img src={avatar} alt="NA" />
            </div>
            <div className="user-details">
              <div>
                <span> {name} </span>
              </div>
              <div>
                <span>
                  {" "}
                  {status} * {lastEdited}{" "}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
