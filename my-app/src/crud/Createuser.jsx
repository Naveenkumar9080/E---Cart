import React, { useState } from 'react';
import axios from 'axios';
// import useHistory from "react-router-dom";


export default function CreateUser() {
    
    // let history = useHistory();
    
    // [var , setVar] = useState ('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [register,setRegister]= useState('');
    
    

    const postData = (e) => {
        e.preventDefault()
    //    var http = https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData
        axios.post(`http://localhost:8000/api/users/create`, {
            name,
            email,
            address
        }).then( result => console.log(result) )
      .catch(err =>console.log(err))

      function count() {
        setRegister (document.getElementById("register").innerHTML =  " successfuly registered user details !" ) 
        }
   
         setTimeout( count , 2000)
        
      
    }
    
    return (
        <div className='container p-3 te'>
              <h1 className='bg-warning p-2'> Create User Page</h1>
            <div className="card p-2">
      
            <form className="create-form">
                <div>
                    <label>Enter your name</label>
                    <input className='mx-4' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                </div>
                <br></br>
                <div>
                    <label>Enter your email</label>
                    <input className='mx-4' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br></br>
                <div>
                <label>Enter your address</label>
                    <input className='mx-2' placeholder='Enter email' onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <br></br>
                <input className='btn btn-primary ' onClick={postData} type='button' value='Register' ></input>
                <br />
                <p className='bg-bg-sucess' id='register'></p>
            </form>
            </div>
<br></br>
<hr></hr>
            <button className="btn btn-primary " style={{border:"solid"}}><a href='read'>Read</a></button>
        </div>
    )
}