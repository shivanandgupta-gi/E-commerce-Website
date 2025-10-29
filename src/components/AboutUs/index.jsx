import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
    const location=useLocation();
    useEffect(()=>{
        window.scroll(0,0);
    },[location])
  return (
    <section className="py-10 px-8 bg-white text-gray-800 leading-relaxed">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary text-center">About Us</h1>
        <p className="mb-3">
          Welcome to <strong>ShopZora</strong>, a next-generation e-commerce
          platform committed to redefining the online shopping experience.
        </p>
        <p className="mb-3">
          At ShopZora, our vision is to create a unified digital marketplace
          that combines innovation, trust, and convenience — empowering
          customers to discover quality products at fair prices from the comfort
          of their homes.
        </p>

         <h2 className="text-2xl font-semibold mt-5 mb-3 text-gray-800">
            What Makes Us Different
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>
                <span className="font-semibold text-gray-700">Curated Collections:</span> 
                {" "}We handpick verified products to guarantee authenticity and quality.
            </li>
            <li>
                <span className="font-semibold text-gray-900">Intelligent Filters:</span> 
                {" "}Find exactly what you need through precise filtering by category, price, and ratings.
            </li>
            <li>
                <span className="font-semibold text-gray-900">Secure Transactions:</span> 
                {" "}Our platform uses encrypted payment gateways for safe and instant checkout.
            </li>
            <li>
                <span className="font-semibold text-gray-900">Customer-Centric Policies:</span> 
                {" "}Hassle-free returns, transparent pricing, and 24/7 customer support.
            </li>
            <li>
                <span className="font-semibold text-gray-900">Sustainable Practices:</span> 
                {" "}From eco-friendly packaging to responsible logistics, we believe in building a greener tomorrow.
            </li>
            </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to connect millions of buyers and sellers through
          technology, transparency, and trust. We aim to deliver value at every
          step — from product discovery and purchase to delivery and after-sales
          service — ensuring a seamless and reliable customer journey.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>Integrity – We operate with honesty and accountability.</li>
          <li>Customer First – Every decision starts with the customer.</li>
          <li>Innovation – We embrace change and evolve constantly.</li>
          <li>Quality – We maintain the highest standards in all we do.</li>
          <li>Sustainability – We build responsibly for a better tomorrow.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          📧 Email: support@shopzora.com <br />
          📍 Location: Greater Noida, Uttar Pradesh, India
        </p>

        <p className="mt-10 text-primary font-medium">
          ✨ ShopZora - Shop Smart, Live Better.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
