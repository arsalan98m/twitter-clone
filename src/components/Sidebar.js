import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookMarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SidebarOption from "./SidebarOption";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../firebase";

function Sidebar() {
  const signOut = () => {
    console.log("sign out");
    auth.signOut();
  };
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption text="Home" Icon={HomeIcon} active />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmark" Icon={BookMarkBorderIcon} />
      <SidebarOption text="List" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      <SidebarOption text="More" Icon={MoreHorizonIcon} />

      <Button variant="outlined" className="sidebar__tweet">
        <p>Tweet</p>
        <AddCircleIcon />
      </Button>

      <Button variant="outlined" className="sidebar__tweet" onClick={signOut}>
        <p>Sign out</p>
        <LogoutIcon />
      </Button>
    </div>
  );
}

export default Sidebar;
