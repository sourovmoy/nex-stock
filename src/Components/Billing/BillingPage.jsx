"use client";

import React, { useEffect, useMemo, useState, useTransition } from "react";
import { FiSearch, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { createSale } from "@/lib/billing"; // ⚠️ adjust to your actual checkout API

const CART_STORAGE_KEY = "billing-cart";

const loadInitialCart = (products) => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const savedCart = JSON.parse(raw);

    return savedCart
      .map((item) => {
        const currentProduct = products.find((p) => p._id === item.productId);
        if (!currentProduct || currentProduct.stockQuantity <= 0) return null;
        return {
          ...item,
          price: currentProduct.sellPrice,
          stockQuantity: currentProduct.stockQuantity,
          quantity: Math.min(item.quantity, currentProduct.stockQuantity),
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.error("Failed to load saved cart:", error);
    return [];
  }
};

const BillingPage = ({ initialProducts }) => {
  const [products] = useState(initialProducts || []);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(() =>
    loadInitialCart(initialProducts || []),
  );
  const [isCheckingOut, startCheckout] = useTransition();

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cart]);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return products;
    return products.filter((p) => p.name.toLowerCase().includes(term));
  }, [products, search]);

  const addToCart = (product) => {
    if (product.stockQuantity <= 0) {
      Swal.fire({ title: "Stock নেই", icon: "warning" });
      return;
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product._id);

      if (existing) {
        if (existing.quantity >= product.stockQuantity) {
          Swal.fire({
            title: "Available stock এর বেশি যোগ করা যাবে না",
            icon: "warning",
          });
          return prev;
        }
        return prev.map((item) =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prev,
        {
          productId: product._id,
          category: product.category,
          name: product.name,
          price: product.sellPrice,
          quantity: 1,
          stockQuantity: product.stockQuantity,
        },
      ];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.productId !== productId) return item;

          const nextQuantity = item.quantity + delta;

          if (nextQuantity > item.stockQuantity) {
            Swal.fire({
              title: "Available stock এর বেশি যোগ করা যাবে না",
              icon: "warning",
            });
            return item;
          }

          return { ...item, quantity: nextQuantity };
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    if (cart.length === 0) return;

    startCheckout(async () => {
      try {
        const res = await createSale({
          items: cart.map((item) => ({
            productId: item.productId,
            category: item.category,
            quantity: item.quantity,
            price: item.price,
          })),
          totalAmount,
        });

        if (res?.success) {
          await Swal.fire({
            title: "Sale সম্পন্ন হয়েছে!",
            text: `৳ ${totalAmount} এর বিল তৈরি হয়েছে`,
            icon: "success",
          });
          setCart([]);
          localStorage.removeItem(CART_STORAGE_KEY);
        } else {
          Swal.fire({
            title: "Checkout ব্যর্থ হয়েছে",
            text: res?.message || "আবার চেষ্টা করুন",
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Checkout ব্যর্থ হয়েছে",
          text: error?.message,
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="p-3 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Product select section */}
      <div className="lg:col-span-2 space-y-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Product খুঁজুন..."
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-black/10 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-sm text-black/40 text-center py-6">
              কোনো product পাওয়া যায়নি
            </p>
          )}

          {filteredProducts.map((p) => (
            <button
              key={p._id}
              type="button"
              onClick={() => addToCart(p)}
              disabled={p.stockQuantity <= 0}
              className="border border-black/10 rounded-lg p-3 text-left hover:bg-black/5 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <p className="text-sm font-medium text-black/80">{p.name}</p>
              <p className="text-xs text-black/50">৳ {p.sellPrice}</p>
              {p.stockQuantity <= 0 && (
                <p className="text-[10px] text-red-500 mt-1">Out of stock</p>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Cart section */}
      <div className="bg-white border border-black/10 rounded-xl p-4 flex flex-col h-fit sticky top-4">
        <h2 className="text-sm font-semibold text-black/80 mb-3">
          Current Bill
        </h2>

        <div className="space-y-2 flex-1 max-h-96 overflow-y-auto">
          {cart.length === 0 && (
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
                <button
                  type="button"
                  onClick={() => updateQuantity(item.productId, -1)}
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  <FiMinus size={14} />
                </button>
                <span className="w-4 text-center">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.productId, 1)}
                  aria-label={`Increase ${item.name} quantity`}
                >
                  <FiPlus size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => removeItem(item.productId)}
                  aria-label={`Remove ${item.name}`}
                  className="text-red-500 ml-1"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-black/10 mt-3 pt-3">
          <div className="flex justify-between text-sm font-semibold text-black/80">
            <span>Total</span>
            <span>৳ {totalAmount}</span>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={cart.length === 0 || isCheckingOut}
            className="w-full mt-3 bg-blue-400 text-white py-2 rounded-lg text-sm disabled:opacity-40"
          >
            {isCheckingOut ? "Processing..." : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
