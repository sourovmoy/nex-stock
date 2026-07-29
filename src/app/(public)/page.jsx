import { redirect } from "next/navigation";
import React from "react";

const RootPage = () => {
  redirect("/home");
};

export default RootPage;
