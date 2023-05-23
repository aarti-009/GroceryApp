import { Container } from 'reactstrap';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Menus from './Components/Menus';
import UpdateCourse from './Components/UpdateGrocery';
import AddGrocery from './Components/AddGrocery';
import AllGrocery from './Components/AllGrocery';
import Contact from './Components/ContactUs';
import About from './Components/AboutUs';

function App() {
  /*const btnHandle=()=>{
    toast.success("done",{ position : "top-center",});
  };*/
  return (
    <div >
      <ToastContainer/>
        <Header/>
         <Container>
            <div className="row ">
              <div className="col-4 col-md-4"><Menus/></div>
              <div className="col-8 col-md-8">
                <Router>
                  <Routes>
                    <Route path="/" element={<Home/>}exact/>
                    <Route path="/add-grocery" element={<AddGrocery/>}exact/>
                    <Route path="/view-grocery" element={<AllGrocery/>}exact/>
                    <Route path="/update-grocery" element={<UpdateCourse/>}exact/>
                    <Route path="/about-us" element={<About/>}exact/>
                    <Route path="/contact-us" element={<Contact/>}exact/>


                  </Routes>
                </Router>
              </div>

            </div>
          </Container>

    </div>
  );
}

export default App;
