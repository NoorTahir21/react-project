import React,{useState} from 'react';
const Contact=()=>{
	const [data,setData]=useState({
		fullname:'',
		phone:'',
		email:'',
		message:'',
	});
	const inputEvent=(event)=>{
		const {name,value}=event.target;
		setData((preval)=>{
			return{
				...preval,
				[name]:value,
			}
		})
		// console.log(event.target.value);
		}
	const formSubmit=(event)=>{
		event.preventDefault();
		alert(`${data.fullname}`);
	}
	return(
		<>
		<div className="my-5">
		<h1 className="text-center">Contact Us</h1>
		</div>
		<div className="container contact_div">
		<div className="row">
		<div className="col-md-6 col-10 mx-auto">
		<form onSubmit={formSubmit}>
		<div className="mb-3">
		    <label for="exampleInputName1" className="form-label">Enter your Name</label>
		    <input type="text" name="fullname" value={data.fullname} onChange={inputEvent} className="form-control" id="exampleInputName1" aria-describedby="name" required/>
		    <div id="name" className="form-text"></div>
		  </div>
		   <div className="mb-3">
		    <label for="exampleInputPhone1" className="form-label">Phone</label>
		    <input type="number" name="phone" value={data.phone} onChange={inputEvent} className="form-control" id="exampleInputPhone1" placeholder="Enter mobile number" required/>
		  </div>
		<div className="mb-3">
		    <label for="exampleInputEmail1" className="form-label">Email address</label>
		    <input type="email" name="email" value={data.email} onChange={inputEvent} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
		    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
		  </div>
		  <div className="mb-3">
		    <label for="exampleInputPassword1" class="form-label">Password</label>
		    <input type="password" className="form-control" id="exampleInputPassword1" required />
		  </div>
		  <div className="mb-3">
		  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
		  <textarea name="message" value={data.message} onChange={inputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message" required></textarea>
		</div>
		<div className="col-12">
		   <button type="submit" className="btn btn-outline-primary">Submit</button>
		   </div>
		</form>
		</div>
		</div>
		</div>
		</>
		);
}
export default Contact;