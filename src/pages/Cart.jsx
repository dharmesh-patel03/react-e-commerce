import React, { useContext } from 'react';
import { PRODUCTS } from '../products';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">

            <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart Items</h1>

            <div className="w-full flex flex-col items-center">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="mt-8 text-center bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                    <p className="text-2xl font-bold text-gray-800 mb-6"> Subtotal: ${totalAmount} </p>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => navigate("/")}
                            className="w-full py-3 bg-gray-800 cursor-pointer text-white rounded-lg font-bold hover:bg-gray-900 transition"
                        >
                            Continue Shopping
                        </button>

                        <button
                            onClick={() => navigate("/checkout")}
                            className="w-full py-3 bg-green-600 text-white cursor-pointer rounded-lg font-bold hover:bg-green-700 transition"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center mt-20">
                    <h2 className="text-2xl font-bold text-red-500 mb-4"> Your Cart is Empty </h2>
                    <button
                        onClick={() => navigate("/")}
                        className="py-2 px-6 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                        Shop Now
                    </button>
                </div>
            )}
        </div>
    );
};