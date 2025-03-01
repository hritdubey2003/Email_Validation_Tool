import React from "react";
import { Link } from "react-router-dom";
import Dropdown, { DropdownItem } from "./Dropdown";
import {
  Home,
  Mail,
  LogOut
} from "react-feather"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-cyan-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Email Validator</h1>
        <div className="space-x-4 mx-7">
          <Dropdown trigger={<button>Menu</button>}>
            <DropdownItem><img 
            src="https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
            alt=""
            className="w-12 rounded-full"
            /><div className="py-2">
              <p className="font-medium">Your Name</p>
              <a href="" className="text-sm font-medium text-gray-500">
                yourname@gmail.com
              </a>
            </div></DropdownItem>
            <DropdownItem><Home onClick={() => navigate("/")} size={20} />Home</DropdownItem>
            <DropdownItem><Mail onClick={() => navigate("/dashboard")} size={20} /> Email Validator</DropdownItem>
            <DropdownItem><LogOut size={20} onClick={() => navigate("/")} /> Log Out</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
