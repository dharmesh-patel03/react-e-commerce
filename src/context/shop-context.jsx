import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // --- NAYA FUNCTION START ---
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        // Har cart item ko check karo
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Agar quantity 0 se zyada hai, to Product list se price dhundo
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };
    // --- NAYA FUNCTION END ---

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // Context Value mein naya function add karna mat bhulna!

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    };
    const contextValue = { cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount };

    // Context value mein isse add karna mat bhulna!


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};