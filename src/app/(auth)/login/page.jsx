import LoginForm from "@/Components/LoginForm/LoginForm";
import Logo from "@/Components/Shared/Logo/Logo";
import React from "react";
import { GrUserWorker } from "react-icons/gr";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineStorefront,
} from "react-icons/md";

const Login = () => {
  const roles = [
    { icon: <MdOutlineStorefront size={24} />, name: "Vendor" },
    { icon: <MdOutlineAdminPanelSettings size={24} />, name: "Admin" },
    { icon: <GrUserWorker size={24} />, name: "Staff" },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* left div */}
      <div
        style={{
          backgroundImage: "url('/Gradient.jpg'), url('/background.png')",
        }}
        className="bg-cover bg-center flex-1 relative p-2 md:p-10 flex flex-row md:flex-col  justify-between"
      >
        <div className="flex justify-baseline">
          <Logo height={50} width={50} />
        </div>
        <div className="flex justify-baseline w-50 h-25 backdrop-blur-sm shadow-md p-2 rounded-2xl ">
          <p className="text-[10px] text-white">
            NexStock POS transformed our warehouse efficiency by 40% within the
            first quarter.
            <br />
            <span className="text-sm">Developed by Sourov Dash</span>
          </p>
        </div>
      </div>
      {/* Right div */}
      <div className="flex justify-center items-center flex-1 ">
        <div className="w-100 h-140 bg-gray-100 p-4 rounded-sm">
          <h2 className="text-4xl font-bold">Welcome Back</h2>
          <h2 className="text-gray-500">
            Log in to manage your inventory and transactions.
          </h2>
          <div className="mt-6">
            <h2 className="text-gray-700 text-sm pb-2">SELECT ACCESS ROLE</h2>
            <div className=" flex justify-around items-center bg-gray-300 p-1 rounded-xl">
              {roles.map((r, index) => (
                <button
                  key={index}
                  className="flex flex-col justify-center items-center hover:bg-[#4f46e5] hover:text-white flex-1 rounded-lg p-3 transition-all duration-200"
                >
                  <span className="mb-1">{r.icon}</span>
                  <span className="text-[12px] font-medium">{r.name}</span>
                </button>
              ))}
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
