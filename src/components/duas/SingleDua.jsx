import React from "react";
import { toast } from "react-hot-toast";

const SingleDua = ({ dua, index }) => {
  // destructure dua need property
  const {
    dua_name_en,
    dua_id,
    audio,
    bottom_en,
    clean_arabic,
    dua_arabic,
    dua_indopak,
    refference_en,
    top_en,
    translation_en,
    transliteration_en,
  } = dua || {};
  return (
    <div id={dua_id} className="bg-white rounded-[10px] mb-5">
      <div className="p-6">
        <div>
          <div className="flex flex-row justify-start items-center ">
            <img src="/dua/allah.png" alt="duacard" className="mr-3" />
            <p className="text-[#1FA45B] font-medium -dua-title">
              {index + 1}. {dua_name_en}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="w-full">
            <p className="  text-[18px]  mt-5 text-justify leading-8 font-normal">
              <span> {top_en}</span>
            </p>
            <p
              className=" my-8 text-right leading-loose text-3xl"
              style={{
                wordSpacing: "8px",
                fontSize: "24px",
                fontFamily: "me_quran",
              }}
            >
              <span> {dua_arabic}</span>
            </p>
            <p className="  text-[18px]  my-5 text-justify leading-8 italic">
              <span
                id="transliteration"
                className=" text-[18px] -dua-title -dua-title font-medium"
              >
                Transliteration:
              </span>{" "}
              <span> {transliteration_en}</span>
            </p>
            <p
              id="translation"
              className="  text-[18px]  my-5 text-title text-justify font-normal"
            >
              <span className=" text-[18px] -dua-title -dua-title font-medium">
                Translation:
              </span>{" "}
              <span> {translation_en}</span>
            </p>
          </div>
          <div>
            <p className="mt-5 text-[18px]  font-normal text-[#1FA45B]">
              Reference:
            </p>
            <div className="mt-1 text-[18px] font-normal ">
              <span> {refference_en}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between px-6">
        <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
          <audio src={audio}></audio>
          <div className="flex flex-row items-center gap-x-3 xs:w-full">
            <img className="cursor-pointer" src="/dua/audio.svg" alt="" />
            <input
              className="hidden"
              type="range"
              min="0"
              max="0"
              style={{ backgroundSize: "0% 100%" }}
            />
          </div>
          <div className="hidden">
            <p className="ml-2 text-mute-grey-200 text-sm ">00:00</p>
          </div>
        </div>
        <div className="flex items-center text-left flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
          <div
            id="copy"
            onClick={() =>
              toast.success("Copeid!", {
                style: { backgrouColor: "black" },
                className: " h-[70px] flex text-left",
              })
            }
            className="relative w-6"
          >
            <img className="cursor-pointer" src="/dua/copy.png" alt="copy" />
            <div id="copy_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Copy
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
          <div id="bookmark" className="relative w-6">
            <img
              onClick={() =>
                toast.success("Comming Soon In sha llah!", {
                  position: "top-right",
                  className: "w-[260px] h-[70px] flex text-left",
                })
              }
              className="cursor-pointer"
              src="/dua/bookmarks.png"
              alt="bookmark"
            />
            <div id="bookmark_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Bookmark
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
          <div id="plan" className="relative w-6">
            <img
              onClick={() =>
                toast.success("Comming Soon In sha llah!", {
                  position: "top-right",
                  className: "w-[260px] h-[70px] flex text-left",
                })
              }
              className="cursor-pointer"
              src="/dua/plan.png"
              alt="plan"
            />
            <div id="plan_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Memorize
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
          <div id="share" className="relative w-6">
            <img
              onClick={() =>
                toast.success("Comming Soon In sha llah!", {
                  position: "top-right",
                  className: "w-[260px] h-[70px] flex text-left",
                })
              }
              className="cursor-pointer"
              src="/dua/share.png"
              alt="share"
            />
            <div id="share_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Share
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
          <div id="report" className="relative w-6">
            <img
              onClick={() =>
                toast.success("Comming Soon In sha llah!", {
                  position: "top-right",
                  className: "w-[260px] h-[70px] flex text-left",
                })
              }
              className="cursor-pointer"
              src="/dua/report.svg"
              alt="report"
            />
            <div id="report_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Report
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDua;
