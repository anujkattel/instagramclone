import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import { FaBars, FaCompass, FaFacebookMessenger, FaHome, FaSearch, FaUserAlt } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
function Leftsidebar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div className="left-sidebar">
        <div className="logo"></div>
        <div className="nav-links">
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/"><FaSearch /> Search</Link>
          <Link to="/"><FaCompass /> Explore</Link>
          <Link to="/"><SiYoutubeshorts /> Reels</Link>
          <Link to="/"><FaFacebookMessenger /> Messages</Link>
          <Link to="/"><IoMdNotifications /> Home</Link>
          <Link to="/"><IoIosAddCircleOutline /> Create</Link>
          <Link to="/"><FaUserAlt /> Profile</Link>
        </div>
        <div className="more" onClick={toggleDropdown}>
          <button ><FaBars /> More</button>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to='/'>settings</Link>
              <Link to='/'>Anylitics</Link>
              <Link to='/'>Saved</Link>
              <hr />
              <Link to='/' className='logout'>Logout</Link>

            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Leftsidebar