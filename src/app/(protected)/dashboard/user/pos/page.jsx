"use client";

import React, { useEffect, useState } from "react";
import { FiSearch, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

const BillingPage = () => {
  const addToCart = (product) => {
    console.log(product);
  };

  const updateQuantity = (productId, delta) => {};

  const removeItem = (productId) => {
    console.log(productId);
  };

  // const totalAmount = cart.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0,
  // );

  const handleCheckout = async () => {};

  return (
    <div className="p-3 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Product select section */}
      <div className="lg:col-span-2 space-y-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
          <input
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            placeholder="Product খুঁজুন..."
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-black/10 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {/* {products.map((p) => (
            <button
              key={p._id}
              onClick={() => addToCart(p)}
              className="border border-black/10 rounded-lg p-3 text-left hover:bg-black/5 transition"
            >
              <p className="text-sm font-medium text-black/80">{p.name}</p>
              <p className="text-xs text-black/50">৳ {p.sellPrice}</p>
            </button>
          ))} */}
        </div>
      </div>

      {/* Cart section */}
      <div className="bg-white border border-black/10 rounded-xl p-4 flex flex-col h-fit sticky top-4">
        <h2 className="text-sm font-semibold text-black/80 mb-3">
          Current Bill
        </h2>

        <div className="space-y-2 flex-1 max-h-96 overflow-y-auto">
          {/* {cart.length === 0 && (
            <p className="text-xs text-black/40">কোনো item যোগ করা হয়নি</p>
          )}
          {cart.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between text-sm"
            >
              <div>
                <p className="text-black/80">{item.name}</p>
                <p className="text-xs text-black/50">
                  ৳ {item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => updateQuantity(item.productId, -1)}>
                  <FiMinus size={14} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.productId, 1)}>
                  <FiPlus size={14} />
                </button>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="text-red-500 ml-1"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            </div>
          ))} */}
        </div>

        <div className="border-t border-black/10 mt-3 pt-3">
          <div className="flex justify-between text-sm font-semibold text-black/80">
            <span>Total</span>
            {/* <span>৳ {totalAmount}</span> */}
          </div>
          <button
            // onClick={handleCheckout}
            // disabled={cart.length === 0}
            className="w-full mt-3 bg-blue-400 text-white py-2 rounded-lg text-sm disabled:opacity-40"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
