import React, { useState } from "./CartProvider"

function Payment() {



    return (
        <div className="container textalign-center "style={{backgroundColor :"blue"}}>
            <h1 className="container text-center">PAYMENT DETAILS</h1>
            <label>Person Name :</label>
            <br />
            <input type="Name" placeholder="Naveenkumar"  required/>
            <br />
            <label>Enter Your Card Number :</label>
            <br />
            <input type="Number" placeholder="000 000 000 "required />
            <br />
            <label>Expiry :</label>
            <br />

            <input type="" placeholder="MM/YYYY" required/>
            <label style={{marginLeft:"15px"}}>CVV/CVC:</label>
            <input type="text" placeholder="0000"required />
            <br />
            <br />
            <a href="./Sucessfully"><button style={{border:"solid"}}>$PAY</button></a>


        </div>
    )

}
export default Payment;