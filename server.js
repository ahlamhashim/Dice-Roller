const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// API to roll a dice
app.get('/roll-dice', (req, res) => {
  const diceResult = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  res.json({ result: diceResult });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});