import React, { useState } from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button onClick={toggleSidebar} className="toggle-button">
          {isOpen ? "Close" : "Open"}
        </button>
        <div className="content">
          <h2>Side Bar </h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="newItem"> New Item</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
