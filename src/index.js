const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Serve static files from 'public' directory

app.use('/auth', authRoutes);

// Serve login.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

