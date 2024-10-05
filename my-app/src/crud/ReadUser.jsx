import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Readuser() {
    
    //Hook - useState()
    //var [variable name, function name to change the value of this variable] = useState(initial value);
    var [APIData, changeAPIData] = useState([]);
    
    //Hook - useEffect() - this hook is used to find whether the component loads / updates
    useEffect(() => {

        //axios is a adavanced React Library for performing API calls
        //axios is similar to fetch() method in JS
        
        //Promise
        axios.get(`http://localhost:8000/api/users/getAllUsers`)
            .then((n) => {
                console.log(n);
                changeAPIData(n.data);//Assign the API response to the variable
            })
            .catch((response) => console.log("Error:" + response))
        
        //getData();

    }, []);

    const setData = (data) => {
        //{id: "51", firstName: "Gomathi", lastName: "P", checkbox: true}
        let { _id, name, email, address } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('address', address)

        console.log(localStorage.getItem("First Name"));

        // sessionStorage.setItem('ID 1', id);
        // sessionStorage.setItem('First Name 1', firstName);
        // sessionStorage.setItem('Last Name 1', lastName);
        // sessionStorage.setItem('Checkbox Value 1', checkbox)

        // console.log(sessionStorage.getItem("First Name 1"));
    }

    const getData = () => {
        axios.get(`http://localhost:8000/api/users/getAllUsers`)
            .then((response) => {
                changeAPIData(response.data);
            })
    }

    const onDelete = (_id) => {
        //id = 51
        axios.delete(`http://localhost:8000/api/users/delete/${_id}`)
        .then(() => {
            getData();
        })
    }

    // const onDelete = (callback) => {
    //     //{id: "20", firstName: "Arun", lastName: "KUmar", checkbox: true}
    //     var userId = 5;
    //     axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${userId}`)
    //     .then(() => {
    //         callback();
    //     })
    // }

    return (
    <>
<br></br>
<h1>Read the Registration</h1>
<div className='p-3'>
        <table className='table p-4' border={'5px'} >            
            <tr className='bg-light '>
                <th>User Name</th>
                <th>User Email</th>
                <th>Account</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {APIData.map((user) => {
                return (
                    <tr className='bg-secondary'>
                        
                        <td className='p-3'>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        {/* <td>{user.checkbox === true ? 'New Acc ' : 'Old Acc'}</td> */}
                        <td >
                            <a className='bg-secondary' href='update'>
                                <input className='btn btn-light'  type='button' onClick={() => setData(user)} value='Update'></input>
                            </a>
                        </td>
                        <td>
                            <button className='btn outline-danger bg-secondary'  onClick={() => onDelete(user._id)} value='Delete'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                </svg></button>
                            {/* <Button onClick={() => onDelete(getData)}>Delete</Button> */}
                        </td>
                    </tr>
                )
            })}            
        </table>
        </div>
    </>
    )
}
