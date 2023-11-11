import React from "react";
import { HiOutlineXMark } from "react-icons/hi";

const Settings = ({ handleIsShow }) => {
  return (
    <>
      <div className="overflow-hidden w-full">
        <div className="bg-white w-full h-[85.5vh] rounded-3xl pb-16 md:rounded-l-3xl md:rounded-r-none lg:h-screen lg:rounded-l-3xl lg:rounded-r-none xl:h-screen xl:rounded-l-3xl xl:rounded-r-none 2xl:w-full 3xl:w-full">
          <div
            className="pt-9 pb-6 sm:pt-0
        "
          >
            <p className="text-center text-xl  xs:hidden sm:hidden">Settings</p>
          </div>
          <span
            onClick={() => handleIsShow()}
            id="hide_for_lg"
            className="text-[#1FA45B] text-[30px] mr-4 pt-[-20px] text-end font-bold"
          >
            ❎
          </span>
          <div className="sm:pb-4 w-full">
            <div className="mx-3 my-4">
              <div className="border-x-devider border-x-1 border-b-1 rounded-lg dark:border-none ">
                <div className="cursor-pointer">
                  <div className="-lite transition duration-300 delay-[10ms] bg-[#F7F8FA] flex flex-row w-full rounded-lg">
                    <div className="bg-[#1FA45B] w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-[#E8F0F5] flex p-2 items-center rounded-full mr-5 justify-center  ">
                        <img src="/settings/language.png " alt="language" />
                      </div>
                      <p className="font-medium  text-start text-base leading-5 xs:text-sm  ">
                        Language Settings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="py-6 rounded-b-lg">
                    <div className="flex flex-row gap-x-3 mx-4 justify-center">
                      <button className="bg-[#1FA45B] text-white rounded-md   w-29 h-10 text-ms xs:w-full sm:w-full">
                        English
                      </button>
                      <button className=" text-black border border-solid border-[#cccdcf] rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
                        বাংলা
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-[#F7F8FA] flex flex-row w-full rounded-lg ">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-[#E8F0F5] flex p-2 items-center rounded-full mr-5 justify-center  ">
                        <img src="/settings/general.png " alt="general" />
                      </div>
                      <p className="text-mute-grey-200   text-start text-base leading-5 xs:text-sm  ">
                        General Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-[#F7F8FA] flex flex-row w-full rounded-lg ">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-[#E8F0F5] flex p-2 items-center rounded-full mr-5 justify-center  ">
                        <img src="/settings/menu.png" alt="font" />
                      </div>
                      <p className="text-mute-grey-200   text-start text-base leading-5 xs:text-sm  ">
                        Font Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-[#F7F8FA] flex flex-row w-full rounded-lg ">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-[#E8F0F5] flex p-2 items-center rounded-full mr-5 justify-center  ">
                        <img src="/settings/menu-2.png " alt="font" />
                      </div>
                      <p className="text-[#1FA45B] text-start text-base leading-5 xs:text-sm  ">
                        Appearance Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
