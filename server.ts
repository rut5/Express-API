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

// User data
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  res.json(users);
});

// Middleware to parse JSON data
app.use(express.json());

app.post('/users', (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res.json({ message: 'User added successfully', user: newUser });
});