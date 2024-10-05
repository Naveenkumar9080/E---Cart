import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import Home from './components/Home';
import Footer from './components/Footer';
import Payment from './Cart/Payment';
import Sucessfully from './Cart/Sucessfully';
import CreateUser from './crud/Createuser';
import ReadUser from './crud/ReadUser';
import Update from './crud/Update';




function App() {
  return (
    <div className='container' style={{ backgroundColor: "unset" }}>


      <Navbar></Navbar>

      <h1 className='container textalign-center'></h1>

      <br></br>
      {/* routing */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='Cart' element={<Cart />} />
            <Route path='Payment' element={<Payment />} />
            <Route path='Sucessfully' element={<Sucessfully />} />
            <Route path='create' element={<CreateUser />} />
            <Route path='read' element={<ReadUser/>}/>
            <Route path='update' element={<Update/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      {<Footer></Footer>}


    </div>


  );
}

export default App;
