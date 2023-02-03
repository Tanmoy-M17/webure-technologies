import React from "react";
import "./custom.css";

export const BoxCntent = () => {
  let img = [
    {
      logo: "design.svg",
      title: "Design",
      details:
        "Lorem ipsum dolor sit adip isicing elit.incidunt repudiandae est! Deserunt totam recusan repu diandae est!",
    },
    {
      logo: "frontenddev.svg",
      title: "Front End Development",
      details:
        "Lorem ipsum dolor si  adi pisicing elit.incidunt repudiandae est! Deserunt totam recusan repu diandae est!",
    },
    {
      logo: "backendDev.svg",
      title: "Back End Development",
      details:
        "Lorem ipsum dolor si  adi pisicing elit.incidunt repudiandae est! Deserunt totam recusan repu diandae est!",
    },
    {
      logo: "applicationDev.svg",
      title: "Application Development",
      details:
        "Lorem ipsum dolor sit adip isicing elit.incidunt repudiandae est! Deserunt totam recusa  rep udiandae est!",
    },
    {
      logo: "backendDev.svg",
      title: "Cloud Services",
      details:
        "Lorem ipsum dolor sit adip isicing elit.incidunt repudiandae est! Deserunt totam recusa  rep udiandae est!",
    },
    {
      logo: "analytics.svg",
      title: "Analytics",
      details:
        "Lorem ipsum dolor si  adi pisicing elit.incidunt repudiandae est! Deserunt totam recusan repu diandae est!",
    },
    {
      logo: "Qa.svg",
      title: "Q-A And Testing",
      details:
        "Lorem ipsum dolor si  adi pisicing elit.incidunt repudiandae est! Deserunt totam recusa  rep udiandae est!",
    },
    {
      logo: "backOffice.svg",
      title: "Back Office Support",
      details:
        "Lorem ipsum sit amet, consectetur adipisicing elit. Deserunt totam recusandae natus incidunt repudiandae est!",
    },
  ];
  return (
<div >
<div className="">
<img className="w-fit ml-px mt-16" src="XMLID_15_.svg" alt="" />
<h1 className="font-bold text-5xl">What De do</h1>
</div>

<div className=" flex m-16">
  <h1 className="text-2xl font-bold">Our Services</h1>
  <h1 className="font-bold text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Expedita, nostrum. Reiciendis, libero quos officiis placeat veniam corrupti magnam
     quia voluptatem molestias, velit ad non eveniet architecto voluptatibus. Vero, unde nisi?
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio consequuntur 
     officia iusto asperiores dolores natus obcaecati in deserunt autem, 
     illo mollitia reprehenderit iste, odio nobis nihil recusandae eum quas.</h1>
</div>

    <div className="grid grid-cols-4 gap-4 p-10">
      {img.map((e, i) => {
        return (
          <div className="hover:bg-violet-900  text-center shadow-xl rounded-lg ">
            <div className="hover:invert p-10 hover:text-white flex flex-col justify-center items-center gap-4  mystyle h-80 max-w-xs" >
              <img
                src={e.logo}
                alt=""
                className={
                  i === 0
                    ? " invert  m-auto  hover:hue-rotate-[180deg] hover:saturate-100 "
                    : "  m-auto  hover:hue-rotate-[180deg] hover:saturate-100 "
                }
              />

              <h1 className="text-2xl font-bold invert text-white  ">
                {e.title}
              </h1>
              <p className="invert  text-white text-justify">{e.details}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div> 
  );
};
