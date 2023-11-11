// Import React and necessary hooks from the 'react' library
import React, { useEffect, useState } from "react";

// Define a custom function 'getCategories' to fetch categories from the server
const getCategories = () => {
  // Initialize state to hold the fetched categories using the 'useState' hook
  const [categories, setCategories] = useState([]);

  // Use the 'useEffect' hook to perform side effects (fetching data) when the component mounts
  useEffect(() => {
    // Make a GET request to the "/api/categories" endpoint
    fetch("/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // Parse the JSON response and update the state with the fetched categories
      res.json().then((data) => {
        setCategories(data);
      });
    });
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // Return the fetched categories
  return categories;
};

// Export the 'getCategories' function as the default export of this module
export default getCategories;
