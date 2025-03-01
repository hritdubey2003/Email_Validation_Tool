import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0/month",
      features: [
        "Validate up to 100 emails/month",
        "Basic email validation",
        "No API access",
        "Community support",
      ],
    },
    {
      name: "Pro (Coming Soon)",
      price: "TBA",
      features: [
        "Validate up to 10,000 emails/month",
        "Advanced email validation",
        "API access",
        "Real-time verification",
        "Priority email support",
      ],
    },
    {
      name: "Enterprise (Coming Soon)",
      price: "Custom Pricing",
      features: [
        "Unlimited email validation",
        "Priority support",
        "Custom integrations",
        "Dedicated account manager",
        "Bulk validation for large-scale operations",
      ],
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Pricing Plans</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
        At the moment, our email validation service is <strong>completely free</strong>. As we evolve and integrate more sophisticated features, we aim to offer more tailored solutions for businesses and professionals. Our premium plans will be designed to meet the needs of high-volume users, enterprises, and developers looking for seamless validation workflows. Stay updated for future announcements!
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-700">{plan.name}</h2>
            <p className="text-xl font-bold text-blue-600 mt-2">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">✅ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto text-center mt-10 text-gray-700">
        <h2 className="text-2xl font-semibold">Why Choose Our Service?</h2>
        <p className="mt-2">We prioritize accuracy, speed, and security in our email validation process. Whether you're an individual, a business, or an enterprise, our scalable solutions will help maintain clean and verified email lists, ensuring better deliverability and engagement rates.</p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Pricing;