import React,{useState} from "react";

function Sucessfully (){

    return(
        <div>
            <h1 className="bg-danger text-white text-center p-3">PAYMENT SUCESSFULLY</h1>
            <img src="https://craftshades.com/wp-content/uploads/2019/01/payment_successful.gif" style={{imgposition:"fixed"}}></img>
            <h4 className="bg-secondary text-center p-5" >Congralations Your Payment Sucessfull</h4>
            <h5 className="bg-primary text-center p-5">Thankyou!!!</h5>
        </div>
    )
}
export default Sucessfully;
