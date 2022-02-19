import React from "react";
import Highlight from "react-highlighter";
import { Dot } from "react-bootstrap-icons";
import { PEOPlE } from "../NavBar/NavBar";

import "./List.scss";

function List({ list, searchValue }) {
  return (
    <div className="list">
      {list.map(({ id, name, status, path, avatar, category }) => {
        return (
          <div key={id} className="list-row">
            <div className="avatar">
              <img src={avatar} alt={name} />
              {category === PEOPlE && (
                <Dot
                  className="active-status"
                  size={60}
                  color={`${status === "Active now" ? "green" : "orange"}`}
                />
              )}
            </div>
            <div className="details">
              <div>
                <span>
                  <b>
                    <Highlight search={searchValue}>{name}</Highlight>
                  </b>
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
