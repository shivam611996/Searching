import React from "react";

import "./Files.scss";

function Files({ files }) {
  return (
    <div className="files">
      {files.map(({ name, status, path, avatar }) => {
        return (
          <div className="file">
            <div className="file-image">
              <img src={avatar} alt="NA" />
            </div>
            <div className="file-details">
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

export default Files;
