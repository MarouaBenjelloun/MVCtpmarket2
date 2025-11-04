const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT 

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const apiRoutes = require('./routes/apiRoutes');
const homeRoutes = require('./routes/homeRoutes');

app.get('/', (req, res) => {
    res.send('Hello, Maroua!');
});

app.get('/api', (req, res) => {
    res.send('Ceci est une API');
});

app.get('/product', (req, res) => {
    res.send('Ceci est la page produit');
});

app.get('/payment', (req, res) => {
    res.send('Ceci est la page de paiement');
});

app.get('/user', (req, res) => {
    res.send('Ceci est la page utilisateur');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});