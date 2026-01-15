import React, { useState } from 'react';
import { PRODUCTS } from '../products';
import { Product } from '../components/Product';

export const Shop = () => {
    const [data, setData] = useState(PRODUCTS);

    const filterResult = (catItem) => {
        if (catItem === 'All') {
            setData(PRODUCTS);
        } else {
            const result = PRODUCTS.filter((curData) => curData.category === catItem);
            setData(result);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <div className="text-center py-10">
                <h1 className="text-4xl font-extrabold text-gray-800">React E-Shop 🛒</h1>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 px-4">
                {['All', 'Mobile', 'Laptop', 'Camera', 'Accessories'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => filterResult(cat)}
                        className="px-6 py-2 border-2 border-gray-800 text-gray-800 font-bold rounded-full hover:bg-gray-900 hover:text-white transition duration-300 shadow-sm"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products Grid: Mobile pe 1 column, Tablet pe 2, Laptop pe 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto px-4">
                {data.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};