"use client";
// Route: /dashboard/user (Overview)
// এখানে দোকানের quick summary দেখানো হয়: আজকের sales, total product, low stock, due amount

import React, { useEffect, useState } from "react";
import { FiDollarSign, FiBox, FiAlertTriangle, FiUsers } from "react-icons/fi";

const StatCard = ({ icon, label, value, bg }) => (
  <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5 flex items-center gap-4">
    <div
      className={`w-11 h-11 rounded-lg flex items-center justify-center text-white ${bg}`}
    >
      {icon}
    </div>
    <div>
      <p className="text-xs text-black/50">{label}</p>
      <p className="text-xl font-semibold text-black/80">{value}</p>
    </div>
  </div>
);

const OverviewPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // API route: GET /api/user/overview
  //   const fetchStats = async () => {
  //     try {
  //       const res = await fetch("/api/user/overview");
  //       const data = await res.json();
  //       setStats(data);
  //     } catch (err) {
  //       console.error("Overview load failed:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchStats();
  // }, []);

  // if (loading) return <p className="p-6 text-sm text-black/50">Loading...</p>;

  return (
    <div className="p-3 space-y-6">
      <h1 className="text-xl font-semibold text-black/80">Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<FiDollarSign />}
          label="Today's Sales"
          value={`৳ ${stats?.todaySales ?? 0}`}
          bg="bg-green-500"
        />
        <StatCard
          icon={<FiBox />}
          label="Total Products"
          value={stats?.totalProducts ?? 0}
          bg="bg-blue-500"
        />
        <StatCard
          icon={<FiAlertTriangle />}
          label="Low Stock Items"
          value={stats?.lowStockCount ?? 0}
          bg="bg-amber-500"
        />
        <StatCard
          icon={<FiUsers />}
          label="Total Customers"
          value={stats?.totalCustomers ?? 0}
          bg="bg-purple-500"
        />
      </div>

      {/* এখানে পরে একটা Recent Sales table বা Sales Chart যোগ করা যাবে */}
    </div>
  );
};

export default OverviewPage;
