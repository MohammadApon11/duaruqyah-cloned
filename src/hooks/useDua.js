"use client"
// Import React and necessary hooks from the 'react' library
import React, { useState } from "react";

// Define a custom hook 'useDua' that takes 'cat_id' as a parameter
const useDua = (cat_id) => {
  // Initialize state to hold the 'id' using the 'useState' hook
  const [id, setId] = useState(null);

  // Set the 'id' state to the provided 'cat_id'
  setId(cat_id);

  // Return the 'id'
  return id;
};

// Export the 'useDua' hook as the default export of this module
export default useDua;
