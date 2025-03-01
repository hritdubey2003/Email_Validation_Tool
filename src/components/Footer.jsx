import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        
        <ul className="flex space-x-6 text-sm mt-4 md:mt-0">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/hritikdubey2003/" className="text-gray-400 hover:text-white"><FaInstagram /></a>
          <a href="https://x.com/HritikD22140148" className="text-gray-400 hover:text-white"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/hritik-dubey-601443238/" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
          <a href="https://github.com/hritdubey2003" className="text-gray-400 hover:text-white"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
