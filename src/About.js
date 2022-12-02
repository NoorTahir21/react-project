import React from 'react';
import {NavLink} from 'react-router-dom';
import about from '../src/images/about.png';
import Common from './Common';
const About=()=>{

	return(
		<>
		<Common name="Welcome to About Page" btnlink="/contact" btname="Contact Now" imgsrc={about} />
		</>
		);
}
export default About