import React from "react";
import classNames from "classnames";
import {
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
import "./NavBar.css";
import List from "../List/List";

const tabItems = Object.freeze({
  ALL: "All",
  FILES: "Files",
  PEOPlE: "People",
  CHATS: "Chats",
  LISTS: "Lists"
});

const { ALL, FILES, PEOPlE, CHATS, LISTS } = tabItems;

const getTabPane = ({ tab, users, files }) => {
  switch (tab) {
    case ALL:
      return <List list={[...users, ...files]} />;
    case PEOPlE:
      return <List list={users} />;
    case FILES:
      return <List list={files} />;
    default:
      return `No ${tab}`;
  }
};

function NavBar({ users, files }) {
  const [activeTab, setActiveTab] = React.useState(ALL);
  const tabs = [ALL, FILES, PEOPlE, CHATS, LISTS];

  const handleTabClick = (tab) => () => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        {tabs.map((tab) => (
          <NavItem>
            <NavLink
              className={classNames(activeTab === tab && "active")}
              onClick={handleTabClick(tab)}
            >
              {tab}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {tabs.map((tab) => (
          <TabPane tabId={tab}>{getTabPane({ tab, users, files })}</TabPane>
        ))}
      </TabContent>
    </div>
  );
}

export default NavBar;
