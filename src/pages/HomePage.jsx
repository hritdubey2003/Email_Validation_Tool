import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";


function Homepage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center text-center p-8 overflow-hidden">
        <motion.h1
          className="text-5xl font-bold text-blue-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Email Validator
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The industry-leading email validation tool trusted by professionals
          worldwide. Enhance your email marketing campaigns, reduce bounce
          rates, and improve deliverability.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Link
            to="/loading"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/pricing"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
          >
            View Pricing
          </Link>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          {[
            "Email List Cleaning",
            "Advanced Dashboard",
            "Seamless API Integration",
          ].map((title, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
              <p className="text-gray-600 mt-2">
                {title === "Email List Cleaning"
                  ? "Remove invalid, spam, and disposable emails with 99% accuracy."
                  : title === "Advanced Dashboard"
                  ? "Gain deep insights into your email lists with our AI-powered analytics."
                  : "Integrate our enterprise-grade API with your system for real-time validation."}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 max-w-5xl text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our cutting-edge technology ensures that your email lists remain
            clean and deliverable. Here’s why thousands of businesses trust us:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>
              <span className="text-blue-600 font-semibold">
                AI-Powered Accuracy:
              </span>{" "}
              99% accuracy in detecting invalid emails.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">
                Enterprise Security:
              </span>{" "}
              Your data is encrypted and securely stored.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">
                Real-Time Validation:
              </span>{" "}
              Validate emails in milliseconds.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">
                Bulk Verification:
              </span>{" "}
              Process thousands of emails within seconds.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">
                Seamless API Integration:
              </span>{" "}
              Plug & play with any platform.
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="mt-16 w-full bg-blue-600 text-white p-8 text-center rounded-lg shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold">Try Our Email Validator Today!</h2>
          <p className="text-lg mt-2">
            Join thousands of businesses optimizing their email marketing
            campaigns.
          </p>
          <Link
            to="/dashboard"
            className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg shadow-md hover:bg-gray-200 transition transform hover:scale-105"
          >
            Start Now
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
