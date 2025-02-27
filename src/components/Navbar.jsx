import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-cyan-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Email Validator</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Email List Cleaning</Link>
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/" className="hover:underline">API</Link>
          <Link to="/" className="hover:underline">How it Works?</Link>
          <Link to="/" className="hover:underline">Pricing</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
