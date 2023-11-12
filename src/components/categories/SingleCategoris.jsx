"use client";
import React, { useEffect, useState } from "react";
import SubCategories from "../subCategories/SubCategories";
import { useCatId } from "@/provider/CatIdProvider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import getSubCategories from "@/hooks/getSubCategories";

const SingleCategoris = ({ category }) => {
  // State variables for categories and filter text
  const [subCategories, setSubCategories] = useState([]);

  // useEffect call for each subCategory
  useEffect(() => {
    // Call getSubCategories and handle the resolved promise
    getSubCategories().then((subCategories) => {
      // Do something with the fetched subcategories
      setSubCategories(subCategories);
    });
  }, []);

  // Destructure values from the 'category' object
const { cat_name_en, no_of_subcat, no_of_dua, cat_id } = category;

// Destructure values from the custom hook 'useCatId' or initialize an empty object
const { catId, setCatId } = useCatId() || {};

// Check if the current category is open based on the comparison of 'cat_id' and 'catId'
const isOpen = cat_id === catId;

// Define a function to handle opening the current category
const handleOpen = () => {
  setCatId(cat_id);
};

// Filter subcategories based on the current category id ('cat_id')
const filteredSubCategories = subCategories.filter((c) => c.cat_id === cat_id);

  return (
    <>
      <a className="pt-2" onClick={handleOpen} href={`#${cat_id}`}>
        <div
          onClick={handleOpen}
          className={`mx-auto flex items-center justify-between gap-2 p-[10px] rounded-[10px] hover:bg-[#E8F0F5] cursor-pointer ${
            isOpen ? "bg-[#E8F0F5]" : ""
          }
        `}
        >
          <div className="flex items-center gap-2">
            <div className="p-[10px] bg-[#CFE0E5] rounded-[10px] flex items-center justify-center">
              <img src="/category/category_icon.png" alt="" />
            </div>
            <div>
              <span className="text-[16px] block font-semibold">
                {cat_name_en || <Skeleton />}
              </span>
              <span className="text-[#7E7E7E] text-[14px]">
                Subcategory: {no_of_subcat || <Skeleton />}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#E8F0F5] w-[1px] mr-3 h-12"></div>
            <div>
              <span className="text-[16px] block font-semibold">
                {no_of_dua}
              </span>
              <span className="text-[#7E7E7E] text-[14px]">Duas</span>
            </div>
          </div>
        </div>
      </a>

      <div className={`${isOpen ? "block" : "hidden"}`}>
        {filteredSubCategories.map((subCategory, index) => (
          <SubCategories
            key={index}
            subCategory={subCategory}
            cat_id={cat_id}
          />
        ))}
      </div>
    </>
  );
};

export default SingleCategoris;
