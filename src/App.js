import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch,Route,Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
const App=()=>{
  return(
    <>
      <Navbar/>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/about" component={About} exact/>
    <Route path="/contact" component={Contact} exact/>
    <Route path="/service" component={Services} exact/>
    <Redirect to="/" />
    </Switch>
    <Footer/>
    </>
    );
}
export default App;