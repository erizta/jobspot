import React from "react";
import logo1 from "../../assets/p1.png";
import logo2 from "../../assets/p2.png";
import logo3 from "../../assets/p3.png";

const Value = () => {
  const data = [
    {
      id: 1,
      image: logo1,
      title: "Simplicity",
      desc: "Things being made beautiful simple are at the heart of everything we do.",
    },
    {
      id: 2,
      image: logo2,
      title: "Simplicity",
      desc: "We believe in making things better for everyone, even if just by a little bit!",
    },
    {
      id: 3,
      image: logo3,
      title: "Simplicity",
      desc: "We work on the basis of creating trust which can be nurtured through authenticity and transparancy",
    },
  ];
  return (
    <div className="mt-24 mb-16">
      <h1 className="py-8 pb-12 text-2xl font-bold text-textColor w-[400px] block">
        The value that holds us true and to account
      </h1>

      <div className="grid items-center grid-cols-3 gap-40">
        {data.map((item, idx) => {
          return (
            <div
              className="singleGrid rounded-xl hover:bg-[#eeedf7] p-6"
              key={idx}
            >
              <div className="flex items-center gap-3">
                <div className="p-1 imgDiv rounded-xl bg-inherit [#dedef8] h-10 w-10 flex items-center justify-center ">
                  <img src={item.image} alt={`item-${item.image}`} />
                </div>
                <span className="text-lg font-semibold text-textColor">
                  {item.title}
                </span>
              </div>
              <p className="py-4 text-sm font-semibold text-textColor opacity-70">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Value;
