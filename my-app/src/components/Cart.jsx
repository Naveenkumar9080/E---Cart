import React from "react";
import { CartProvider } from "../Cart/CartProvider";
import { CartDisplay } from "../Cart/CartDisplay";
import ProductList from "../Cart/Productlist";

function Cart(){
    return (
        <div >
            <CartProvider>
            <ProductList></ProductList>
            <CartDisplay></CartDisplay>
            </CartProvider>
        </div>
    )
}
export default Cart