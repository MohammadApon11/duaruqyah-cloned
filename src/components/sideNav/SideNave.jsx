import React from "react";
import "./SideNav.css";

const SideNave = () => {
  return (
    <>
      <div className="w-[100px] flex items-center justify-center bg-white rounded-3xl overflow-y-auto">
        <div className="flex flex-col items-center">
          <img
            className="pt-[20px] pb-[100px]"
            src="/sideNav/img1.png"
            alt="Dua_Logo"
          />
          <div className="flex flex-col gap-[27px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full">
              <img src="/sideNav/img2.png" alt="" />
            </div>
            <div className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full">
              <img src="/sideNav/img3.png" alt="" />
            </div>
            <div className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full">
              <img src="/sideNav/img4.png" alt="" />
            </div>
            <div className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full">
              <img src="/sideNav/img5.png" alt="" />
            </div>
            <div className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full">
              <img src="/sideNav/img6.png" alt="" />
            </div>
            <div className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full">
              <img src="/sideNav/img7.png" alt="" />
            </div>
            <div className="w-[38px] h-[38px] flex items-center justify-center p-1 bg-[#E8F0F5] rounded-full">
              <img src="/sideNav/img8.png" alt="" />
            </div>
          </div>
          <img className="pb-[31px] pt-[100px]" src="/sideNav/img9.png" alt="Support" />
        </div>
      </div>
    </>
  );
};

export default SideNave;
