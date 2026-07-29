"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result?.error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        router.push("/home");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center mt-2"
      >
        <div className="space-y-3">
          {/* Header Title */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Please enter your details to sign in
            </p>
          </div>
          {/* Form Fields */}
          <div className="space-y-4">
            {/* Email Field */}
            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm outline-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:bg-transparent dark:text-white placeholder:text-gray-400"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm outline-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:bg-transparent dark:text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-md">
              <p className="text-sm text-red-600 dark:text-red-400 text-center font-medium">
                {error}
              </p>
            </div>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
