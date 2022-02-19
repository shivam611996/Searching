import React from "react";
import { debounce } from "lodash";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
import { users as usersData } from "./dummy-data/users";
import { files as filesData } from "./dummy-data/files";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// Note: Handling only users and files search only intentionally
// this behaviour can be easily extended for Chat and Lists search as well
function App() {
  const [users, setUsers] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  const [chats, setChats] = React.useState([]);
  const [lists, setLists] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const searchResultsLength = users.length + files.length + 1;

  const getFilteredListByName = ({ list, value }) => {
    const filteredList = list.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    return filteredList;
  };

  const debouncedSearch = debounce((value) => {
    setLoading(true);
    // mimics API call delay
    setTimeout(() => {
      const filteredUsers = getFilteredListByName({ list: usersData, value });
      const filteredFiles = getFilteredListByName({ list: filesData, value });
      setUsers(filteredUsers);
      setFiles(filteredFiles);
      setChats([]);
      setLists([]);
      setLoading(false);
    }, 1500);
  }, 1000);

  const handleUserSearch = ({ target: { value } }) => {
    if (value) {
      debouncedSearch(value);
    } else {
      setUsers([]);
      setFiles([]);
      setChats([]);
      setLists([]);
    }
  };
  return (
    <main>
      <section className="search-container">
        <SearchBar loading={loading} handleUserSearch={handleUserSearch} />
        {searchResultsLength > 0 && (
          <NavBar users={users} files={files} chats={chats} lists={lists} />
        )}
      </section>
    </main>
  );
}

export default App;
