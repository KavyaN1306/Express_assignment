//ECHO is on.
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Root route - serve index.html
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    res.send(data);
  });
});

// CSS route - serve style.css
app.get('/style.css', (req, res) => {
  const filePath = path.join(__dirname, 'style.css');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    res.setHeader('Content-Type', 'text/css');
    res.send(data);
  });
});

// API route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Mouse' }
  ]);
});

// 404 handling (catch-all)
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
