import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";


const Footer = () => {
  return (
    <div className="grid items-center justify-center grid-cols-5 gap-2 p-20 m-auto mb-1 rounded-xl footer bg-blueColor ">
      <div>
        <div className="logoDiv">
          <h1 className="pb-6 text-2xl text-white logo">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="pb-3 leading-7 text-white opacity-70 ">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>

      <div className="grid ">
        <span className="pb-6 text-lg font-semibold text-white divTitle ">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-10">About Us</li>
          <li className="text-white opacity-70 hover:opacity-10">Features</li>
          <li className="text-white opacity-70 hover:opacity-10">News</li>
          <li className="text-white opacity-70 hover:opacity-10">FAQ</li>
        </div>
      </div>

      <div className="grid ">
        <span className="pb-6 text-lg font-semibold text-white divTitle ">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-10">Account</li>
          <li className="text-white opacity-70 hover:opacity-10">Support Center</li>
          <li className="text-white opacity-70 hover:opacity-10">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-10">Contact Us</li>
        </div>
      </div>

      <div className="grid ">
        <span className="pb-6 text-lg font-semibold text-white divTitle ">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-70 hover:opacity-10">Events</li>
          <li className="text-white opacity-70 hover:opacity-10">Promo</li>
          <li className="text-white opacity-70 hover:opacity-10">Req Promo</li>
          <li className="text-white opacity-70 hover:opacity-10">Careers</li>
        </div>
      </div>

      <div className="grid ">
        <span className="pb-6 text-lg font-semibold text-white divTitle ">
          Contact
        </span>
        <div className>
          <small className="text-base text-white">eriztaap@gmail.com</small>
          <div className="flex gap-4 py-4 cursor-pointer icons">
            <AiFillInstagram className="p-1 bg-white rounded-full h-9 w-9 text-blueColor" />
            <BsFacebook className="p-1 bg-white rounded-full h-9 w-9 text-blueColor" />
            <AiFillTwitterCircle className="p-1 bg-white rounded-full h-9 w-9 text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
