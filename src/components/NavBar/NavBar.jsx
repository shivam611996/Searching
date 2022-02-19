import React from "react";
import classNames from "classnames";
import {
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";
import {
  Gear,
  Paperclip,
  Person,
  Chat,
  List as ListIcon
} from "react-bootstrap-icons";
import List from "../List/List";

import "./NavBar.scss";

const tabItems = Object.freeze({
  ALL: "All",
  FILES: "Files",
  PEOPlE: "People",
  CHATS: "Chats",
  LISTS: "Lists"
});

const { ALL, FILES, PEOPlE, CHATS, LISTS } = tabItems;

const getTabPane = ({ tab, users, files, chats, lists }) => {
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
  if (list.length) {
    return <List list={list} />;
  }
  return <span>No match found.</span>;
};

const TABS = [
  { name: ALL, Icon: null, visible: true },
  { name: FILES, Icon: Paperclip, visible: true },
  { name: PEOPlE, Icon: Person, visible: true },
  { name: CHATS, Icon: Chat, visible: false },
  { name: LISTS, Icon: ListIcon, visible: false }
];

function NavBar({ users, files, chats, lists }) {
  const [activeTab, setActiveTab] = React.useState(ALL);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = React.useState(false);
  const [tabs, setTabs] = React.useState(TABS);
  const visibleTabs = tabs.filter(({ visible }) => visible);

  const handleTabClick = (tab) => () => {
    setActiveTab(tab);
  };

  const toggleTabVisibility = (name) => () => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.name === name ? { ...tab, visible: !tab.visible } : tab
      )
    );
  };

  const getCount = (tab) => {
    switch (tab) {
      case ALL:
        return users.length + files.length + chats.length + lists.length;
      case PEOPlE:
        return users.length;
      case FILES:
        return files.length;
      case CHATS:
        return chats.length;
      case LISTS:
        return lists.length;
      default:
        return 0;
    }
  };

  return (
    <div className="navbar-container">
      <Nav tabs>
        {visibleTabs.map(({ name, Icon }) => (
          <NavItem key={name}>
            <NavLink
              className={classNames(activeTab === name && "active")}
              onClick={handleTabClick(name)}
            >
              {Icon && <Icon />} {name} <Badge>{getCount(name)}</Badge>
            </NavLink>
          </NavItem>
        ))}

        <NavItem key="settings" className="settings">
          <Dropdown isOpen={settingsDropdownOpen} nav toggle={() => {}}>
            <DropdownToggle
              nav
              onClick={() => setSettingsDropdownOpen(!settingsDropdownOpen)}
            >
              <Gear />
            </DropdownToggle>
            <DropdownMenu>
              {tabs.slice(1).map(({ name, Icon, visible }) => (
                <DropdownItem key={name} onClick={toggleTabVisibility(name)}>
                  <div className="dropdown-tab-item">
                    <div>
                      <Icon /> {name}{" "}
                    </div>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={visible}
                      />
                    </div>
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        {visibleTabs.map(({ name }) => (
          <TabPane tabId={name}>
            {getTabPane({ tab: name, users, files })}
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
}

export default NavBar;
