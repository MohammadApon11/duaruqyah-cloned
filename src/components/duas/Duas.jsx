import getduas from "@/hooks/getDuas";
import React from "react";
import SingleDua from "./SingleDua";

const Duas = ({ subCategory }) => {
  // Calling the 'getduas' function to retrieve a list of duas
  const duas = getduas() || {};

  // Destructuring assignment to extract 'subcat_name_en' and 'subcat_id' from the 'subCategory' object
  const { subcat_name_en, subcat_id } = subCategory || {};

  // Filtering the list of duas based on the 'subcat_id' obtained from the 'subCategory'
  const filteredDuas = duas.filter((dua) => dua.subcat_id === subcat_id) || [];

  return (
    <>
      <div
        id={subcat_name_en}
        className="flex undefined mb-5 flex-row bg-white rounded-[10px] px-5 py-4 justify-start items-center "
      >
        <p className="font-medium leading-[25px]  text-ms">
          <span className="text-[#1FA45B]">Section:</span> {subcat_name_en}
        </p>
      </div>
      <div>
        {filteredDuas.map((dua, index) => (
          <SingleDua key={index} index={index} dua={dua} />
        ))}
      </div>
    </>
  );
};

export default Duas;
