// Import necessary modules for SQLite
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize a variable to hold the database connection
let db = null;

// Define an asynchronous function for handling GET requests
export async function GET(req, res) {
  // Check if the database connection has not been established
  if (!db) {
    // If not, establish a connection to the SQLite database
    db = await open({
      filename: "./dua_main.sqlite", // Specify the database file location
      driver: sqlite3.Database, // Specify the SQLite database driver
    });
  }

  // Retrieve all subcategories from the "sub_category" table in the database
  const subcategories = await db.all("SELECT * FROM sub_category");

  // Return a JSON response with the retrieved subcategories
  return new Response(JSON.stringify(subcategories), {
    headers: { "content-type": "application/json" }, // Set the response headers to indicate JSON content
    status: 200, // Set the HTTP status code to 200 (OK)
  });
}
