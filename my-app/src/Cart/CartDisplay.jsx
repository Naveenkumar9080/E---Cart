
import { useCart } from "./CartProvider";
//cartDisplay component
export const CartDisplay = () => {
    const { cart, removeFromCart, totalPrice } = useCart();

    return (

        <div className='card text-center d-inline'>

            <hr></hr>

            <h2 className='bg-warning'>Your Cart </h2>
            {cart.map((item) => (
                <div>
                    <span>{item.name}-${item.price}</span>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            ))}
            <p> Total Price: ${totalPrice}</p>
            <br />
            <a href='Payment ' ><button className="bg-primary">Proceed to pay</button></a>
            
        </div>

    );
}