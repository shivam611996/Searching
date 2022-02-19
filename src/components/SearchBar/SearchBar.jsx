import React from "react";
import { Input } from "reactstrap";
import { Search } from "react-bootstrap-icons";

import "./SearchBar.scss";

const Spinner = () => (
  <span className="spinner-border text-secondary" role="status"></span>
);

function SearchBar({ loading, handleUserSearch, searchValue }) {
  return (
    <div className="search-bar-container">
      {loading ? <Spinner /> : <Search color="#6c757d" />}
      <Input
        autoFocus
        onChange={handleUserSearch}
        placeholder="Searching is easier"
        type="search"
        value={searchValue}
      />
    </div>
  );
}

export default SearchBar;
