import React from "react";
import { Dot } from "react-bootstrap-icons";

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
                <span>
                  <b> {name} </b>
                </span>
              </div>
              <div>
                <span>
                  {path ? (
                    <span>
                      {path} <Dot size={16} /> {status}
                    </span>
                  ) : (
                    status
                  )}
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
