import React from "react";
import { debounce } from "lodash";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
import { users as usersData } from "./dummy-data/users";
import { files as filesData } from "./dummy-data/files";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [users, setUsers] = React.useState([]);
  const [files, setFiles] = React.useState([]);

  const getFilteredListByName = ({ list, value }) => {
    const filteredList = list.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    return filteredList;
  };

  const handleUserSearch = debounce(({ target: { value } }) => {
    const filteredUsers = getFilteredListByName({ list: usersData, value });
    const filteredFiles = getFilteredListByName({ list: filesData, value });
    setUsers(filteredUsers);
    setFiles(filteredFiles);
  }, 1000);

  return (
    <main>
      <section className="search-container">
        <SearchBar handleUserSearch={handleUserSearch} />
        <NavBar users={users} files={files} />
      </section>
    </main>
  );
}

export default App;
