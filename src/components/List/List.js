import React from "react";

import "./List.scss";

function List({ list }) {
  return (
    <div className="list">
      {list.map(({ id, name, status, path, avatar }) => {
        return (
          <div key={id} className="list-row">
            <div className="avatar">
              <img src={avatar} alt="NA" />
            </div>
            <div className="details">
              <div>
                <span> {name} </span>
              </div>
              <div>
                <span>
                  {" "}
                  {path} * {status}{" "}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
