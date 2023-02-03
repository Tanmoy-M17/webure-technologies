import React from "react";
import "./Styles/Part.css";
const Services = () => {
  return (
    <div className=" flex justify-between items-center h-1/2 container6">
      

      <div className="service">
        <p className=" w-16 h-4 servicep">SERVICES</p>
        <h1 className="heading">Our Capabilities</h1>
        <p className="servicepara">We will bring the breathe of our experience and industry knowledge to help you succeed</p>
        <img className="vector" src="Vector.svg" alt="" />
      </div>

      <div className="flex pt-12 card">
        <div>
          <img src="Consult.svg" alt="" />
          <p className="para1">Consult</p>
          <p className="para2">Leverage agile framework to provide a robust high level synopsys overviews</p>
        </div>
        <div>
          <img src="Create.svg" alt="" />
          <p className="para1">Create</p>
          <p className="para2">Bring to the table survival stragies to ensure proactive domination</p>
        </div>
        <div>
          <img src="Colaborate.svg" alt="" />
          <p className="para1">Colaborate</p>
          <p className="para2">Grows the holistic world view of disruptive innovation worksspac</p>
        </div>
       
      </div>
      </div>
   
  );
};

export default Services;
