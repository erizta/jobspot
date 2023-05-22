import React from "react";
import { BiTimeFive } from "react-icons/bi";

import logo1 from "../../assets/img-1.png";
import logo2 from "../../assets/img-2.png";
import logo3 from "../../assets/img-3.png";
import logo4 from "../../assets/img-4.png";
import logo5 from "../../assets/img-5.png";
import logo6 from "../../assets/img-6.png";
import logo7 from "../../assets/img-7.png";
import logo8 from "../../assets/img-8.png";

const Jobs = () => {
  const Data = [
    {
      id: 1,
      image: logo1,
      title: "Product Leader",
      time: "Now",
      location: "Lancaster, UK",
      desc: "We create to inspire - for you, for us, and for more than 1 billion users on our platform. We lead with curiosity and aim for the highest, never shying away from taking calculated risks and embracing ambiguity as it comes.",
      company: "TikTok",
    },
    {
      id: 2,
      image: logo2,
      title: "DevOps",
      time: "9d",
      location: "Southampton, UK",
      desc: "Backed by a growth equity firm with extensive resources and expertise in helping software and technology companies navigate transformational growth.",
      company: "Searchspring",
    },
    {
      id: 3,
      image: logo3,
      title: "UI Designer",
      time: "5d",
      location: "Manchester, UK",
      desc: "From making valuable connections between people and businesses to building premium services that deliver high-value experiences, the monetization organization at Meta empowers people and businesses to succeed in the global economy.",
      company: "Redvest",
    },
    {
      id: 4,
      image: logo4,
      title: "UI/UX Designer",
      time: "4hr",
      location: "Remote",
      desc: "We’re building a different kind of IT company, one that meets our customers and our own team on their turf, on their terms. We’re growing fast right now and you can be part of it with all the opportunities to add value that come with that. ",
      company: "SofIron",
    },
    {
      id: 5,
      image: logo5,
      title: "Data Specialist",
      time: "now",
      location: "Boston, US",
      desc: "EcoRise is seeking a highly organized and detail-oriented Data Specialist to join Gen:Thrive. Gen:Thrive is a mission-driven project aimed at advancing environmental education, climate resilience and equity across K-12 schools across the country",
      company: "EcoRise",
    },
    {
      id: 6,
      image: logo6,
      title: "Scrum Master",
      time: "3d",
      location: "Penang, Malaysia",
      desc: "he Scrum Master for our Marketing Automation Team plays a critical role in ensuring the success of our marketing campaign and projects to drive member registration and product usage. ",
      company: "ClintTech Health",
    },
    {
      id: 7,
      image: logo7,
      title: "Scrum Master",
      time: "9hr",
      location: "London, UK",
      desc: "The Scrum Master for our Marketing Automation Team plays a critical role in ensuring the success of our marketing campaign and projects to drive member registration and product usage. ",
      company: "ERP Mark Inch",
    },
    {
      id: 8,
      image: logo8,
      title: "Tech Support",
      time: "9hr",
      location: "Leeds, UK",
      desc: " KnowBe4 enables organizations to manage the ongoing problem of social engineering by helping them train employees to make smarter security decisions, every day.",
      company: "KnowBe4",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-10 py-10 jobContainer">
        {Data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="group group/item singleJob w-1/5 p-5 bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex items-center justify-between gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {item.title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {item.time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{item.location}</h6>
              <p className="text-sm text-[#959595] pt-5 border-t-2 mt-5 group-hover:text-white">
                {item.desc.length > 150
                  ? item.desc.substr(0, 150) + "..."
                  : item.desc}
              </p>

              <div className="flex items-center gap-2 company">
                <img src={item.image} alt="image_1" />
                <span className="block py-4 text-sm group-hover:text-white">
                  {item.company}
                </span>
              </div>

              <button className="border-2 rounded-[10px] block p-[10px] w-full text-sm font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
