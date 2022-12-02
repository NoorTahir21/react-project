import React from 'react';
import {NavLink} from 'react-router-dom';
import home from '../src/images/home.jpg';
const Common=(props)=>{
	return(
		<>
		<section id="header" className="d-flex align-items-center">
		<div className="container-fluid nav_bg">
		<div className="row">
		<div className="col-10 mx-auto">
		<div className="row">
			<div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
			<h1>{props.name}<strong className="brand-name"> Portech</strong></h1>
			<h4 className="my-3" style={{color:'#777',fontSize:'24px'}}>We are the team of talented developers making websites.</h4>
			<div className="mt-5">
			<NavLink to={props.btnlink} className="btn-get-started">{props.btname}</NavLink>
			</div>
			</div>
			<div className="col-lg-6 order-1 order-lg-2 header-img animated">
			<img src={props.imgsrc} alt="pic"/>
			</div>
		</div>
		</div>
		</div>
		</div>
		</section>
		</>
		);
}
export default Common;