import React from "react";
import "./Styles/Choose.css";

const ChooseUs = () => {
  return (
    <div className="flex justify-around  h-1/2 bg-blue-700">
      <div className="w-1/2 ml-40">
        <img src="Group 2070.svg" alt="" />
      </div>
      <div className="content">
        <p className="w-34 text-red-600 h-5 font-normal text-base">WHY CHOOSE US</p>
        <p className="w-4/6 text-4xl h-32 text-slate-50 mt-3 font_family">Take on any Challenge of the Digital World</p>
        <div>
          <div className="flex">
            <img className="mr-5" src="tik.svg" alt="" />
            <p>Corporate Financial Advisory</p>
          </div>
          <div className="flex my-0.5">
            <img className="mr-5" src="tik.svg" alt="" />
            <p>Development of Financial Models</p>
          </div>
          <div className="flex my-1">
            <img className="mr-5" src="tik.svg" alt="" />
            <p>Deal Structuring</p>
          </div>
        </div>
        <div className="flex items-center mt-24">
          <div className="input">
           <p className="text-white font-bold">Enter Your Email Id</p>
          </div>
          <div>
            <button className="w-52 h-16  text-white vp4 hover:text-black">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
