import React from "react";
import { debounce } from "lodash";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
import { users as usersData } from "./dummy-data/users";
import { files as filesData } from "./dummy-data/files";
import { PEOPlE, FILES } from "./components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// Note: Handling only users and files search only intentionally
// this behaviour can be easily extended for Chat and Lists search as well
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  const [chats, setChats] = React.useState([]);
  const [lists, setLists] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const searchResultsLength = users.length + files.length;

  const getFilteredListByName = ({ list, value, category }) => {
    const filteredList = [];
    list.forEach((item) => {
      const { name } = item;
      if (name.toLowerCase().includes(value.toLowerCase())) {
        filteredList.push({ ...item, category });
      }
    });
    return filteredList;
  };

  const debouncedSearch = debounce((value) => {
    setLoading(true);
    // mimics API call delay
    setTimeout(() => {
      const filteredUsers = getFilteredListByName({
        list: usersData,
        value,
        category: PEOPlE
      });
      const filteredFiles = getFilteredListByName({
        list: filesData,
        value,
        category: FILES
      });
      setUsers(filteredUsers);
      setFiles(filteredFiles);
      setChats([]);
      setLists([]);
      setLoading(false);
    }, 1500);
  }, 1000);

  const handleUserSearch = ({ target: { value } }) => {
    setSearchValue(value);
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
        <SearchBar
          searchValue={searchValue}
          loading={loading}
          handleUserSearch={handleUserSearch}
        />
        {searchResultsLength > 0 && (
          <NavBar
            searchValue={searchValue}
            users={users}
            files={files}
            chats={chats}
            lists={lists}
          />
        )}
      </section>
    </main>
  );
}

export default App;
