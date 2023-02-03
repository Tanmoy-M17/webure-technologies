import React from "react";
import "./Styles/Nav.css";

const Navbar = () => {
  return (
    <div className="h-1/4 my-5">
      <div className="h-14 w-3/4 m-auto mb-60  flex justify-around items-center">
        <div>
          <p className="w-64 h-9 italic font-bold text-2xl text-red-400">Webure Technologies</p>
        </div>
        <div className="flex w-3/6 justify-between text-slate-400 ">
          <p>About Us</p>
          <p>Services</p>
          <p>Careers</p>
          <p>ROI Stories</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
        <div >
          <button className="w-36 h-14 border rounded-full text-black font-bold hover:text-green-600-400">Let's Talk</button>
        </div>
      </div>
      <div className="h-1/3 flex justify-around items-center">

        <div className="w-1/4 left1">
          <div className="flex items-center">
            <img src="verify.svg" alt="" />
            <p className="w-80 h-5 ml-5 text-sm text-orange-500">Best Business Platform - World Record 2021</p>
          </div>
          <p className="w-3/4 h-40 font-bold text-5xl tracking-wider mt-7 text-zinc-700">Reach Your Business Goals in Record Time</p>
          <p className="w-4/6 mt-6 h-28 text-slate-400 text-xl">
            Support small business and join the nationwide movement to encourage
            commercial support for the millions of minority owned businesses
            helping world economy.
          </p>
            <button className="w-52 h-16 mt-16 text-white vp4 hover:text-black">Get Started</button>
        </div>
        <div className="right1">
          <img className="" src="Group 2052.svg" alt="" /> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
