import React from 'react';

export const Checkout = () => {
    return (
        // Tailwind Classes: min-h-screen (Full height), bg-gray-100 (Background color)
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

            {/* Card Container: white bg, shadow, rounded corners */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Checkout</h2>

                <form className="space-y-4">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                        <textarea
                            rows="3"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="123, Main Street..."
                        ></textarea>
                    </div>

                    {/* Pay Button */}
                    <button
                        type="button"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150"
                        onClick={() => alert("Payment Successful! (Fake)")}
                    >
                        Pay Now
                    </button>

                </form>
            </div>
        </div>
    );
};