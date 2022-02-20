import React from "react";
import List from "../List/List";
import { ALL, FILES, PEOPlE, CHATS, LISTS } from "../../constants/search";

const TabPaneData = ({
  tab,
  users,
  files,
  chats,
  lists,
  searchValue,
  loading
}) => {
  let list;
  switch (tab) {
    case ALL:
      list = [...users, ...files];
      break;
    case PEOPlE:
      list = users;
      break;
    case FILES:
      list = files;
      break;
    case CHATS:
      list = chats;
      break;
    case LISTS:
      list = lists;
      break;
    default:
      list = [];
  }
  if (!list.length && !loading) {
    return <span>No match found.</span>;
  }
  return <List list={list} searchValue={searchValue} loading={loading} />;
};

export default TabPaneData;
