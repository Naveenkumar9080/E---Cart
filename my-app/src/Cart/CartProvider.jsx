import React , {createContext,useState, useContext, useEffect} from 'react';

//create a context for the cart
 const CartContext = createContext();
 
 //provider component that wraps your app and provides the cart context 
 export const CartProvider = ({children})=>{
    const [cart,setCart]=useState([]);
    
 //function to add an item to the cart
 const addtoCart=(item)=>{
    setCart((curreCart)=>[...curreCart,item]);
 };

 //function to remove an item from the cart
 const removeFromCart = (item)=>{
    setCart((currentCart)=>currentCart.filter((cartItem) => cartItem.id !==item.id));
 };

 //calculate  the total price of the cart
 const totalPrice = cart.reduce((total,item)=>total+item.price,0);

 //effect to log the total price when  cart changes
 useEffect(()=> {
    console.log(`Total Price: $${totalPrice}`);

 },[cart]);

 return (
    <CartContext.Provider value={{cart, addtoCart,removeFromCart,totalPrice}}>
        {children}
        </CartContext.Provider>
 );
};

//custom hook to use the cart context
export const useCart =() => {
    return useContext(CartContext);
};