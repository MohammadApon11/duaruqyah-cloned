import getduas from "@/hooks/getDuas";
import getSubCategories from "@/hooks/getSubCategories";
import { useCatId } from "@/provider/CatIdProvider";
import React from "react";
import Duas from "./Duas";

const Dua = () => {
  // Destructuring assignment to extract 'catId' from the result of the 'useCatId' hook
  const { catId } = useCatId() || {};

  // Calling the 'getSubCategories' function to retrieve a list of sub-categories
  const subCategories = getSubCategories();

  // Filtering the list of sub-categories based on the 'catId' obtained from the hook
  const filteredSubCategories = subCategories.filter(
    (subCategory) => subCategory.cat_id === catId
  );

  return (
    <div
      className="w-full
     pb-44"
    >
      <div className="">
        {filteredSubCategories.map((subCategory, index) => (
          <Duas key={index} subCategory={subCategory} />
        ))}
      </div>
    </div>
  );
};

export default Dua;
