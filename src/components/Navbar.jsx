import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStore } from 'react-icons/fa';
import { ShopContext } from '../context/shop-context'; // 1. Context import kiya

export const Navbar = () => {
    const { cartItems } = useContext(ShopContext); // 2. Data nikala

    // 3. Logic: Saare cart items ki quantity ka total count
    const totalCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="w-full h-20 bg-gray-900 flex justify-between items-center px-12 text-white shadow-lg sticky top-0 z-50">

            {/* Logo */}
            <div className="text-2xl font-bold">
                <Link to="/" className="flex items-center gap-2 hover:text-green-400 transition duration-300">
                    <FaStore /> React Shop
                </Link>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 text-xl font-semibold">
                <Link to="/" className="hover:text-green-400 transition duration-300"> Shop </Link>

                {/* Cart Icon Container (Relative taaki badge Absolute ho sake) */}
                <Link to="/cart" className="relative hover:text-green-400 transition duration-300">
                    <FaShoppingCart size={24} />

                    {/* Badge: Sirf tab dikhe jab count 0 se zyada ho */}
                    {totalCount > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-gray-900">
                            {totalCount}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};