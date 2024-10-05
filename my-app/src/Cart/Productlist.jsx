import React from 'react';
import {useCart} from './CartProvider';



function ProductList() {
     const { addtoCart } = useCart();

    const products = [
        { id: 1, name: '14Pro max ', price: 93000, img: "https://th.bing.com/th/id/OIP.TWetGuyD2XNSJeXLiKyDKQHaHa?rs=1&pid=ImgDetMain" },

        { id: 2, name: ' Samsung', price: 74300, img: "https://th.bing.com/th/id/OIP.ZLiYyb9-Wp6TZpX_glIqUwAAAA?rs=1&pid=ImgDetMain" },

        { id: 3, name: 'Oppo', price: 6590, img: "https://th.bing.com/th/id/OIP.HDaFNt7vqUQ2Lk8rKWtgCQHaHg?rs=1&pid=ImgDetMain" },
    ]

    return (
        <div className='container'>
            <div className='d-flex'>
                {products.map((product) => (
                    <div key={product.id}>
                        <img src={product.img} style={{ height: "200px" }} className=''></img>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => addtoCart (product)}>Add To Cart</button>
                        <br />
                       

                    
                    </div>
                ))}
             </div>
        </div >

    )
}
export default ProductList;
