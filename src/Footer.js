import React from 'react';
import {NavLink} from 'react-router-dom';
const Footer=()=>{
  const curr=new Date();
  const curryear=curr.getFullYear();
	return(
		<div class="container-fluid mt-5">

  <footer class="bg-dark text-center text-white">
  <div class="container-fluid p-4 pb-0">
    <section class="mb-4">
      <NavLink
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor:'#3b5998'}}
        to="#!"
        role="button"
        ><i class="fa fa-facebook-f"></i
      ></NavLink>
      <NavLink
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor:"#55acee"}}
        to="#!"
        role="button"
        ><i class="fa fa-twitter"></i
      ></NavLink>
      <NavLink
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: '#dd4b39'}}
        to="#!"
        role="button"
        ><i class="fa fa-google"></i
      ></NavLink>
      <NavLink
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: '#ac2bac'}}
        to="#!"
        role="button"
        ><i class="fa fa-instagram"></i
      ></NavLink>
      <NavLink
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor: '#0082ca'}}
        to="#!"
        role="button"
        ><i class="fa fa-linkedin"></i
      ></NavLink>
      <NavLink
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor:"#333333"}}
        to="#!"
        role="button"
        ><i class="fa fa-github"></i
      ></NavLink>
    </section>

  </div>
 
  <div class="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
    © {curryear} Copyright:
    <NavLink class="text-white" to="https://mdbootstrap.com/" style={{textDecoration:'none'}} >MDBootstrap.com</NavLink>
  </div>
</footer>
  
</div>
		);
}
export default Footer;