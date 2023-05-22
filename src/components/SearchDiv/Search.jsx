import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex items-center gap-2">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blueColor focus:outline-none w-[100%]"
              placeholder="Search Job Here..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <div className="flex items-center gap-2">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blueColor focus:outline-none w-[100%]"
              placeholder="Search by company"
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blueColor focus:outline-none w-[100%]"
              placeholder="Search by location..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <button className="h-full p-5 px-10 bg-blueColor rounded-[10px] text-white cursor-pointer hover:bgblue-300">
            Search
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center gap-10 secDiv">
        <div className="flex items-center gap-2 singleSearch">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>

          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>
        <div className="flex items-center gap-2 singleSearch">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>

          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>
        <div className="flex items-center gap-2 singleSearch">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>

          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediete</option>
            <option value="">Advocate</option>
          </select>
        </div>
        <span className="text-[#a1a1a1]">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
