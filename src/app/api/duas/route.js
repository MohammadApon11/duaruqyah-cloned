// Import necessary modules for SQLite
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize the database variable
let db = null;

// Define the GET function for handling HTTP GET requests
export async function GET(req, res) {
  // Check if the database is not yet initialized
  if (!db) {
    // If not initialized, open the SQLite database
    db = await open({
      filename: "./dua_main.sqlite", // Specify the database file path
      driver: sqlite3.Database, // Use sqlite3 as the database driver
    });
  }

  // Retrieve all records (duas) from the 'dua' table in the database
  const duas = await db.all("SELECT * FROM dua");

  // Return a JSON response with the retrieved duas
  return new Response(JSON.stringify(duas), {
    headers: { "content-type": "application/json" }, // Set the response content type to JSON
    status: 200, // Set the HTTP status code to 200 (OK)
  });
}
