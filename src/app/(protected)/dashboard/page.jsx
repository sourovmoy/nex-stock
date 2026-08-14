import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const role = session?.user?.role;

  if (role === "member") redirect("/dashboard/user");
  if (role === "admin") redirect("/dashboard/admin");
};

export default DashboardPage;
