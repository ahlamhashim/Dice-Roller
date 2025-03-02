const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to DiceRollerBackend!');
});

app.get('/roll', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll: diceRoll });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
