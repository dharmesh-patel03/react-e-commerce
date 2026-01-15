import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import { FaTrash,FaMinus, FaPlus } from 'react-icons/fa'; // <--- Icon Import karein

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    // Naya function 'deleteFromCart' nikalein
    const { cartItems, addToCart, removeFromCart, deleteFromCart } = useContext(ShopContext);

    return (
        <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-6 mb-6 w-full max-w-3xl border border-gray-100 relative">

            {/* Product Info Section */}
            <div className="flex items-center gap-6">
                <img src={productImage} alt={productName} className="w-24 h-24 object-cover rounded-lg" />

                <div className="text-left">
                    <p className="font-bold text-xl text-gray-800">{productName}</p>
                    <p className="text-gray-600 font-medium">Price: ${price}</p>
                </div>
            </div>

            {/* Controls Section (Quantity + Delete) */}
            <div className="flex items-center gap-6">

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => removeFromCart(id)}
                        className="w-8 h-8 flex items-center cursor-pointer justify-center font-bold hover:bg-gray-300 rounded-md transition"
                    > <FaMinus /> </button>

                    <input
                        value={cartItems[id]}
                        readOnly
                        className="w-8 text-center bg-transparent  font-bold outline-none"
                    />

                    <button
                        onClick={() => addToCart(id)}
                        className="w-8 h-8 flex items-center cursor-pointer justify-center font-bold hover:bg-gray-300 rounded-md transition"
                    > <FaPlus /> </button>
                </div>

                {/* DELETE BUTTON (Red Trash Icon) */}
                <button
                    onClick={() => deleteFromCart(id)}
                    className="text-red-500 hover:text-red-700 p-3 cursor-pointer hover:bg-red-100 p-2 rounded-full transition duration-300"
                    title="Remove Item"
                >
                    <FaTrash size={20} />
                </button>

            </div>
        </div>
    );
};