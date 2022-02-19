import React from "react";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.css";

function SearchBar({ handleUserSearch }) {
  return (
    <>
      <FontAwesomeIcon icon={faCoffee} />
      <Input
        onChange={handleUserSearch}
        placeholder="Searching is easier"
        type="search"
      />
    </>
  );
}

export default SearchBar;
