import React from "react";

// Define a custom function 'getCategories' to fetch categories from the server
const getCategories = async () => {
  // Make a GET request to the "/api/categories" endpoint
  return await fetch("/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json()); // Parse the JSON response and return the promise
};
export default getCategories;
