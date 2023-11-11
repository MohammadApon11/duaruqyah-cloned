// Import React and necessary hooks from the 'react' library
import React, { useEffect, useState } from "react";

// Define a custom function 'getSubCategories' to fetch subcategories from the server
const getSubCategories = () => {
  // Initialize state to hold the fetched subcategories using the 'useState' hook
  const [subCategories, setSubCategories] = useState([]);

  // Use the 'useEffect' hook to perform side effects (fetching data) when the component mounts
  useEffect(() => {
    // Make a GET request to the "/api/subCategories" endpoint
    fetch("/api/subCategories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // Parse the JSON response and update the state with the fetched subcategories
      res.json().then((data) => {
        setSubCategories(data);
      });
    });
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // Return the fetched subcategories
  return subCategories;
};

// Export the 'getSubCategories' function as the default export of this module
export default getSubCategories;
