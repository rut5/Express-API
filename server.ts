// npm run lint

import express from 'express';

// Initalize the Express app
const app = express();

const PORT = 3000;

// Simple route 
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});