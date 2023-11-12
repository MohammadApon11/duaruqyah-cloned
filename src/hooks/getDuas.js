// Import React and necessary hooks from the 'react' library
import React from "react";

// Define a custom function 'getduas' to fetch duas from the server
const getduas = async () => {
  // Make a GET request to the "/api/duas" endpoint
  return await fetch("/api/duas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json()); // Parse the JSON response and return the promise
};

// Export the 'getduas' function as the default export of this module
export default getduas;
