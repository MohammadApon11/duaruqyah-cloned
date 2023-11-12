// Import React and necessary hooks from the 'react' library
import React from "react";

// Define a custom function 'getSubCategories' to fetch subcategories from the server
const getSubCategories = async () => {
  // Make a GET request to the "/api/subCategories" endpoint
  return await fetch("/api/subCategories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json()); // Parse the JSON response and return the promise
};

export default getSubCategories;
