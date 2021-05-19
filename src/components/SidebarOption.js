import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon, active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2 className="sidebar__text">{text}</h2>
    </div>
  );
}

export default SidebarOption;
