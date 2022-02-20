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
import { Gear } from "react-bootstrap-icons";
import TabPaneData from "../TabPaneData/TabPaneData";
import { ALL, FILES, PEOPlE, CHATS, LISTS, TABS } from "../../constants/search";

import "./NavBar.scss";

function NavBar({ users, files, chats, lists, searchValue, loading }) {
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
        <Dropdown
          key="settings"
          className="settings"
          isOpen={settingsDropdownOpen}
          nav
          toggle={() => {}}
        >
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
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={visible}
                      readOnly
                    />
                  </div>
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </Nav>
      <TabContent activeTab={activeTab}>
        {visibleTabs.map(({ name }) => (
          <TabPane tabId={name} key={name}>
            <TabPaneData
              tab={name}
              users={users}
              files={files}
              chats={chats}
              lists={lists}
              searchValue={searchValue}
              loading={loading}
            />
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
}

export default NavBar;
