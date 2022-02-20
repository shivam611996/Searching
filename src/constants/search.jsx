import {
  Paperclip,
  Person,
  Chat,
  List as ListIcon
} from "react-bootstrap-icons";

const tabItems = Object.freeze({
  ALL: "All",
  FILES: "Files",
  PEOPlE: "People",
  CHATS: "Chats",
  LISTS: "Lists"
});

export const { ALL, FILES, PEOPlE, CHATS, LISTS } = tabItems;

export const TABS = [
  { name: ALL, Icon: null, visible: true },
  { name: FILES, Icon: Paperclip, visible: true },
  { name: PEOPlE, Icon: Person, visible: true },
  { name: CHATS, Icon: Chat, visible: false },
  { name: LISTS, Icon: ListIcon, visible: false }
];
