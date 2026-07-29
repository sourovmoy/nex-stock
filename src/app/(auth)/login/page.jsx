import LoginForm from "@/Components/LoginForm/LoginForm";
import Logo from "@/Components/Shared/Logo/Logo";
import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineDeveloperMode } from "react-icons/md";

const Login = async () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-gray-400">
      {/* left div */}
      <div
        style={{
          backgroundImage: "url('/Gradient.png'), url('/background.png')",
        }}
        className="bg-cover bg-center flex-1 relative p-5 md:p-10 flex flex-row md:flex-col  justify-between"
      >
        <div className="flex flex-col">
          <div className="flex justify-baseline">
            <Logo height={50} width={50} />
          </div>
          <div className="">
            <h1 className="text-wrap text-xl md:text-4xl">
              Master your <br /> inventory with <br /> precision.
            </h1>
          </div>
        </div>

        <div className="flex justify-baseline w-50 h-25 backdrop-blur-sm shadow-lg p-3 rounded-3xl ">
          <div>
            <p className="text-[10px]">
              NexStock POS transformed our warehouse efficiency by 40% within
              the first quarter.
              <br />
            </p>
            <span className="text-sm mt-4 flex items-center">
              <MdOutlineDeveloperMode /> Developed by Sourov Dash
            </span>
          </div>
        </div>
      </div>
      {/* Right div */}
      <div className="flex justify-center items-center flex-1 ">
        <div className="w-100 h-auto bg-gray-100 p-4 rounded-sm">
          <Link
            href={"/home"}
            className="flex items-center gap-2 text-gray-700"
          >
            <CiHome color="black" /> Go to home
          </Link>
          <h2 className="text-4xl font-bold text-center">Welcome Back</h2>
          <h2 className="text-gray-500 text-center">
            Log in to manage your inventory and transactions.
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
