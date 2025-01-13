import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLower = () => {
  // Directly check window width on initial render
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767;

  if (isMobile) {
    return null; // Don't render the component on mobile
  }

  return (
    <div className="header-lower container">
      <nav className="nav-links" style={{ fontFamily: "VIP Rawy Regular" }}>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Automotive
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Electronics
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Fashion Style
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Health Care
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Job Board
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Education
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Real Estate
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Travel
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Sport & Games
        </NavLink>
        <NavLink
          to="/index"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Pet & Animals
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderLower;
