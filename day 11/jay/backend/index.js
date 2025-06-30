const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected..')).catch(err => console.error("Mongodb not connected"));

app.get('/', (req, res) => {
    res.send('api running');
})

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});