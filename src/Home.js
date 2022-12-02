import React from 'react';
import {NavLink} from 'react-router-dom';
import home from '../src/images/home.jpg';
import Common from './Common';
const Home=()=>{
	return(
		<>
		<Common name="Grow your business with" btnlink="/service" btname="Get started" imgsrc={home} />
		</>
		);
};
export default Home;