# Express.js Assignment

## Description
This is a simple Node.js application built using Express.js.  
It serves static HTML and CSS files using the Node.js `fs` module and provides a REST API endpoint.

## How to Run
1. Install dependencies:
   npm install

2. Start the server:
   npm start

3. Open browser:
   http://localhost:3000

## Endpoints
- `/` → Serves index.html
- `/style.css` → Serves CSS file
- `/api/products` → Returns JSON product data
- Invalid routes → Returns 404 Not Found

