import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
	return(
		<>
		<div className="container-fluid nav_bg">
		<div className="row">
		<div className="col-10 mx-auto p-2">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">Portech</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/" activeClassName="menu_active" exact>Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/service" activeClassName="menu_active" exact>Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about" activeClassName="menu_active" exact>About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact" activeClassName="menu_active" exact>Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>
</div>
</div>
</>
);
}
export default Navbar;