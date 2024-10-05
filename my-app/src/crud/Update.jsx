import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router';

export default function Update() {
    //let history = useHistory();

    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [register, setRegister] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setAddress(localStorage.getItem('address'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8000/api/users/update/${id}`, {
            name,
            email,
            address
        }).then(() => {
            //history.push('/read')
        })
        function count() {
            setRegister(document.getElementById("register").innerHTML = " successfuly registered user details !")
        }

        setTimeout(count, 2000)
    }

    return (
        <div className='card p-3'>
            <form className="create-form">
                <div>
                    <label> Name :</label>
                    <input className='mx-3' placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>email :</label>
                    <input className='mx-3' placeholder='Last Name' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>address :</label>
                    <input className='mx-3'  type='text' label='I agree to the Terms and Conditions' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <br />
                <br />
                <input className='btn btn-primary' type='button' onClick={updateAPIData} value='Update'></input>
                <br />
                <p className='bg-bg sucess' id='register'></p>
            </form>
        </div>
    )
}
