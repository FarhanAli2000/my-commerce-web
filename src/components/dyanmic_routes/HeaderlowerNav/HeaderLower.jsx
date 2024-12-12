import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLower = () => {
  // Directly check window width on initial render
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767;

  if (isMobile) {
    return null; // Don't render the component on mobile
  }

  return (
    <div className="header-lower">
      <nav className="nav-links">
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Automotive
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Electronics
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Fashion Style
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Health Care
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Job Board
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Education
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Real Estate
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Travel
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Sport & Games
        </NavLink>
        <NavLink to="/listing-grid-sidebar" className="nav-link" activeClassName="active-link">
          Pet & Animals
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderLower;
