// Import React and necessary hooks from the 'react' library
import React, { useEffect, useState } from "react";

// Define a custom function 'getduas' to fetch duas from the server
const getduas = () => {
  // Initialize state to hold the fetched duas using the 'useState' hook
  const [duas, setduas] = useState([]);

  // Use the 'useEffect' hook to perform side effects (fetching data) when the component mounts
  useEffect(() => {
    // Make a GET request to the "/api/duas" endpoint
    fetch("/api/duas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // Parse the JSON response and update the state with the fetched duas
      res.json().then((data) => {
        setduas(data);
      });
    });
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // Return the fetched duas
  return duas;
};

// Export the 'getduas' function as the default export of this module
export default getduas;
