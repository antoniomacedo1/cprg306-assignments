"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-center w-full mt-8">
      <div className="flex items-center bg-white p-2 gap-2 rounded-lg">
        <div className="w-16 h-16 flex items-center justify-center border-2 border-black rounded-lg text-2xl font-semibold text-black">
          {quantity}
        </div>

        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="w-16 h-16 bg-blue-500 text-white rounded-lg text-3xl font-bold disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="w-16 h-16 bg-blue-500 text-white rounded-lg text-3xl font-bold disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}