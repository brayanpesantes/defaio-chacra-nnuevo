import { NavItem } from "types/Nav-Item";
import {
  FaCompass,
  FaDatabase,
  FaHeart,
  FaHome,
  FaMusic,
  FaUserAlt,
} from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";

export const navItem: NavItem[] = [
  {
    type: "link",
    href: "/",
    icon: FaHome,
    label: "Home",
  },
  {
    type: "link",
    href: "/search",
    icon: RiSearchLine,
    label: "Search",
  },
  {
    type: "link",
    href: "/discover",
    icon: FaCompass,
    label: "Discover",
  },
  {
    type: "link",
    href: "/clips",
    icon: FaMusic,
    label: "Clips",
  },
  {
    type: "link",
    href: "/producers",
    icon: FaUserAlt,
    label: "Producers",
  },
  {
    type: "Header",
    label: "Libery",
  },
  {
    type: "link",
    href: "/recent",
    icon: GiBackwardTime,
    label: "Recent",
  },
  {
    type: "link",
    href: "/favorites",
    icon: FaHeart,
    label: "Favorites",
  },
  {
    type: "link",
    href: "/local",
    icon: FaDatabase,
    label: "Local",
  },
  {
    type: "Header",
    label: "General",
  },
  {
    type: "link",
    href: "/setting",
    icon: IoIosSettings,
    label: "Setting",
  },
  {
    type: "link",
    href: "/logout",
    icon: BsBoxArrowLeft,
    label: "Logout",
  },
];
