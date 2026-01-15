import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ShopContext } from '../context/shop-context';

export const Product = (props) => {
    const { id, productName, price, productImage, category } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        // Card Style: White bg, shadow, rounded corners, hover karne par thoda upar uthega
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 p-6 flex flex-col items-center w-[300px] border border-gray-200">

            <img
                src={productImage}
                alt={productName}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <div className="text-center">
                <p className="font-bold text-xl mb-1">{productName}</p>
                <p className="text-gray-500 text-sm mb-2">{category}</p>
                <p className="text-green-600 font-bold text-lg">${price}</p>
            </div>

            <button
                className="bg-black text-white px-6 cursor-pointer py-2 rounded-full mt-4 flex items-center gap-2 hover:bg-green-600 transition duration-300 font-medium active:bg-green-800"
                onClick={() => addToCart(id)}
            >
                Add To Cart <FaShoppingCart />
            </button>
        </div>
    );
};