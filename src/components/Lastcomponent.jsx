import React from "react";

export const Lastcomponent = () => {
  return (
    <div className="grid grid-cols-3 gap-8 p-10 box-content">
      <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
        <img src="Rectangle 1041.svg" alt="marketingImage" />
        <p className="font-semibold mt-2"> Cosmetic Forcase Marketing</p>
      </div>
      <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
        <img src="Rectangle 1042.svg" alt="SalesImg" />
        <p className="font-semibold mt-2">Saels Analytic</p>
      </div>
      <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
        <img src="Rectangle 1043.svg"  alt="FasionImage" />
        <p className="font-semibold mt-2">FAssion Store Mobile App </p>
      </div>
      <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
        <img src="Rectangle 1044.svg" alt="BrandImg" />
        <p className="font-semibold mt-2"> Laura's Clore Branding Identity</p>
      </div>
      <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
        <img src="Rectangle 1045.svg" alt="SEOImg" />
        <p className="font-semibold mt-2"> SEO Marketing 4.0</p>
      </div>

      <div className="hover:shadow-lg p-5 rounded-md flex flex-col justify-around ">
        <p className="text-my-yellow font-semibold text-left text-sm ">
          PROJECTS
        </p>
        <h1 className="text-3xl font-bold text-left">Selected Works from US</h1>
        <button className="border border-orange-500 p-3 font-bold rounded-full w-32">
          See More
        </button>
      </div>
    </div>
  );
};