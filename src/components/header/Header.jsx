import React from "react";
import "./Header.css";

const Header = ({ handleIsShow }) => {
  return (
    <>
      <div className="flex gap-8 w-[100%] justify-between h-[51px] mt-[20px]">
        <div className="flex justify-between w-[1351px]">
          <span className="text-[#393939] font-semibold text-[24px]">Duas Page</span>
          <div className="relative w-[371px] h-[52px]">
            <input
              className="dark:placeholder:text-[#96a2b4] w-[100%] h-[100%] placeholder:text-sm bg-whitew-full rounded-md px-4 shadow-sm focus:outline-none focus:ring-1 ring-[#1FA45B] sm:text-sm  dark:placeholder:opacity-[.6]"
              type="text"
              placeholder="Search by Dua Name"
            />
            <button className="bg-[#F3F4F6] absolute top-[12%] right-2 rounded-md py-[10px] px-[15px]">
              <img className="" src="/header/search.png" alt="" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="/header/profile.png" alt="" />
          <img src="/header/down-arrow.png" alt="" />
          <img
            onClick={() => handleIsShow()}
            className="setting_icon lg:hidden"
            src="/header/settings.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
