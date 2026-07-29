import React from "react";
import { FaGlobe, FaShareAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-24 border-t border-gray-100 bg-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand Info */}
        <div className="col-span-1">
          <div className="flex justify-baseline pb-5">
            <Logo height={30} width={50} />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Empowering the next generation of retailers and businesses with
            intelligent tools.
          </p>
          <div className="flex gap-4">
            <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-indigo-600 transition-colors">
              <FaGlobe />
            </button>
            <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-indigo-600 transition-colors">
              <FaShareAlt />
            </button>
            <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-indigo-600 transition-colors">
              <FaEnvelope />
            </button>
          </div>
        </div>

        {/* Footer Links - Using groups from Screenshot 225906 */}
        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
            Product
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Hardware
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
            Solutions
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Retail
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Restaurants
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Pharmacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Inventory Only
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
            Support
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                API Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                System Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 gap-4">
        <p className="text-xs text-gray-400 font-medium">
          © 2026 Nexus POS & Inventory. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-400 font-semibold uppercase tracking-tighter">
          <a href="#" className="hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-900">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-900">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
