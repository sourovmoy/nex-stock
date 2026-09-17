import DashboardLayout from "@/Components/Dashboard/DashboardLayout";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

const Dashboard = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Dashboard;
