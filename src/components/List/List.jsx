import React from "react";

import "./List.scss";
import ListRow from "../ListRow/ListRow";

function List({ list, searchValue, loading }) {
  const actualList = loading ? Array(3).fill({}) : list;
  return (
    <div className="list">
      {actualList.map((listItem) => {
        return (
          <ListRow
            key={listItem.id}
            listItem={listItem}
            loading={loading}
            searchValue={searchValue}
          />
        );
      })}
    </div>
  );
}

export default List;
