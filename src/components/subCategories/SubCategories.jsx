"use client";
import React, { useEffect, useState } from "react";
import DuaName from "../duas/DuaName";
import { useCatId } from "@/provider/CatIdProvider";
import getduas from "@/hooks/getDuas";

const SubCategories = ({ subCategory, cat_id }) => {
  const { subcat_name_en, subcat_id } = subCategory;
  const { subCatId, setSubCatId } = useCatId();
  // Initialize state to hold the fetched duas using the 'useState' hook
  const [duas, setduas] = useState([]);

  // Make a GET request to the "/api/duas" endpoint
  useEffect(() => {
    // Call getduas and handle the resolved promise
    getduas().then((data) => {
      // Do something with the fetched duas
      setduas(data);
    });
  }, []);
  const filterDuas = duas.filter((dua) => subcat_id === dua.subcat_id);
  const isOpen = subCatId === subcat_id;

  const handleOpen = () => {
    setSubCatId(subcat_id);
  };

  return (
    <div className="ml-8 border-l-2 border-dotted my-2 border-[#1FA45B]">
      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
        <div className="flex flex-row my-2">
          <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
          <div className="flex flex-col justify-start items-start">
            <a onClick={() => handleOpen(cat_id)} href={`#${subcat_name_en}`}>
              <span
                className={`cursor-pointer font-semibold text-left text-sm ${
                  isOpen && "text-[#1FA45B]"
                }`}
              >
                {subcat_name_en}
              </span>
            </a>

            <div className={`${isOpen ? "block" : "hidden"}`}>
              {filterDuas.map((dua, index) => (
                <DuaName
                  key={index}
                  dua={dua}
                  cat_id={cat_id}
                  handleOpen={handleOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
